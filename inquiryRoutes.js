const express = require('express');
const router  = express.Router();
const { createInquiry, getInquiries, updateInquiryStatus, deleteInquiry } = require('./inquiryController');
const { protect, adminOnly } = require('./authMiddleware');

router.post('/',                       createInquiry);          // public
router.get('/',    protect, adminOnly, getInquiries);
router.patch('/:id/status', protect, adminOnly, updateInquiryStatus);
router.delete('/:id', protect, adminOnly, deleteInquiry);

module.exports = router;