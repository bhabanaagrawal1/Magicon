import http from "http";
import db from "./db.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // ✅ Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // ✅ Root route (Render health check)
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("🎉 Backend is working perfectly! Try /blogs to fetch blogs.");
    return;
  }

  // ✅ GET all blogs
  if (req.method === "GET" && req.url === "/blogs") {
    db.query("SELECT * FROM blogs", (err, results) => {
      if (err) {
        console.error("Error fetching blogs:", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to fetch blogs" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }

  // ✅ GET single blog by ID
  else if (req.method === "GET" && req.url.startsWith("/blogs/")) {
    const id = req.url.split("/")[2];
    if (!id) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Blog ID required" }));
      return;
    }

    db.query("SELECT * FROM blogs WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.error("Error fetching blog:", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to fetch blog" }));
      } else if (results.length === 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Blog not found" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results[0]));
      }
    });
  }

  // ✅ POST new blog
  else if (req.method === "POST" && req.url === "/blogs") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const { title, date, readTime, shortDesc, longDesc, image } = JSON.parse(body);

        if (!title || !date || !readTime || !shortDesc || !longDesc || !image) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "All fields are required" }));
          return;
        }

        const sql =
          "INSERT INTO blogs (title, date, readTime, shortDesc, longDesc, image) VALUES (?, ?, ?, ?, ?, ?)";

        db.query(sql, [title, date, readTime, shortDesc, longDesc, image], (err, result) => {
          if (err) {
            console.error("Error inserting blog:", err);
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Failed to insert blog" }));
          } else {
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Blog added", id: result.insertId }));
          }
        });
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }

  // ✅ DELETE blog by ID
  else if (req.method === "DELETE" && req.url.startsWith("/blogs/")) {
    const id = req.url.split("/")[2];
    db.query("DELETE FROM blogs WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error deleting blog:", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to delete blog" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Blog deleted" }));
      }
    });
  }

  // ✅ Default 404 route
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
