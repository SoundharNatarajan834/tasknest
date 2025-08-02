
// db.js
const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    instanceName: process.env.DB_INSTANCE, 
  },
};

const pool = new sql.ConnectionPool(config);

// Correct: pool.connect() returns a promise
const poolConnect = pool.connect().catch(err => {
  console.error('DB Connection failed:', err);
});

module.exports = {
  sql,
  pool,
  poolConnect,
};
