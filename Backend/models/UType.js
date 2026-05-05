import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const UType = sequelize.define(
  'UType',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: 'u_type',
    timestamps: false
  }
);

export default UType;
