const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs');

// Load .env.local if it exists, otherwise fall back to .env
const envLocal = path.join(__dirname, '..', '.env.local');
const envDefault = path.join(__dirname, '..', '.env');
const envPath = fs.existsSync(envLocal) ? envLocal : envDefault;
require('dotenv').config({ path: envPath });

const pool = mysql.createPool({
  host:               process.env.DB_HOST     || 'localhost',
  user:               process.env.DB_USER     || 'root',
  password:           process.env.DB_PASSWORD || '',
  database:           process.env.DB_NAME     || 'lanka_property',
  port:               Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit:    10,
  queueLimit:         0,
  timezone:           '+00:00',
});

async function ensureDistrictsTable() {
  const dbName = process.env.DB_NAME || 'lanka_property';
  const bootstrap = await mysql.createConnection({
    host:     process.env.DB_HOST || 'localhost',
    user:     process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port:     Number(process.env.DB_PORT) || 3306,
  });

  try {
    await bootstrap.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    await bootstrap.query(`
      CREATE TABLE IF NOT EXISTS \`${dbName}\`.\`districts\` (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL UNIQUE,
        province VARCHAR(150) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    await bootstrap.query(`
      CREATE TABLE IF NOT EXISTS \`${dbName}\`.\`properties\` (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT DEFAULT NULL,
        type VARCHAR(80) NOT NULL,
        listing_type VARCHAR(30) NOT NULL DEFAULT 'sale',
        price DECIMAL(15,2) NOT NULL DEFAULT 0,
        price_type VARCHAR(30) NOT NULL DEFAULT 'total',
        district_id INT DEFAULT NULL,
        city VARCHAR(120) DEFAULT NULL,
        address VARCHAR(255) DEFAULT NULL,
        bedrooms INT DEFAULT NULL,
        bathrooms INT DEFAULT NULL,
        land_area VARCHAR(80) DEFAULT NULL,
        floor_area VARCHAR(80) DEFAULT NULL,
        agent_name VARCHAR(150) DEFAULT NULL,
        agent_phone VARCHAR(50) DEFAULT NULL,
        assigned_agent_id INT DEFAULT NULL,
        is_featured TINYINT(1) NOT NULL DEFAULT 0,
        allow_inquiries TINYINT(1) NOT NULL DEFAULT 1,
        user_id INT DEFAULT NULL,
        status VARCHAR(30) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_properties_district_id (district_id),
        INDEX idx_properties_user_id (user_id),
        INDEX idx_properties_status (status)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    await bootstrap.query(`
      CREATE TABLE IF NOT EXISTS \`${dbName}\`.\`property_images\` (
        id INT AUTO_INCREMENT PRIMARY KEY,
        property_id INT NOT NULL,
        url VARCHAR(255) DEFAULT NULL,
        image_url VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_property_images_property_id (property_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
  } finally {
    await bootstrap.end();
  }
}

// Test connection on startup
(async () => {
  try {
    await ensureDistrictsTable();
    const conn = await pool.getConnection();
    console.log('✅  MySQL connected successfully');
    conn.release();
  } catch (err) {
    console.error('❌  MySQL connection failed:', err.message);
    process.exit(1);
  }
})();

module.exports = pool;
