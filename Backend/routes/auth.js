import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import UType from '../models/UType.js';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, u_type_id, u_type } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' });
    }

    // Determine u_type_id: user can send u_type_id or u_type (string)
    let typeId = u_type_id;

    if (!typeId) {
      if (!u_type) {
        return res.status(400).json({ success: false, message: 'u_type_id or u_type required' });
      }
      // find or create u_type
      const [foundType] = await UType.findOrCreate({ where: { type: u_type } });
      typeId = foundType.id;
    }

    // Check existing email
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashed, u_type_id: typeId });

    const userJson = user.toJSON();
    delete userJson.password;

    res.status(201).json({ success: true, data: userJson });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Optional: list user types
router.get('/types', async (req, res) => {
  try {
    const types = await UType.findAll();
    res.json({ success: true, data: types });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
