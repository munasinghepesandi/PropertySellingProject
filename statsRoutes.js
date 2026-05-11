const express = require('express');
const router  = express.Router();
const { getDashboardStats } = require('./statsController');
const { protect, adminOnly } = require('./authMiddleware');

router.get('/dashboard', protect, adminOnly, getDashboardStats);

module.exports = router;