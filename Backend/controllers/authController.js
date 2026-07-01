const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const pool   = require('../config/db');

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

// ── POST /api/auth/register ──────────────────────────────────
const register = async (req, res) => {
  try {
    const { name, email, password, phone, user_type } = req.body;
    const normalizedEmail = email?.trim().toLowerCase();
    if (!name || !email || !password)
      return res.status(400).json({ message: 'Name, email and password are required' });

    if (!normalizedEmail) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const [exists] = await pool.query('SELECT id FROM users WHERE email = ?', [normalizedEmail]);
    if (exists.length) return res.status(400).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 12);
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password, phone, role, user_type) VALUES (?, ?, ?, ?, ?, ?)',
      [name, normalizedEmail, hashed, phone || null, 'user', user_type || null]
    );

    res.status(201).json({
      id: result.insertId, name, email: normalizedEmail,
      role: 'user',
      token: generateToken(result.insertId),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── POST /api/auth/login ─────────────────────────────────────
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginIdentifier = email?.trim().toLowerCase();
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    if (!loginIdentifier) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const [rows] = await pool.query(
      'SELECT * FROM users WHERE LOWER(email) = ? OR LOWER(name) = ? LIMIT 1',
      [loginIdentifier, loginIdentifier]
    );
    if (!rows.length) return res.status(401).json({ message: 'Invalid credentials' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({
      id: user.id, name: user.name, email: user.email,
      role: user.role, phone: user.phone,
      token: generateToken(user.id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── POST /api/auth/admin/login ───────────────────────────────
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.query('SELECT * FROM admins WHERE email = ?', [email]);
    if (!rows.length) return res.status(401).json({ message: 'Invalid admin credentials' });

    const admin = rows[0];
    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ message: 'Invalid admin credentials' });

    res.json({
      id: admin.id, name: admin.name, email: admin.email,
      role: 'admin',
      token: generateToken(admin.id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── GET /api/auth/me ─────────────────────────────────────────
const getMe = async (req, res) => {
  res.json(req.user);
};

module.exports = { register, login, adminLogin, getMe };