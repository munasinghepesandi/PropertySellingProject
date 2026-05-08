const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// ── Protect: any logged-in user ──────────────────────────────
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const [rows] = await pool.query(
        'SELECT id, name, email, role, phone, created_at FROM users WHERE id = ?',
        [decoded.id]
      );
      if (!rows.length) return res.status(401).json({ message: 'User not found' });

      req.user = rows[0];
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Not authorised, token invalid' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorised, no token' });
  }
};

// ── Admin only ───────────────────────────────────────────────
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden — admins only' });
  }
};

module.exports = { protect, adminOnly };