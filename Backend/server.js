import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import ejsLayouts from 'express-ejs-layouts';
import sequelize from './config/database.js';
import propertiesRouter from './routes/properties.js';
import salesRouter from './routes/sales.js';
import loansRouter from './routes/loans.js';
import authRouter from './routes/auth.js';
import adminRoutes from './routes/adminRoutes.js';
import User from './models/User.js';
import UType from './models/UType.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const START_PORT = Number(process.env.PORT) || 5002;
const MAX_PORT_RETRIES = 25;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'admin/layout');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() });
});

// Routes
app.use('/api/properties', propertiesRouter);
app.use('/api/sales', salesRouter);
app.use('/api/loans', loansRouter);
app.use('/api/auth', authRouter);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.redirect('/admin/dashboard');
});

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
  } catch (error) {
    console.error('✗ Database connection failed (continuing to start server for dev):', error.message);
    console.error('  - If you expected the DB to be available, verify your .env DB settings and that MySQL is running.');
  }

  const startServer = (port, attempt = 0) => {
    const server = app.listen(port, () => {
      console.log(`✓ Backend server running on http://localhost:${port}`);
      console.log(`✓ Health check: http://localhost:${port}/api/health`);
    });

    server.on('error', (error) => {
      if (error?.code === 'EADDRINUSE' && attempt < MAX_PORT_RETRIES) {
        console.warn(`⚠ Port ${port} is in use, retrying on ${port + 1}...`);
        startServer(port + 1, attempt + 1);
        return;
      }

      console.error('✗ Failed to start backend server:', error.message);
      process.exit(1);
    });
  };

  startServer(START_PORT);
};

initializeServer();
