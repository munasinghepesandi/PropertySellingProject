const bcrypt = require('bcryptjs');
const pool   = require('./db');

// ── GET /api/users  (admin) ──────────────────────────────────
const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 20, search } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    let where = '1=1';
    let params = [];
    if (search) { where += ' AND (name LIKE ? OR email LIKE ?)'; params.push(`%${search}%`, `%${search}%`); }

    const [rows] = await pool.query(
      `SELECT id, name, email, phone, role, created_at,
              (SELECT COUNT(*) FROM properties WHERE user_id = users.id) AS property_count
       FROM users WHERE ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
      [...params, Number(limit), offset]
    );
    const [[{ total }]] = await pool.query(`SELECT COUNT(*) AS total FROM users WHERE ${where}`, params);

    res.json({ data: rows, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── GET /api/users/:id ───────────────────────────────────────
const getUserById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, role, created_at FROM users WHERE id = ?',
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ message: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── PUT /api/users/profile  (own profile) ───────────────────
const updateProfile = async (req, res) => {
  try {
    const { name, phone, password } = req.body;
    let query = 'UPDATE users SET name=?, phone=? WHERE id=?';
    let params = [name, phone, req.user.id];

    if (password && password.length >= 6) {
      const hashed = await bcrypt.hash(password, 12);
      query = 'UPDATE users SET name=?, phone=?, password=? WHERE id=?';
      params = [name, phone, hashed, req.user.id];
    }

    await pool.query(query, params);
    res.json({ message: 'Profile updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── DELETE /api/users/:id  (admin) ──────────────────────────
const deleteUser = async (req, res) => {
  try {
    await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers, getUserById, updateProfile, deleteUser };