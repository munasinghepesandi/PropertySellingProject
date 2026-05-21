const pool = require('../config/db');

// ── POST /api/inquiries ──────────────────────────────────────
const createInquiry = async (req, res) => {
  try {
    const { property_id, name, email, phone, message } = req.body;
    if (!property_id || !name || !email || !message)
      return res.status(400).json({ message: 'property_id, name, email, message are required' });

    const [result] = await pool.query(
      'INSERT INTO inquiries (property_id, name, email, phone, message) VALUES (?,?,?,?,?)',
      [property_id, name, email, phone || null, message]
    );
    res.status(201).json({ id: result.insertId, message: 'Inquiry submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── GET /api/inquiries  (admin) ──────────────────────────────
const getInquiries = async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    let where = '1=1';
    let params = [];
    if (status) { where += ' AND i.status = ?'; params.push(status); }

    const [rows] = await pool.query(
      `SELECT i.*, p.title AS property_title
       FROM inquiries i
       LEFT JOIN properties p ON i.property_id = p.id
       WHERE ${where} ORDER BY i.created_at DESC LIMIT ? OFFSET ?`,
      [...params, Number(limit), offset]
    );
    const [[{ total }]] = await pool.query(`SELECT COUNT(*) AS total FROM inquiries i WHERE ${where}`, params);

    res.json({ data: rows, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── PATCH /api/inquiries/:id/status  (admin) ─────────────────
const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['new', 'read', 'replied', 'closed'];
    if (!allowed.includes(status))
      return res.status(400).json({ message: 'Invalid status' });

    await pool.query('UPDATE inquiries SET status=? WHERE id=?', [status, req.params.id]);
    res.json({ message: 'Inquiry status updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── DELETE /api/inquiries/:id  (admin) ───────────────────────
const deleteInquiry = async (req, res) => {
  try {
    await pool.query('DELETE FROM inquiries WHERE id = ?', [req.params.id]);
    res.json({ message: 'Inquiry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createInquiry, getInquiries, updateInquiryStatus, deleteInquiry };