import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Property = sequelize.define(
  'Property',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('house', 'apartment', 'villa', 'land', 'commercial'),
      allowNull: false
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Area in square meters'
    },
    image_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'properties',
    timestamps: true
  }
);

export default Property;
