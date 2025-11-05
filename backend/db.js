import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT
});

db.connect((err) => {
  if (err) console.error("❌ Error connecting to MySQL:", err);
  else console.log("✅ Connected to Clever Cloud MySQL Database");
});

export default db;
