const express = require('express');
const router = express.Router();
const db = require('./db');

// GET /admin/agents
router.get('/', async (req, res) => {
  try {
    // Agents = users with role 'agent'
    const [agents] = await db.query(
      `SELECT id, name, email, phone, status, created_at,
        (SELECT COUNT(*) FROM properties WHERE agent_id = users.id) AS listings
       FROM users
       WHERE role = 'agent'
       ORDER BY created_at DESC`
    );
    res.render('admin/agents', { agents });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST /admin/agents/:id/status  (toggle active/suspended)
router.post('/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await db.query('UPDATE users SET status = ? WHERE id = ?', [status, id]);
    res.redirect('/admin/agents');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;