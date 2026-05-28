const express = require('express');
const router  = express.Router();
const db      = require('../config/db');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');

// ── Multer setup for property images ─────────────────────────
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename:    (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    cb(null, allowed.test(path.extname(file.originalname).toLowerCase()));
  },
});

// ════════════════════════════════════════
// DASHBOARD   GET /admin
// ════════════════════════════════════════
router.get('/', async (req, res) => {
  const blank = {
    title:'Dashboard Overview', page:'dashboard',
    stats:{ totalProperties:0, activeListings:0, totalUsers:0, inquiries:0 },
    recentProperties:[], recentInquiries:[], byDistrict:[], byType:[],
  };
  try {
    const [[{ totalProperties }]] = await db.query('SELECT COUNT(*) AS totalProperties FROM properties');
    const [[{ activeListings  }]] = await db.query("SELECT COUNT(*) AS activeListings  FROM properties WHERE status='active'");
    const [[{ totalUsers      }]] = await db.query('SELECT COUNT(*) AS totalUsers      FROM users');
    const [[{ inquiries       }]] = await db.query('SELECT COUNT(*) AS inquiries       FROM inquiries');

    const [recentProps] = await db.query(`
      SELECT p.id, p.title, p.type, p.listing_type, p.price, d.name AS district
      FROM   properties p
      LEFT JOIN districts d ON d.id = p.district_id
      ORDER  BY p.created_at DESC LIMIT 4
    `);

    const [recentInqs] = await db.query(`
      SELECT i.id, i.name, i.message, i.created_at, p.title AS property_title
      FROM   inquiries i
      LEFT JOIN properties p ON p.id = i.property_id
      ORDER  BY i.created_at DESC LIMIT 4
    `);

    const [distRows] = await db.query(`
      SELECT d.name, COUNT(p.id) AS count
      FROM   districts d
      LEFT JOIN properties p ON p.district_id = d.id
      GROUP  BY d.id, d.name
      ORDER  BY count DESC LIMIT 5
    `);
    const maxD = distRows[0]?.count || 1;
    const byDistrict = distRows.map(r => ({ name:r.name, count:r.count, pct:Math.round(r.count/maxD*100) }));

    const [typeRows] = await db.query(`
      SELECT type AS name, COUNT(*) AS count
      FROM   properties
      WHERE  type IS NOT NULL
      GROUP  BY type ORDER BY count DESC LIMIT 5
    `);
    const maxT = typeRows[0]?.count || 1;
    const byType = typeRows.map(r => ({ name:r.name, count:r.count, pct:Math.round(r.count/maxT*100) }));

    const iconMap   = { House:'🏠', Apartment:'🏢', Villa:'🏡', Bungalow:'🏘️', Commercial:'🏪', Studio:'🏬', Land:'🌿', Annexe:'🏠', Room:'🚪', Warehouse:'🏭' };
    const typeLabel = { sale:'Sale', rent:'Rent', land:'Land' };

    const recentProperties = recentProps.map(p => ({
      icon:        iconMap[p.type] || '🏠',
      title:       p.title,
      location:    p.district || '—',
      listingType: typeLabel[p.listing_type] || p.listing_type || '—',
      price:       p.price ? 'LKR ' + Number(p.price).toLocaleString() : '—',
    }));

    const recentInquiries = recentInqs.map(inq => {
      const parts    = (inq.name || 'UN').split(' ');
      const initials = parts.map(w => w[0]).join('').toUpperCase().slice(0,2);
      const mins     = Math.round((Date.now() - new Date(inq.created_at)) / 60000);
      const timeAgo  = mins < 60 ? `${mins}m ago` : mins < 1440 ? `${Math.round(mins/60)}h ago` : `${Math.round(mins/1440)}d ago`;
      return { initials, name:inq.name||'Unknown', message:(inq.message||'').slice(0,60), time:timeAgo };
    });

    res.render('admin/dashboard', {
      title:'Dashboard Overview', page:'dashboard',
      stats:{ totalProperties, activeListings, totalUsers, inquiries },
      recentProperties, recentInquiries, byDistrict, byType,
    });
  } catch (err) {
    console.error('Dashboard error:', err.message);
    res.render('admin/dashboard', blank);
  }
});

router.get('/dashboard', (req, res) => res.redirect('/admin'));

// ════════════════════════════════════════
// PROPERTIES
// ════════════════════════════════════════
router.get('/properties', async (req, res) => {
  try {
    const { q='', type='', listing_type='', district='', status='', page=1 } = req.query;
    const perPage = 15, offset = (Number(page)-1)*perPage;

    let where = '1=1', params = [];
    if (q)            { where += ' AND (p.title LIKE ? OR p.city LIKE ? OR p.address LIKE ?)'; params.push(`%${q}%`,`%${q}%`,`%${q}%`); }
    if (type)         { where += ' AND p.type = ?';         params.push(type); }
    if (listing_type) { where += ' AND p.listing_type = ?'; params.push(listing_type); }
    if (district)     { where += ' AND p.district_id = ?';  params.push(district); }
    if (status)       { where += ' AND p.status = ?';       params.push(status); }

    const [properties] = await db.query(
      `SELECT p.id, p.title, p.type, p.listing_type, p.price, p.status,
              p.city, p.address, p.bedrooms, p.bathrooms, p.created_at,
              d.name AS district
       FROM   properties p
       LEFT JOIN districts d ON d.id = p.district_id
       WHERE  ${where}
       ORDER  BY p.created_at DESC
       LIMIT  ? OFFSET ?`,
      [...params, perPage, offset]
    );
    const [[{ total }]] = await db.query(`SELECT COUNT(*) AS total FROM properties p WHERE ${where}`, params);
    const [districts]   = await db.query('SELECT id, name FROM districts ORDER BY name');

    const typeLabel = { sale:'Sale', rent:'Rent', land:'Land' };
    const fmtProps  = properties.map(p => ({
      id:          p.id,
      title:       p.title,
      type:        p.type,
      listingType: typeLabel[p.listing_type] || p.listing_type || '—',
      price:       p.price ? 'LKR ' + Number(p.price).toLocaleString() : '—',
      status:      p.status,
      city:        p.city,
      address:     p.address,
      district:    p.district,
      createdAt:   p.created_at ? new Date(p.created_at).toLocaleDateString() : '—',
    }));

    res.render('admin/properties', {
      title:'Properties', page:'properties',
      properties:fmtProps, districts,
      filters:{ q, type, listing_type, district, status },
      currentPage:Number(page), totalPages:Math.ceil(total/perPage), perPage,
    });
  } catch (err) {
    console.error('Properties error:', err.message);
    res.status(500).send('Properties error: ' + err.message);
  }
});

// GET add form
router.get('/properties/add', async (req, res) => {
  try {
    const [districts] = await db.query('SELECT id, name FROM districts ORDER BY name');
    const [agents]    = await db.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name").catch(()=>[[]]);
    res.render('admin/add-property', {
      title:'Add Property', page:'properties',
      property:null, districts, agents:agents||[], error:null,
    });
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

// POST add — WITH multer upload middleware (THIS WAS THE MISSING FIX)
router.post('/properties/add', upload.array('images', 20), async (req, res) => {
  try {
    const {
      title, type, listing_type, district_id, city, address,
      price, price_type, bedrooms, bathrooms, floor_area,
      land_area, status, description, is_featured,
      allow_inquiries, agent_name, agent_phone, assigned_agent_id
    } = req.body;

    // Validation
    if (!title || !type || !listing_type || !price || !district_id || !city) {
      const [districts] = await db.query('SELECT id, name FROM districts ORDER BY name');
      const [agents]    = await db.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name").catch(()=>[[]]);
      return res.render('admin/add-property', {
        title:'Add Property', page:'properties',
        property: req.body,
        districts, agents: agents||[],
        error: 'Title, Type, Listing Type, Price, District and City are required.',
      });
    }

    const [result] = await db.query(
      `INSERT INTO properties
         (title, type, listing_type, district_id, city, address, price, price_type,
          bedrooms, bathrooms, floor_area, land_area,
          status, description, is_featured, allow_inquiries,
          agent_name, agent_phone, assigned_agent_id, created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())`,
      [
        title,
        type,
        listing_type,
        district_id   || null,
        city,
        address       || null,
        Number(price) || 0,
        price_type    || 'total',
        bedrooms      || null,
        bathrooms     || null,
        floor_area    || null,
        land_area     || null,
        status        || 'active',
        description   || null,
        is_featured   ? 1 : 0,
        allow_inquiries ? 1 : 0,
        agent_name    || null,
        agent_phone   || null,
        assigned_agent_id || null,
      ]
    );

    // Save uploaded images
    if (req.files && req.files.length) {
      const imageValues = req.files.map(f => [result.insertId, `/uploads/${f.filename}`]);
      await db.query('INSERT INTO property_images (property_id, url) VALUES ?', [imageValues]);
    }

    res.redirect('/admin/properties');
  } catch (err) {
    console.error('Add property error:', err.message);
    const [districts] = await db.query('SELECT id, name FROM districts ORDER BY name').catch(()=>[[]]);
    const [agents]    = await db.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name").catch(()=>[[]]);
    res.render('admin/add-property', {
      title:'Add Property', page:'properties',
      property: req.body,
      districts: districts||[], agents: agents||[],
      error: 'Database error: ' + err.message,
    });
  }
});

// GET edit form
router.get('/properties/:id/edit', async (req, res) => {
  try {
    const [[property]] = await db.query('SELECT * FROM properties WHERE id=?', [req.params.id]);
    if (!property) return res.redirect('/admin/properties');
    const [districts] = await db.query('SELECT id, name FROM districts ORDER BY name');
    const [agents]    = await db.query("SELECT id, name FROM agents WHERE status='active' ORDER BY name").catch(()=>[[]]);
    res.render('admin/add-property', {
      title:'Edit Property', page:'properties',
      property, districts, agents:agents||[], error:null,
    });
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

// POST edit — WITH multer upload middleware
router.post('/properties/:id/edit', upload.array('images', 20), async (req, res) => {
  try {
    const {
      title, type, listing_type, district_id, city, address,
      price, price_type, bedrooms, bathrooms, floor_area,
      land_area, status, description, is_featured,
      allow_inquiries, agent_name, agent_phone, assigned_agent_id
    } = req.body;

    await db.query(
      `UPDATE properties SET
         title=?, type=?, listing_type=?, district_id=?, city=?, address=?,
         price=?, price_type=?, bedrooms=?, bathrooms=?, floor_area=?,
         land_area=?, status=?, description=?, is_featured=?,
         allow_inquiries=?, agent_name=?, agent_phone=?, assigned_agent_id=?
       WHERE id=?`,
      [
        title,
        type,
        listing_type,
        district_id   || null,
        city,
        address       || null,
        Number(price) || 0,
        price_type    || 'total',
        bedrooms      || null,
        bathrooms     || null,
        floor_area    || null,
        land_area     || null,
        status        || 'active',
        description   || null,
        is_featured   ? 1 : 0,
        allow_inquiries ? 1 : 0,
        agent_name    || null,
        agent_phone   || null,
        assigned_agent_id || null,
        req.params.id,
      ]
    );

    // Add new images if uploaded
    if (req.files && req.files.length) {
      const imageValues = req.files.map(f => [req.params.id, `/uploads/${f.filename}`]);
      await db.query('INSERT INTO property_images (property_id, url) VALUES ?', [imageValues]);
    }

    res.redirect('/admin/properties');
  } catch (err) {
    console.error('Edit property error:', err.message);
    res.status(500).send('Edit error: ' + err.message);
  }
});

// DELETE property
router.post('/properties/:id/delete', async (req, res) => {
  try {
    await db.query('DELETE FROM property_images WHERE property_id=?', [req.params.id]);
    await db.query('DELETE FROM properties WHERE id=?', [req.params.id]);
  } catch (err) {
    console.error(err.message);
  }
  res.redirect('/admin/properties');
});

// ════════════════════════════════════════
// INQUIRIES
// ════════════════════════════════════════
router.get('/inquiries', async (req, res) => {
  try {
    const { status='', page=1 } = req.query;
    const perPage = 15, offset = (Number(page)-1)*perPage;
    let where = '1=1', params = [];
    if (status) { where += ' AND i.status = ?'; params.push(status); }

    const [inquiries] = await db.query(
      `SELECT i.id, i.name, i.email, i.phone, i.message,
              i.status, i.created_at,
              p.title AS property_title
       FROM   inquiries i
       LEFT JOIN properties p ON p.id = i.property_id
       WHERE  ${where}
       ORDER  BY i.created_at DESC
       LIMIT  ? OFFSET ?`,
      [...params, perPage, offset]
    );
    const [[{ total }]] = await db.query(`SELECT COUNT(*) AS total FROM inquiries i WHERE ${where}`, params);

    const fmtInquiries = inquiries.map(inq => {
      const parts    = (inq.name||'UN').split(' ');
      const initials = parts.map(w=>w[0]).join('').toUpperCase().slice(0,2);
      return { ...inq, initials, propertyTitle:inq.property_title||'—',
               createdAt: inq.created_at ? new Date(inq.created_at).toLocaleString() : '—' };
    });

    res.render('admin/inquiries', {
      title:'Inquiries', page:'inquiries',
      inquiries:fmtInquiries, filters:{ status },
      currentPage:Number(page), totalPages:Math.ceil(total/perPage), perPage,
    });
  } catch (err) {
    console.error('Inquiries error:', err.message);
    res.status(500).send('Inquiries error: ' + err.message);
  }
});

router.post('/inquiries/:id/resolve', async (req, res) => {
  try { await db.query("UPDATE inquiries SET status='replied' WHERE id=?", [req.params.id]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/inquiries');
});

router.post('/inquiries/:id/delete', async (req, res) => {
  try { await db.query('DELETE FROM inquiries WHERE id=?', [req.params.id]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/inquiries');
});

// ════════════════════════════════════════
// USERS
// ════════════════════════════════════════
router.get('/users', async (req, res) => {
  try {
    const { q='', status='', page=1 } = req.query;
    const perPage = 15, offset = (Number(page)-1)*perPage;
    let where = '1=1', params = [];
    if (q)      { where += ' AND (u.name LIKE ? OR u.email LIKE ?)'; params.push(`%${q}%`,`%${q}%`); }
    if (status) { where += ' AND u.status = ?'; params.push(status); }

    const [users] = await db.query(
      `SELECT u.id, u.name, u.email, u.phone, u.status, u.created_at, u.user_type,
              COUNT(DISTINCT p.id) AS listingCount
       FROM   users u
       LEFT JOIN properties p ON p.user_id = u.id
       WHERE  ${where}
       GROUP  BY u.id
       ORDER  BY u.created_at DESC
       LIMIT  ? OFFSET ?`,
      [...params, perPage, offset]
    );
    const [[{ total }]] = await db.query(`SELECT COUNT(*) AS total FROM users u WHERE ${where}`, params);

    const fmtUsers = users.map(u => {
      const parts    = (u.name||'UN').split(' ');
      const initials = parts.map(w=>w[0]).join('').toUpperCase().slice(0,2);
      return { ...u, initials,
               createdAt: u.created_at ? new Date(u.created_at).toLocaleDateString() : '—' };
    });

    res.render('admin/users', {
      title:'Users', page:'users',
      users:fmtUsers, filters:{ q, status },
      currentPage:Number(page), totalPages:Math.ceil(total/perPage), perPage,
    });
  } catch (err) {
    console.error('Users error:', err.message);
    res.status(500).send('Users error: ' + err.message);
  }
});

router.post('/users/:id/toggle', async (req, res) => {
  try {
    const [[u]] = await db.query('SELECT status FROM users WHERE id=?', [req.params.id]);
    if (u) await db.query('UPDATE users SET status=? WHERE id=?',
      [u.status==='active'?'suspended':'active', req.params.id]);
  } catch (err) { console.error(err.message); }
  res.redirect('/admin/users');
});

// ════════════════════════════════════════
// AGENTS
// ════════════════════════════════════════
router.get('/agents', async (req, res) => {
  try {
    const { q='', status='', page=1 } = req.query;
    const perPage = 15, offset = (Number(page)-1)*perPage;
    let where = '1=1', params = [];
    if (q)      { where += ' AND (a.name LIKE ? OR a.email LIKE ?)'; params.push(`%${q}%`,`%${q}%`); }
    if (status) { where += ' AND a.status = ?'; params.push(status); }

    const [agents] = await db.query(
      `SELECT a.id, a.name, a.email, a.phone, a.status, a.created_at,
              COUNT(DISTINCT p.id) AS listingCount
       FROM   agents a
       LEFT JOIN properties p ON p.agent_name = a.name
       WHERE  ${where}
       GROUP  BY a.id
       ORDER  BY a.created_at DESC
       LIMIT  ? OFFSET ?`,
      [...params, perPage, offset]
    );

    const [[{ total }]]        = await db.query(`SELECT COUNT(*) AS total FROM agents a WHERE ${where}`, params);
    const [[{ totalAgents }]]  = await db.query('SELECT COUNT(*) AS totalAgents FROM agents');
    const [[{ activeAgents }]] = await db.query("SELECT COUNT(*) AS activeAgents FROM agents WHERE status='active'");
    const [[{ suspended }]]    = await db.query("SELECT COUNT(*) AS suspended FROM agents WHERE status='suspended'");

    const fmtAgents = agents.map(a => {
      const parts    = (a.name||'UN').split(' ');
      const initials = parts.map(w=>w[0]).join('').toUpperCase().slice(0,2);
      return { ...a, initials,
               createdAt: a.created_at ? new Date(a.created_at).toLocaleDateString() : '—' };
    });

    res.render('admin/agents', {
      title:'Agents', page:'agents',
      agents:fmtAgents, filters:{ q, status },
      stats:{ totalAgents, activeAgents, suspended },
      currentPage:Number(page), totalPages:Math.ceil(total/perPage), perPage,
    });
  } catch (err) {
    console.error('Agents error:', err.message);
    res.status(500).send('Agents error: ' + err.message);
  }
});

router.post('/agents/:id/toggle', async (req, res) => {
  try {
    const [[a]] = await db.query('SELECT status FROM agents WHERE id=?', [req.params.id]);
    if (a) await db.query('UPDATE agents SET status=? WHERE id=?',
      [a.status==='active'?'suspended':'active', req.params.id]);
  } catch (err) { console.error(err.message); }
  res.redirect('/admin/agents');
});

router.post('/agents/:id/delete', async (req, res) => {
  try { await db.query('DELETE FROM agents WHERE id=?', [req.params.id]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/agents');
});

// ════════════════════════════════════════
// DISTRICTS
// ════════════════════════════════════════
router.get('/districts', async (req, res) => {
  try {
    const [districts] = await db.query(`
      SELECT d.id, d.name, d.province, COUNT(p.id) AS listingCount
      FROM   districts d
      LEFT JOIN properties p ON p.district_id = d.id
      GROUP  BY d.id ORDER BY d.name
    `);
    res.render('admin/districts', { title:'Districts', page:'districts', districts });
  } catch (err) {
    res.status(500).send('Districts error: ' + err.message);
  }
});

router.post('/districts', async (req, res) => {
  try { await db.query('INSERT INTO districts (name,province) VALUES (?,?)', [req.body.name, req.body.province]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/districts');
});

router.post('/districts/:id', async (req, res) => {
  if (req.body._method === 'PUT') {
    try { await db.query('UPDATE districts SET name=?,province=? WHERE id=?', [req.body.name, req.body.province, req.params.id]); }
    catch (err) { console.error(err.message); }
  }
  res.redirect('/admin/districts');
});

router.post('/districts/:id/delete', async (req, res) => {
  try { await db.query('DELETE FROM districts WHERE id=?', [req.params.id]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/districts');
});

// ════════════════════════════════════════
// FEATURED
// ════════════════════════════════════════
router.get('/featured', async (req, res) => {
  try {
    const [featuredListings] = await db.query(`
      SELECT f.id, f.property_id, f.package, f.start_date, f.end_date,
             COALESCE(f.impressions,0) AS impressions, f.status,
             p.title AS propertyTitle, p.listing_type,
             d.name  AS district,
             u.name  AS ownerName
      FROM   featured_ads f
      LEFT JOIN properties p ON p.id = f.property_id
      LEFT JOIN districts  d ON d.id = p.district_id
      LEFT JOIN users      u ON u.id = p.user_id
      ORDER  BY f.id DESC
    `);

    const [[{ active }]]       = await db.query("SELECT COUNT(*) AS active FROM featured_ads WHERE status='active'");
    const [[{ expiringSoon }]] = await db.query("SELECT COUNT(*) AS expiringSoon FROM featured_ads WHERE status='active' AND end_date <= DATE_ADD(NOW(),INTERVAL 7 DAY)");
    const [[{ impressions }]]  = await db.query("SELECT COALESCE(SUM(impressions),0) AS impressions FROM featured_ads WHERE MONTH(created_at)=MONTH(NOW())");

    const typeLabel = { sale:'Sale', rent:'Rent', land:'Land' };
    const fmtFeatured = featuredListings.map(f => ({
      ...f,
      listingType: typeLabel[f.listing_type] || f.listing_type || '—',
      startDate:   f.start_date ? new Date(f.start_date).toLocaleDateString() : '—',
      expiryDate:  f.end_date   ? new Date(f.end_date).toLocaleDateString()   : '—',
      daysLeft:    f.end_date   ? Math.ceil((new Date(f.end_date)-Date.now())/86400000) : 0,
    }));

    const [properties] = await db.query(`
      SELECT p.id, p.title, d.name AS district
      FROM   properties p
      LEFT JOIN districts d ON d.id = p.district_id
      WHERE  p.status='active' ORDER BY p.title
    `);

    res.render('admin/featured', {
      title:'Featured Ads', page:'featured',
      featuredListings:fmtFeatured,
      featuredStats:{ active, expiringSoon, impressions },
      properties,
    });
  } catch (err) {
    console.error('Featured error:', err.message);
    res.status(500).send('Featured error: ' + err.message);
  }
});

router.post('/featured', async (req, res) => {
  try {
    const { propertyId, package:pkg } = req.body;
    const days = pkg==='premium'?30:pkg==='standard'?14:7;
    await db.query(
      `INSERT INTO featured_ads (property_id,package,start_date,end_date,status,impressions,created_at)
       VALUES (?,?,NOW(),DATE_ADD(NOW(),INTERVAL ? DAY),'active',0,NOW())`,
      [propertyId, pkg, days]
    );
  } catch (err) { console.error(err.message); }
  res.redirect('/admin/featured');
});

router.post('/featured/:id/remove', async (req, res) => {
  try { await db.query("UPDATE featured_ads SET status='inactive' WHERE id=?", [req.params.id]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/featured');
});

router.post('/featured/:id/extend', async (req, res) => {
  try { await db.query("UPDATE featured_ads SET end_date=DATE_ADD(end_date,INTERVAL 7 DAY) WHERE id=?", [req.params.id]); }
  catch (err) { console.error(err.message); }
  res.redirect('/admin/featured');
});

// ════════════════════════════════════════
// REPORTS
// ════════════════════════════════════════
router.get('/reports', async (req, res) => {
  try {
    const [[{ newListings }]] = await db.query("SELECT COUNT(*) AS newListings FROM properties WHERE MONTH(created_at)=MONTH(NOW())");
    const [[{ newUsers    }]] = await db.query("SELECT COUNT(*) AS newUsers    FROM users      WHERE MONTH(created_at)=MONTH(NOW())");
    const [[{ totalInq    }]] = await db.query("SELECT COUNT(*) AS totalInq    FROM inquiries  WHERE MONTH(created_at)=MONTH(NOW())");
    const [[{ repliedInq  }]] = await db.query("SELECT COUNT(*) AS repliedInq  FROM inquiries  WHERE MONTH(created_at)=MONTH(NOW()) AND status='replied'");
    const conversionRate      = totalInq ? Math.round(repliedInq/totalInq*100) : 0;

    const [distRows] = await db.query(`
      SELECT d.name, COUNT(p.id) AS cnt FROM districts d
      LEFT JOIN properties p ON p.district_id=d.id
      GROUP BY d.id ORDER BY cnt DESC LIMIT 5
    `);
    const maxD = distRows[0]?.cnt || 1;
    const byDistrict = distRows.map(r => ({ name:r.name, count:r.cnt, pct:Math.round(r.cnt/maxD*100) }));

    const [typeRows] = await db.query(`
      SELECT type AS name, COUNT(*) AS cnt FROM properties
      WHERE type IS NOT NULL GROUP BY type ORDER BY cnt DESC LIMIT 5
    `);
    const maxT = typeRows[0]?.cnt || 1;
    const byType = typeRows.map(r => ({ name:r.name, count:r.cnt, pct:Math.round(r.cnt/maxT*100) }));

    const [monthRows] = await db.query(`
      SELECT DATE_FORMAT(MIN(created_at),'%b %Y') AS month,
             COUNT(*) AS total,
             SUM(status='replied') AS resolved,
             SUM(status IN ('new','read')) AS pending
      FROM   inquiries
      WHERE  created_at >= DATE_SUB(NOW(),INTERVAL 6 MONTH)
      GROUP  BY YEAR(created_at), MONTH(created_at)
      ORDER  BY YEAR(created_at) DESC, MONTH(created_at) DESC
    `);
    const monthlyInquiries = monthRows.map(r => ({
      ...r, responseRate: r.total ? Math.round(r.resolved/r.total*100) : 0,
    }));

    res.render('admin/reports', {
      title:'Reports', page:'reports',
      report:{ totalRevenue:0, revenueGrowth:0, newListings, newUsers, conversionRate, byDistrict, byType, monthlyInquiries },
    });
  } catch (err) {
    console.error('Reports error:', err.message);
    res.status(500).send('Reports error: ' + err.message);
  }
});

router.get('/reports/export', async (req, res) => {
  const type = req.query.type || 'properties';
  try {
    let rows, filename;
    if (type==='inquiries') {
      [rows]   = await db.query('SELECT id,name,email,phone,message,status,created_at FROM inquiries');
      filename = 'inquiries.csv';
    } else if (type==='users') {
      [rows]   = await db.query('SELECT id,name,email,phone,status,created_at FROM users');
      filename = 'users.csv';
    } else {
      [rows]   = await db.query('SELECT id,title,type,listing_type,price,status,city,created_at FROM properties');
      filename = 'properties.csv';
    }
    if (!rows.length) return res.send('No data');
    const headers = Object.keys(rows[0]).join(',');
    const csv     = rows.map(r => Object.values(r).map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
    res.setHeader('Content-Type','text/csv');
    res.setHeader('Content-Disposition',`attachment; filename="${filename}"`);
    res.send(headers+'\n'+csv);
  } catch (err) { res.status(500).send('Export failed: '+err.message); }
});

// ════════════════════════════════════════
// SETTINGS
// ════════════════════════════════════════
router.get('/settings', async (req, res) => {
  let settings = {};
  try {
    const [rows] = await db.query('SELECT `key`,`value` FROM settings');
    rows.forEach(r => { settings[r.key]=r.value; });
  } catch(e) {}

  let admin = { name:'Admin', email:'' };
  try {
    const [[row]] = await db.query('SELECT id,name,email FROM admins LIMIT 1');
    if (row) admin = row;
  } catch(e) {
    try {
      const [[row]] = await db.query('SELECT id,name,email FROM users LIMIT 1');
      if (row) admin = row;
    } catch(e2) {}
  }

  res.render('admin/settings', {
    title:'Settings', page:'settings',
    settings, admin, success: req.query.saved==='1',
  });
});

// ════════════════════════════════════════
// LOGOUT
// ════════════════════════════════════════
router.get('/logout', (req, res) => res.redirect('/'));

module.exports = router;