const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');
const path    = require('path');
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');

const envLocal = path.join(__dirname, '.env.local');
const envDefault = path.join(__dirname, '.env');
const envPath = fs.existsSync(envLocal) ? envLocal : envDefault;
require('dotenv').config({ path: envPath });

// ── Route imports ────────────────────────────────────────────
const authRoutes     = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes     = require('./routes/userRoutes');
const inquiryRoutes  = require('./routes/inquiryRoutes');
const statsRoutes    = require('./routes/statsRoutes');
const adminRoutes    = require('./routes/adminRoutes');   // ← ADD
const agentApplicationRoutes = require('./config/agentApplicationRoutes');

// ── Error middleware ─────────────────────────────────────────
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();



// ── View Engine (EJS) ────────────────────────────────────────
app.set('view engine', 'ejs');                                 // ← ADD
app.set('views', path.join(__dirname, 'views'));   
app.use(ejsLayouts);                  
app.set('layout', 'admin/layout');            

// ── Core Middleware ──────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: false,
}));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// for dev only; helps cookie visibility and session-like behavior in some setups
app.set('trust proxy', true);



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
app.use('/api/agents',     agentApplicationRoutes);

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