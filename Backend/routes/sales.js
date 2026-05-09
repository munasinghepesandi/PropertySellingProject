import express from 'express';
import { Op } from 'sequelize';
import Property from '../models/Property.js';

const router = express.Router();

const categoryMap = {
  all: null,
  house: ['house', 'villa'],
  houses: ['house', 'villa'],
  apartment: ['apartment'],
  apartments: ['apartment'],
  land: ['land'],
  commercial: ['commercial'],
  luxury: ['villa']
};

function formatPrice(price) {
  if (price === null || price === undefined) {
    return 'Price on request';
  }

  return `Rs. ${new Intl.NumberFormat('en-LK').format(price)}`;
}

function formatArea(property) {
  if (property.area === null || property.area === undefined) {
    return 'N/A';
  }

  if (property.type === 'land') {
    return `${new Intl.NumberFormat('en-LK').format(property.area)} Perches`;
  }

  return `${new Intl.NumberFormat('en-LK').format(property.area)} sqft`;
}

function inferBadge(property, index = 0) {
  if (property.type === 'villa') return 'Premium';
  if (property.type === 'commercial') return 'Commercial';
  if (property.type === 'land') return 'Land';
  return index % 2 === 0 ? 'Featured' : 'Popular';
}

function normalizeCategory(value) {
  if (!value) {
    return null;
  }

  return value.toString().trim().toLowerCase();
}

function toSalesListing(property, index = 0) {
  return {
    id: property.id,
    title: property.title,
    location: property.location,
    price: formatPrice(property.price),
    rawPrice: property.price,
    beds: property.bedrooms ? `${property.bedrooms} Beds` : 'N/A',
    baths: property.bathrooms ? `${property.bathrooms} Baths` : 'N/A',
    area: formatArea(property),
    rawArea: property.area,
    image: property.image_url || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
    badge: inferBadge(property, index),
    type: property.type,
    description: property.description || '',
    createdAt: property.createdAt,
    updatedAt: property.updatedAt
  };
}

// Get sales listings for the frontend sales page
router.get('/listings', async (req, res) => {
  try {
    const {
      category,
      type,
      location,
      search,
      bedrooms,
      minPrice,
      maxPrice,
      limit = 50
    } = req.query;

    const selectedCategory = normalizeCategory(category || type);
    const categoryTypes = categoryMap[selectedCategory] || null;

    const where = {};

    if (categoryTypes && categoryTypes.length) {
      where.type = { [Op.in]: categoryTypes };
    }

    if (location) {
      where.location = { [Op.like]: `%${location}%` };
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { location: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }

    if (bedrooms) {
      const numericBedrooms = Number(bedrooms);
      if (!Number.isNaN(numericBedrooms)) {
        where.bedrooms = numericBedrooms;
      }
    }

    if (minPrice || maxPrice) {
      where.price = {};

      if (minPrice) {
        where.price[Op.gte] = Number(minPrice);
      }

      if (maxPrice) {
        where.price[Op.lte] = Number(maxPrice);
      }
    }

    const properties = await Property.findAll({
      where,
      order: [['createdAt', 'DESC']],
      limit: Number.isNaN(Number(limit)) ? 50 : Math.min(Number(limit), 100)
    });

    const listings = properties.map((property, index) => toSalesListing(property, index));

    res.json({
      success: true,
      data: listings,
      meta: {
        count: listings.length,
        category: selectedCategory || 'all'
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get a single sales listing
router.get('/listings/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);

    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    res.json({
      success: true,
      data: toSalesListing(property)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;