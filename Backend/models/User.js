import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import UType from './UType.js';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    u_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UType,
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    tableName: 'user',
    timestamps: false
  }
);

// Associations
UType.hasMany(User, { foreignKey: 'u_type_id' });
User.belongsTo(UType, { foreignKey: 'u_type_id' });

export default User;
