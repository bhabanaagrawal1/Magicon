// server.js
import http from "http";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "https://mymagicon.netlify.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // Root route
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("🎉 Backend is working! Try /blogs to fetch blogs.");
  }

  // Get all blogs
  else if (req.method === "GET" && req.url === "/blogs") {
    db.query("SELECT * FROM blogs ORDER BY id DESC", (err, results) => {
      if (err) {
        console.error("❌ Error fetching blogs:", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to fetch blogs" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }

  // Add a new blog
  else if (req.method === "POST" && req.url === "/add-blog") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));

    req.on("end", () => {
      try {
        const { title, date, readTime, shortDesc, longDesc, image } = JSON.parse(body);

        if (!title || !shortDesc || !longDesc) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Title, shortDesc, and longDesc are required" }));
          return;
        }

        db.query(
          "INSERT INTO blogs (title, date, readTime, shortDesc, longDesc, image) VALUES (?, ?, ?, ?, ?, ?)",
          [title, date || null, readTime || null, shortDesc, longDesc, image || null],
          (err, result) => {
            if (err) {
              console.error("❌ Error inserting blog:", err);
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "Failed to add blog" }));
            } else {
              res.writeHead(201, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ message: "✅ Blog added successfully!", id: result.insertId }));
            }
          }
        );
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });
  }

  // Delete a blog
  else if (req.method === "DELETE" && req.url.startsWith("/blogs/")) {
    const id = req.url.split("/")[2];
    db.query("DELETE FROM blogs WHERE id = ?", [id], (err, result) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to delete blog" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "✅ Blog deleted successfully" }));
      }
    });
  }

  // 404 handler
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
