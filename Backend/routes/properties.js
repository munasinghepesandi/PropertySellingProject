import express from 'express';
import Property from '../models/Property.js';

const router = express.Router();

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json({ success: true, data: properties });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get properties by type
router.get('/type/:type', async (req, res) => {
  try {
    const properties = await Property.findAll({
      where: { type: req.params.type }
    });
    res.json({ success: true, data: properties });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }
    res.json({ success: true, data: property });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create new property
router.post('/', async (req, res) => {
  console.log('Received POST /api/properties with body:', req.body);
  try {
    const property = await Property.create(req.body);
    console.log('Property created with id:', property.id);
    res.status(201).json({ success: true, data: property });
  } catch (error) {
    console.error('Error creating property:', error.message);
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update property
router.put('/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }
    await property.update(req.body);
    res.json({ success: true, data: property });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete property
router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }
    await property.destroy();
    res.json({ success: true, message: 'Property deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
