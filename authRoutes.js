const express = require('express');
const router  = express.Router();
const { register, login, adminLogin, getMe } = require('./authController');
const { protect } = require('./authMiddleware');

router.post('/register',     register);
router.post('/login',        login);
router.post('/admin/login',  adminLogin);
router.get('/me',            protect, getMe);

module.exports = router;