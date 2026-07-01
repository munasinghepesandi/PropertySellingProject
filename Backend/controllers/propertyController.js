const pool = require('../config/db');

function normalizeImagesFromFiles(files = [], fallbackImage = null) {
  const fileImages = files.map((file) => `/uploads/${file.filename}`);

  if (fileImages.length) {
    return fileImages;
  }

  if (fallbackImage) {
    return [fallbackImage];
  }

  return [];
}

function parseStoredImages(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [value];
  }
}

// ── GET /api/properties ──────────────────────────────────────
const getProperties = async (req, res) => {
  try {
    const {
      type, listing_type, district, status,
      min_price, max_price, bedrooms,
      page = 1, limit = 12, search, q
    } = req.query;

    let where = ['1=1'];
    let params = [];

    if (type)         { where.push('p.type = ?');         params.push(type); }
    if (listing_type) { where.push('p.listing_type = ?'); params.push(listing_type); }
    if (district)     { where.push('d.name = ?');         params.push(district); }
    if (status)       { where.push('p.status = ?');       params.push(status); }
    if (min_price)    { where.push('p.price >= ?');       params.push(Number(min_price)); }
    if (max_price)    { where.push('p.price <= ?');       params.push(Number(max_price)); }
    if (bedrooms)     { where.push('p.bedrooms = ?');     params.push(Number(bedrooms)); }
    if (search || q)  { where.push('p.title LIKE ?');     params.push(`%${search || q}%`); }

    const offset = (Number(page) - 1) * Number(limit);

    const sql = `
      SELECT p.*, d.name AS district_name,
             u.name AS owner_name,
             COALESCE(
               JSON_UNQUOTE(JSON_EXTRACT(p.images, '$[0]')),
               (SELECT url FROM property_images
                WHERE property_id = p.id LIMIT 1)
             ) AS cover_image
             ,(SELECT COUNT(*) FROM property_images
              WHERE property_id = p.id) AS image_count
      FROM properties p
      LEFT JOIN districts d ON p.district_id = d.id
      LEFT JOIN users u ON p.user_id = u.id
      WHERE ${where.join(' AND ')}
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(sql, [...params, Number(limit), offset]);
    const [[{ total }]] = await pool.query(
      `SELECT COUNT(*) AS total FROM properties p
       LEFT JOIN districts d ON p.district_id = d.id
       WHERE ${where.join(' AND ')}`,
      params
    );

    res.json({
      data: rows,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit))
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── GET /api/properties/:id ──────────────────────────────────
const getPropertyById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*, d.name AS district_name,
              u.name AS owner_name,
              u.phone AS owner_phone,
              u.email AS owner_email
       FROM properties p
       LEFT JOIN districts d ON p.district_id = d.id
       LEFT JOIN users u ON p.user_id = u.id
       WHERE p.id = ?`,
      [req.params.id]
    );

    if (!rows.length)
      return res.status(404).json({ message: 'Property not found' });

    const storedImages = parseStoredImages(rows[0].images);

    const [imageRows] = await pool.query(
      'SELECT * FROM property_images WHERE property_id = ?',
      [req.params.id]
    );

    res.json({
      ...rows[0],
      images: storedImages.length ? storedImages : imageRows.map((image) => image.url),
      image_records: imageRows,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── POST /api/properties ─────────────────────────────────────
const createProperty = async (req, res) => {
  try {
    const {
      title, description, type, listing_type,
      price, price_type, district_id, city, address,
      bedrooms, bathrooms, land_area, floor_area,
      agent_name, agent_phone, is_featured, allow_inquiries,
      status
    } = req.body;
    const storedImages = normalizeImagesFromFiles(req.files, req.body.image_url || null);

    if (!title || !type || !price || !district_id)
      return res.status(400).json({ message: 'title, type, price, district_id are required' });

    const [result] = await pool.query(
      `INSERT INTO properties
        (title, description, type, listing_type, price, price_type,
         district_id, city, address, bedrooms, bathrooms,
         land_area, floor_area, images, agent_name, agent_phone,
         is_featured, allow_inquiries, user_id, status)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        title,
        description || null,
        type,
        listing_type || 'sale',
        price,
        price_type || 'total',
        district_id,
        city || null,
        address || null,
        bedrooms || null,
        bathrooms || null,
        land_area || null,
        floor_area || null,
        storedImages.length ? JSON.stringify(storedImages) : null,
        agent_name || null,
        agent_phone || null,
        is_featured ? 1 : 0,
        allow_inquiries !== undefined ? (allow_inquiries ? 1 : 0) : 1,
        req.user.id,
        status || 'pending'
      ]
    );

    // Save uploaded images
    if (storedImages.length) {
      const imageValues = storedImages.map((imagePath) => [result.insertId, imagePath]);
      await pool.query(
        'INSERT INTO property_images (property_id, url) VALUES ?',
        [imageValues]
      );
    }

    res.status(201).json({
      id: result.insertId,
      message: 'Property created successfully',
      images: storedImages,
      cover_image: storedImages[0] || null,
      title,
      location: req.body.location || req.body.district || null,
      price,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

    // ── POST /api/properties/public (no auth) ────────────────────
    const createPropertyPublic = async (req, res) => {
      try {
        const {
          title, description, type, listing_type,
          price, price_type, district_id, city, address,
          bedrooms, bathrooms, land_area, floor_area,
          agent_name, agent_phone, is_featured, allow_inquiries,
          status
        } = req.body;
        const storedImages = normalizeImagesFromFiles(req.files, req.body.image_url || null);

        if (!title || !type || !price)
          return res.status(400).json({ message: 'title, type and price are required' });

        // Resolve district_id: allow passing district_id or location/district name
        let finalDistrictId = district_id || null;
        const districtName = req.body.district || req.body.location || null;
        if (!finalDistrictId && districtName) {
          const [existing] = await pool.query('SELECT id FROM districts WHERE name = ? LIMIT 1', [districtName]);
          if (existing.length) {
            finalDistrictId = existing[0].id;
          } else {
            const [ins] = await pool.query('INSERT INTO districts (name) VALUES (?)', [districtName]);
            finalDistrictId = ins.insertId;
          }
        }

        const [result] = await pool.query(
          `INSERT INTO properties
            (title, description, type, listing_type, price, price_type,
             district_id, city, address, bedrooms, bathrooms,
             land_area, floor_area, images, agent_name, agent_phone,
             is_featured, allow_inquiries, user_id, status)
           VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
          [
            title,
            description || null,
            type,
            listing_type || 'sale',
            price,
            price_type || 'total',
            finalDistrictId,
            city || null,
            address || null,
            bedrooms || null,
            bathrooms || null,
            // map provided area to floor_area if present
            land_area || null,
            floor_area || req.body.area || null,
            storedImages.length ? JSON.stringify(storedImages) : null,
            agent_name || null,
            agent_phone || null,
            is_featured ? 1 : 0,
            allow_inquiries !== undefined ? (allow_inquiries ? 1 : 0) : 1,
            null, // public posts have no user_id
            status || 'active' // public posts active by default
          ]
        );

        // Save uploaded images
        if (storedImages.length) {
          const imageValues = storedImages.map((imagePath) => [result.insertId, imagePath]);
          await pool.query(
            'INSERT INTO property_images (property_id, url) VALUES ?',
            [imageValues]
          );
        }

        res.status(201).json({
          id: result.insertId,
          message: 'Property created successfully',
          images: storedImages,
          cover_image: storedImages[0] || null,
          title,
          location: req.body.location || districtName || null,
          price,
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };

// ── PUT /api/properties/:id ──────────────────────────────────
const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, description, type, listing_type,
      price, price_type, district_id, city, address,
      bedrooms, bathrooms, land_area, floor_area,
      agent_name, agent_phone, is_featured, allow_inquiries,
      status
    } = req.body;

    const [check] = await pool.query(
      'SELECT user_id FROM properties WHERE id = ?',
      [id]
    );
    if (!check.length)
      return res.status(404).json({ message: 'Property not found' });
    if (check[0].user_id !== req.user.id && req.user.role !== 'admin')
      return res.status(403).json({ message: 'Not authorised' });

    await pool.query(
      `UPDATE properties SET
        title=?, description=?, type=?, listing_type=?,
        price=?, price_type=?, district_id=?, city=?, address=?,
        bedrooms=?, bathrooms=?, land_area=?, floor_area=?,
        agent_name=?, agent_phone=?, is_featured=?,
        allow_inquiries=?, status=?
       WHERE id=?`,
      [
        title, description, type,
        listing_type || 'sale',
        price, price_type, district_id,
        city || null, address,
        bedrooms, bathrooms,
        land_area || null, floor_area || null,
        agent_name || null, agent_phone || null,
        is_featured ? 1 : 0,
        allow_inquiries ? 1 : 0,
        status, id
      ]
    );

    res.json({ message: 'Property updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── DELETE /api/properties/:id ───────────────────────────────
const deleteProperty = async (req, res) => {
  try {
    const [check] = await pool.query(
      'SELECT user_id FROM properties WHERE id = ?',
      [req.params.id]
    );
    if (!check.length)
      return res.status(404).json({ message: 'Property not found' });
    if (check[0].user_id !== req.user.id && req.user.role !== 'admin')
      return res.status(403).json({ message: 'Not authorised' });

    await pool.query(
      'DELETE FROM property_images WHERE property_id = ?',
      [req.params.id]
    );
    await pool.query(
      'DELETE FROM properties WHERE id = ?',
      [req.params.id]
    );

    res.json({ message: 'Property deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── PATCH /api/properties/:id/status (admin) ─────────────────
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['active', 'pending', 'sold', 'rented', 'inactive', 'expired'];
    if (!allowed.includes(status))
      return res.status(400).json({ message: 'Invalid status value' });

    await pool.query(
      'UPDATE properties SET status=? WHERE id=?',
      [status, req.params.id]
    );

    res.json({ message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProperties,
  getPropertyById,
  createProperty,
  createPropertyPublic,
  updateProperty,
  deleteProperty,
  updateStatus
};