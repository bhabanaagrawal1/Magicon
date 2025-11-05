// db.js
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT || 3306,
  ssl: {
  rejectUnauthorized: process.env.MYSQL_SSL_REJECT_UNAUTHORIZED !== 'false',
  }
});


// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err);
    return;
  }
  console.log("✅ Connected to Clever Cloud MySQL Database");

  // Create table if not exists
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS blogs (
         id INT AUTO_INCREMENT PRIMARY KEY,
         title VARCHAR(255),
         date VARCHAR(100),
         readTime VARCHAR(50),
         shortDesc TEXT,
         longDesc LONGTEXT,
         image VARCHAR(500)
       );
  `;
  db.query(createTableQuery, (err) => {
    if (err) console.error("❌ Error creating blogs table:", err);
    else console.log("✅ blogs table is ready!");
  });
});

export default db;
