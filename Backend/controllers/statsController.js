const pool = require('../config/db');

// ── GET /api/stats/dashboard  (admin) ────────────────────────
const getDashboardStats = async (req, res) => {
  try {
    const [[{ total_properties }]] = await pool.query('SELECT COUNT(*) AS total_properties FROM properties');
    const [[{ active_listings }]] = await pool.query("SELECT COUNT(*) AS active_listings FROM properties WHERE status='active'");
    const [[{ total_users }]]     = await pool.query('SELECT COUNT(*) AS total_users FROM users');
    const [[{ new_inquiries }]]   = await pool.query("SELECT COUNT(*) AS new_inquiries FROM inquiries WHERE status='new'");
    const [[{ pending_approval }]]= await pool.query("SELECT COUNT(*) AS pending_approval FROM properties WHERE status='pending'");

    // Recent properties
    const [recent_properties] = await pool.query(
      `SELECT p.id, p.title, p.type, p.price, p.status, p.created_at, d.name AS district
       FROM properties p LEFT JOIN districts d ON p.district_id = d.id
       ORDER BY p.created_at DESC LIMIT 5`
    );

    // Recent inquiries
    const [recent_inquiries] = await pool.query(
      `SELECT i.id, i.name, i.email, i.message, i.status, i.created_at, p.title AS property_title
       FROM inquiries i LEFT JOIN properties p ON i.property_id = p.id
       ORDER BY i.created_at DESC LIMIT 5`
    );

    // Properties by type
    const [by_type] = await pool.query(
      'SELECT type, COUNT(*) AS count FROM properties GROUP BY type'
    );

    // Properties by district
    const [by_district] = await pool.query(
      `SELECT d.name AS district, COUNT(*) AS count
       FROM properties p LEFT JOIN districts d ON p.district_id = d.id
       GROUP BY d.name ORDER BY count DESC LIMIT 5`
    );

    res.json({
      total_properties,
      active_listings,
      total_users,
      new_inquiries,
      pending_approval,
      recent_properties,
      recent_inquiries,
      by_type,
      by_district,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getDashboardStats };