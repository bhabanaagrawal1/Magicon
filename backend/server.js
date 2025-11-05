// server.js
import http from "http";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 10000;

const allowedOrigins = [
  "http://localhost:5173", // React dev server
  "https://magicneverfades.netlify.app", // Your Netlify frontend
];

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;

  // Handle CORS
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  try {
    // Root route
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("🎉 Backend is working! Try /blogs to fetch blogs.");
    }

    // Get all blogs
    else if (req.method === "GET" && req.url === "/blogs") {
      const [results] = await db.query("SELECT * FROM blogs ORDER BY id DESC");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(results));
    }

    // Get single blog by ID
    else if (req.method === "GET" && req.url.startsWith("/blogs/")) {
      const id = req.url.split("/")[2];
      const [results] = await db.query("SELECT * FROM blogs WHERE id = ?", [id]);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(results));
    }

    // Add a new blog
    else if (req.method === "POST" && req.url === "/add-blog") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));

      req.on("end", async () => {
        try {
          const { title, date, readTime, shortDesc, longDesc, image } = JSON.parse(body);

          if (!title || !shortDesc || !longDesc) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Title, shortDesc, and longDesc are required" }));
            return;
          }

          const [result] = await db.query(
            "INSERT INTO blogs (title, date, readTime, shortDesc, longDesc, image) VALUES (?, ?, ?, ?, ?, ?)",
            [title, date || null, readTime || null, shortDesc, longDesc, image || null]
          );

          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "✅ Blog added successfully!", id: result.insertId }));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid JSON format" }));
        }
      });
    }

    // Delete a blog
    else if (req.method === "DELETE" && req.url.startsWith("/blogs/")) {
      const id = req.url.split("/")[2];
      await db.query("DELETE FROM blogs WHERE id = ?", [id]);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "✅ Blog deleted successfully" }));
    }

    // 404 handler
    else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Not found" }));
    }
  } catch (err) {
    console.error("❌ Server error:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal server error" }));
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
