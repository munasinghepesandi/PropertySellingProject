const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');
const path    = require('path');

require('dotenv').config();

// ── Route imports ────────────────────────────────────────────
const authRoutes     = require('./authRoutes');
const propertyRoutes = require('./propertyRoutes');
const userRoutes     = require('./userRoutes');
const inquiryRoutes  = require('./inquiryRoutes');
const statsRoutes    = require('./statsRoutes');
const adminRoutes    = require('./adminRoutes');

// ── Error middleware ─────────────────────────────────────────
const { notFound, errorHandler } = require('./errorMiddleware');

const app = express();



// ── View Engine (EJS) ────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', __dirname);

// ── Core Middleware ──────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }));             // ← CHANGED (false = allow inline styles/scripts)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// ── Static files ─────────────────────────────────────────────
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/public',  express.static(path.join(__dirname, 'public')));  // ← ADD

// ── Admin Panel (EJS) ────────────────────────────────────────
app.use('/admin', adminRoutes);                                // ← ADD

// ── API Routes ───────────────────────────────────────────────
app.use('/api/auth',       authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/users',      userRoutes);
app.use('/api/inquiries',  inquiryRoutes);
app.use('/api/stats',      statsRoutes);

// ── Health Check ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ── Root redirect to admin ───────────────────────────────────
app.get('/', (req, res) => res.redirect('/admin'));            // ← ADD

// ── Error Handlers ───────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start Server ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀  Lanka Property API running → http://localhost:${PORT}`);
});