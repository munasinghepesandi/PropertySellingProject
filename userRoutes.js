const express = require('express');
const router  = express.Router();
const { getUsers, getUserById, updateProfile, deleteUser } = require('./userController');
const { protect, adminOnly } = require('./authMiddleware');

router.get('/',           protect, adminOnly, getUsers);
router.get('/:id',        protect, adminOnly, getUserById);
router.put('/profile',    protect, updateProfile);
router.delete('/:id',     protect, adminOnly, deleteUser);

module.exports = router;