CREATE DATABASE blogdb;
USE blogdb;

CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  date VARCHAR(50),
  readTime VARCHAR(50),
  shortDesc TEXT,
  longDesc TEXT,
  image VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
