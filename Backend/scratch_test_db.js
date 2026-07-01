const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs');

async function test(host, port, user, password, database) {
  try {
    console.log(`Testing host=${host} port=${port} user=${user} password=${password} database=${database}...`);
    const conn = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database
    });
    console.log(`✅ SUCCESS for port=${port} password=${password}`);
    await conn.end();
    return true;
  } catch (err) {
    console.log(`❌ FAILED: ${err.message}`);
    return false;
  }
}

(async () => {
  // Test 3306 with 'thushi'
  await test('localhost', 3306, 'root', 'thushi', 'lankapropertysite');
  // Test 3306 with 'Pabasara2003'
  await test('localhost', 3306, 'root', 'Pabasara2003', 'lankapropertysite');
  // Test 3306 with empty password
  await test('localhost', 3306, 'root', '', 'lankapropertysite');
  // Test 3307 with 'Pabasara2003'
  await test('localhost', 3307, 'root', 'Pabasara2003', 'lankapropertysite');
  // Test 3307 with 'thushi'
  await test('localhost', 3307, 'root', 'thushi', 'lankapropertysite');
  // Test 3307 with empty password
  await test('localhost', 3307, 'root', '', 'lankapropertysite');
})();
