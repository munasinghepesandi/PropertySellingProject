import express from 'express';
import Property from '../models/Property.js';
import User from '../models/User.js';
import UType from '../models/UType.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/admin/dashboard');
});

router.get('/dashboard', async (req, res, next) => {
  try {
    const [propertyCount, userCount, typeCount] = await Promise.all([
      Property.count(),
      User.count(),
      UType.count(),
    ]);

    res.render('admin/dashboard', {
      title: 'Dashboard',
      stats: {
        propertyCount,
        userCount,
        typeCount,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;