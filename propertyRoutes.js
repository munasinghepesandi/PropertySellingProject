const express = require('express');
const router  = express.Router();
const {
  getProperties, getPropertyById, createProperty,
  updateProperty, deleteProperty, updateStatus
} = require('./propertyController');
const { protect, adminOnly } = require('./authMiddleware');
const upload = require('./uploadMiddleware');

router.get('/',                            getProperties);
router.get('/:id',                         getPropertyById);
router.post('/',    protect, upload.array('images', 10), createProperty);
router.put('/:id',  protect, updateProperty);
router.delete('/:id', protect, deleteProperty);
router.patch('/:id/status', protect, adminOnly, updateStatus);

module.exports = router;