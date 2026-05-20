const pool = require('../config/db');
const path = require('path');

// ── GET /admin/properties ─────────────────────────────────────
const listProperties = async (req, res) => {
  try {
    const { q, type, district, listing_type, status, page = 1 } = req.query;
    const perPage = 20;
    const offset  = (Number(page) - 1) * perPage;

    let where  = ['1=1'];
    let params = [];

    if (q)            { where.push('(p.title LIKE ? OR p.city LIKE ? OR p.address LIKE ?)'); params.push(`%${q}%`, `%${q}%`, `%${q}%`); }
    if (type)         { where.push('p.type = ?');         params.push(type); }
    if (district)     { where.push('p.district_id = ?');  params.push(district); }
    if (listing_type) { where.push('p.listing_type = ?'); params.push(listing_type); }
    if (status)       { where.push('p.status = ?');       params.push(status); }

    const [rows] = await pool.query(`
      SELECT p.id, p.title, p.type, p.listing_type, p.price, p.city,
             p.address, p.status, p.created_at,
             d.name AS district
      FROM properties p
      LEFT JOIN districts d ON p.district_id = d.id
      WHERE ${where.join(' AND ')}
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `, [...params, perPage, offset]);

    const [[{ total }]] = await pool.query(`
      SELECT COUNT(*) AS total
      FROM properties p
      LEFT JOIN districts d ON p.district_id = d.id
      WHERE ${where.join(' AND ')}
    `, params);

    const [districts] = await pool.query(
      'SELECT id, name FROM districts ORDER BY name'
    );

    // Format for display
    const properties = rows.map(p => ({
      ...p,
      price:      `LKR ${Number(p.price).toLocaleString()}`,
      listingType: p.listing_type,
      createdAt:  p.created_at
        ? new Date(p.created_at).toLocaleDateString('en-GB')
        : '—'
    }));

    res.render('admin/properties', {
      properties,
      districts,
      filters:     { q, type, district, listing_type, status },
      currentPage: Number(page),
      totalPages:  Math.ceil(total / perPage),
      perPage,
      title:       'Properties',
      page:        'properties'
    });
  } catch (err) {
    console.error('listProperties error:', err);
    res.status(500).send(err.message);
  }
};

// ── GET /admin/properties/add ─────────────────────────────────
const showAddForm = async (req, res) => {
  try {
    const [districts] = await pool.query(
      'SELECT id, name FROM districts ORDER BY name'
    );
    const [agents] = await pool.query(
      "SELECT id, name FROM agents WHERE status = 'active' ORDER BY name"
    );
    res.render('admin/add-property', {
      property:  null,
      districts,
      agents,
      error:     null,
      title:     'Add Property',
      page:      'properties'
    });
  } catch (err) {
    console.error('showAddForm error:', err);
    res.status(500).send(err.message);
  }
};

// ── POST /admin/properties/add ────────────────────────────────
const createProperty = async (req, res) => {
  try {
    const {
      title, description, type, listing_type,
      price, price_type, district_id, city, address,
      bedrooms, bathrooms, land_area, floor_area,
      agent_name, agent_phone, assigned_agent_id,
      status, is_featured, allow_inquiries
    } = req.body;

    // Basic validation
    if (!title || !type || !listing_type || !price || !district_id || !city) {
      const [districts] = await pool.query('SELECT id, name FROM districts ORDER BY name');
      const [agents]    = await pool.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name");
      return res.render('admin/add-property', {
        property:  null,
        districts,
        agents,
        error:    'Title, Type, Listing Type, Price, District and City are required.',
        title:    'Add Property',
        page:     'properties'
      });
    }

    const [result] = await pool.query(`
      INSERT INTO properties
        (title, description, type, listing_type, price, price_type,
         district_id, city, address, bedrooms, bathrooms,
         land_area, floor_area, agent_name, agent_phone,
         assigned_agent_id, status, is_featured, allow_inquiries)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `, [
      title,
      description       || null,
      type,
      listing_type,
      Number(price),
      price_type        || 'total',
      Number(district_id),
      city,
      address           || null,
      bedrooms          || null,
      bathrooms         || null,
      land_area         || null,
      floor_area        || null,
      agent_name        || null,
      agent_phone       || null,
      assigned_agent_id || null,
      status            || 'active',
      is_featured       ? 1 : 0,
      allow_inquiries   ? 1 : 0
    ]);

    // Save uploaded images
    if (req.files && req.files.length) {
      const imageValues = req.files.map(f => [
        result.insertId,
        `/uploads/${f.filename}`
      ]);
      await pool.query(
        'INSERT INTO property_images (property_id, image_url) VALUES ?',
        [imageValues]
      );
    }

    res.redirect('/admin/properties');
  } catch (err) {
    console.error('createProperty error:', err);
    const [districts] = await pool.query('SELECT id, name FROM districts ORDER BY name');
    const [agents]    = await pool.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name");
    res.render('admin/add-property', {
      property:  null,
      districts,
      agents,
      error:    `Database error: ${err.message}`,
      title:    'Add Property',
      page:     'properties'
    });
  }
};

// ── GET /admin/properties/:id/edit ────────────────────────────
const showEditForm = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM properties WHERE id = ?', [req.params.id]
    );
    if (!rows.length) return res.redirect('/admin/properties');

    const [districts] = await pool.query('SELECT id, name FROM districts ORDER BY name');
    const [agents]    = await pool.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name");

    res.render('admin/add-property', {
      property:  rows[0],
      districts,
      agents,
      error:     null,
      title:     'Edit Property',
      page:      'properties'
    });
  } catch (err) {
    console.error('showEditForm error:', err);
    res.status(500).send(err.message);
  }
};

// ── POST /admin/properties/:id/edit ──────────────────────────
const updateProperty = async (req, res) => {
  try {
    const {
      title, description, type, listing_type,
      price, price_type, district_id, city, address,
      bedrooms, bathrooms, land_area, floor_area,
      agent_name, agent_phone, assigned_agent_id,
      status, is_featured, allow_inquiries
    } = req.body;

    await pool.query(`
      UPDATE properties SET
        title=?, description=?, type=?, listing_type=?,
        price=?, price_type=?, district_id=?, city=?,
        address=?, bedrooms=?, bathrooms=?, land_area=?,
        floor_area=?, agent_name=?, agent_phone=?,
        assigned_agent_id=?, status=?, is_featured=?, allow_inquiries=?
      WHERE id=?
    `, [
      title,
      description       || null,
      type,
      listing_type,
      Number(price),
      price_type        || 'total',
      Number(district_id),
      city,
      address           || null,
      bedrooms          || null,
      bathrooms         || null,
      land_area         || null,
      floor_area        || null,
      agent_name        || null,
      agent_phone       || null,
      assigned_agent_id || null,
      status            || 'active',
      is_featured       ? 1 : 0,
      allow_inquiries   ? 1 : 0,
      req.params.id
    ]);

    // Add new images if uploaded
    if (req.files && req.files.length) {
      const imageValues = req.files.map(f => [
        req.params.id,
        `/uploads/${f.filename}`
      ]);
      await pool.query(
        'INSERT INTO property_images (property_id, image_url) VALUES ?',
        [imageValues]
      );
    }

    res.redirect('/admin/properties');
  } catch (err) {
    console.error('updateProperty error:', err);
    res.status(500).send(err.message);
  }
};

// ── POST /admin/properties/:id/delete ────────────────────────
const deleteProperty = async (req, res) => {
  try {
    await pool.query('DELETE FROM property_images WHERE property_id = ?', [req.params.id]);
    await pool.query('DELETE FROM properties WHERE id = ?', [req.params.id]);
    res.redirect('/admin/properties');
  } catch (err) {
    console.error('deleteProperty error:', err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  listProperties,
  showAddForm,
  createProperty,
  showEditForm,
  updateProperty,
  deleteProperty
};