const express = require('express');
const router  = express.Router();
const {
  getProperties, getPropertyById, createProperty, createPropertyPublic,
  updateProperty, deleteProperty, updateStatus
} = require('../controllers/propertyController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/',                            getProperties);
router.get('/:id',                         getPropertyById);
// Authenticated creation
router.post('/',    protect, upload.array('images', 10), createProperty);
// Public creation (no auth) — used by Post Ad form to auto-add listings
router.post('/public', upload.array('images', 10), createPropertyPublic);
router.put('/:id',  protect, updateProperty);
router.delete('/:id', protect, deleteProperty);
router.patch('/:id/status', protect, adminOnly, updateStatus);

module.exports = router;