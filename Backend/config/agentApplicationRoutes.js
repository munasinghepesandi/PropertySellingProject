const express = require('express');
const router = express.Router();
const pool = require('./db');

// POST /api/agents - නව Agent අයදුම්පතක් database එකට ඇතුළත් කිරීම
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    // අයදුම්පතක් නිසා ආරම්භයේදී status එක 'pending' ලෙස තැබීම වඩාත් සුදුසුයි
    const query = 'INSERT INTO agents (name, email, phone, message, status) VALUES (?, ?, ?, ?, ?)';
    const [result] = await pool.query(query, [name, email, phone, message, 'pending']);
    res.status(201).json({ message: 'Agent application saved successfully', id: result.insertId });
  } catch (err) {
    console.error('Agent Application Database Error:', err);
    res.status(500).json({ message: 'Failed to add agent to database.' });
  }
});

module.exports = router;