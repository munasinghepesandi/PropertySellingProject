const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs');

const envLocal = path.join(__dirname, '.env.local');
const envDefault = path.join(__dirname, '.env');
const envPath = fs.existsSync(envLocal) ? envLocal : envDefault;
require('dotenv').config({ path: envPath });

(async () => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || undefined,
      port: Number(process.env.DB_PORT) || 3306,
    });
    console.log('✅  DB connection successful');
    await conn.end();
    process.exit(0);
  } catch (err) {
    console.error('❌  DB connection failed:', err.message);
    process.exit(1);
  }
})();
