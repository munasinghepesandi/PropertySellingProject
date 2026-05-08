const pool = require('../config/db');

// ── GET /api/properties ──────────────────────────────────────
const getProperties = async (req, res) => {
  try {
    const {
      type, district, status, min_price, max_price,
      bedrooms, page = 1, limit = 12, search
    } = req.query;

    let where = ['1=1'];
    let params = [];

    if (type)      { where.push('p.type = ?');           params.push(type); }
    if (district)  { where.push('d.name = ?');           params.push(district); }
    if (status)    { where.push('p.status = ?');         params.push(status); }
    if (min_price) { where.push('p.price >= ?');         params.push(Number(min_price)); }
    if (max_price) { where.push('p.price <= ?');         params.push(Number(max_price)); }
    if (bedrooms)  { where.push('p.bedrooms = ?');       params.push(Number(bedrooms)); }
    if (search)    { where.push('p.title LIKE ?');       params.push(`%${search}%`); }

    const offset = (Number(page) - 1) * Number(limit);

    const sql = `
      SELECT p.*, d.name AS district_name,
             u.name AS owner_name,
             (SELECT image_url FROM property_images WHERE property_id = p.id LIMIT 1) AS cover_image
      FROM properties p
      LEFT JOIN districts d ON p.district_id = d.id
      LEFT JOIN users u ON p.user_id = u.id
      WHERE ${where.join(' AND ')}
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(sql, [...params, Number(limit), offset]);
    const [[{ total }]] = await pool.query(
      `SELECT COUNT(*) AS total FROM properties p LEFT JOIN districts d ON p.district_id = d.id WHERE ${where.join(' AND ')}`,
      params
    );

    res.json({ data: rows, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── GET /api/properties/:id ──────────────────────────────────
const getPropertyById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*, d.name AS district_name, u.name AS owner_name, u.phone AS owner_phone, u.email AS owner_email
       FROM properties p
       LEFT JOIN districts d ON p.district_id = d.id
       LEFT JOIN users u ON p.user_id = u.id
       WHERE p.id = ?`,
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ message: 'Property not found' });

    const [images] = await pool.query('SELECT * FROM property_images WHERE property_id = ?', [req.params.id]);
    res.json({ ...rows[0], images });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── POST /api/properties ─────────────────────────────────────
const createProperty = async (req, res) => {
  try {
    const {
      title, description, type, price, price_type,
      district_id, address, bedrooms, bathrooms, area_sqft
    } = req.body;

    if (!title || !type || !price || !district_id)
      return res.status(400).json({ message: 'title, type, price, district_id are required' });

    const [result] = await pool.query(
      `INSERT INTO properties
        (title, description, type, price, price_type, district_id, address, bedrooms, bathrooms, area_sqft, user_id, status)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [title, description || null, type, price, price_type || 'sale',
       district_id, address || null, bedrooms || null, bathrooms || null,
       area_sqft || null, req.user.id, 'pending']
    );

    // Save uploaded images
    if (req.files && req.files.length) {
      const imageValues = req.files.map(f => [result.insertId, `/uploads/${f.filename}`]);
      await pool.query('INSERT INTO property_images (property_id, image_url) VALUES ?', [imageValues]);
    }

    res.status(201).json({ id: result.insertId, message: 'Property created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── PUT /api/properties/:id ──────────────────────────────────
const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, description, type, price, price_type,
      district_id, address, bedrooms, bathrooms, area_sqft, status
    } = req.body;

    const [check] = await pool.query('SELECT user_id FROM properties WHERE id = ?', [id]);
    if (!check.length) return res.status(404).json({ message: 'Property not found' });
    if (check[0].user_id !== req.user.id && req.user.role !== 'admin')
      return res.status(403).json({ message: 'Not authorised' });

    await pool.query(
      `UPDATE properties SET
        title=?, description=?, type=?, price=?, price_type=?,
        district_id=?, address=?, bedrooms=?, bathrooms=?, area_sqft=?, status=?
       WHERE id=?`,
      [title, description, type, price, price_type, district_id,
       address, bedrooms, bathrooms, area_sqft, status, id]
    );

    res.json({ message: 'Property updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── DELETE /api/properties/:id ───────────────────────────────
const deleteProperty = async (req, res) => {
  try {
    const [check] = await pool.query('SELECT user_id FROM properties WHERE id = ?', [req.params.id]);
    if (!check.length) return res.status(404).json({ message: 'Property not found' });
    if (check[0].user_id !== req.user.id && req.user.role !== 'admin')
      return res.status(403).json({ message: 'Not authorised' });

    await pool.query('DELETE FROM property_images WHERE property_id = ?', [req.params.id]);
    await pool.query('DELETE FROM properties WHERE id = ?', [req.params.id]);
    res.json({ message: 'Property deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── PATCH /api/properties/:id/status (admin) ─────────────────
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['active', 'pending', 'sold', 'rent', 'inactive'];
    if (!allowed.includes(status))
      return res.status(400).json({ message: 'Invalid status value' });

    await pool.query('UPDATE properties SET status=? WHERE id=?', [status, req.params.id]);
    res.json({ message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProperties, getPropertyById, createProperty, updateProperty, deleteProperty, updateStatus };