import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import UType from '../models/UType.js';

const router = express.Router();

const createAuthToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  return Buffer.from(JSON.stringify(payload)).toString('base64url');
};

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

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      token: createAuthToken(userJson),
      data: userJson,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ where: { email }, include: UType });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const userJson = user.toJSON();
    delete userJson.password;

    res.json({
      success: true,
      message: 'Login successful',
      token: createAuthToken(userJson),
      data: userJson,
    });
  } catch (error) {
    console.error('Login error:', error);
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
