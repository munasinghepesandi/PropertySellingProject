import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import propertiesRouter from './routes/properties.js';
import authRouter from './routes/auth.js';
import User from './models/User.js';
import UType from './models/UType.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() });
});

// Routes
app.use('/api/properties', propertiesRouter);
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: 'Route not found' });
});

// Database initialization and server start
const initializeServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✓ MySQL database connected successfully');

    await sequelize.query('ALTER TABLE `user` MODIFY `password` VARCHAR(255) NOT NULL');
    console.log('✓ Ensured `user.password` supports hashed passwords');

    app.listen(PORT, () => {
      console.log(`✓ Backend server running on http://localhost:${PORT}`);
      console.log(`✓ Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('✗ Database connection failed:', error.message);
    process.exit(1);
  }
};

initializeServer();
