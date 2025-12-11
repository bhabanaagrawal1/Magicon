// server.js
import http from "http";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

//Helper: Calculate Read Time
function calculateReadTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200); // approx 200 wpm
}

//Ports & CORS
const PORT = process.env.PORT || 10000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://magicneverfadesdisney.netlify.app",
];

//Server
const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;

  // CORS
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
    //Root Route
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Backend is working! Use /blogs to fetch blogs.");
    }

    //GET All Blogs
    else if (req.method === "GET" && req.url === "/blogs") {
      const [blogs] = await db.query("SELECT * FROM blogs ORDER BY id DESC");

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(blogs));
    }

    //GET Single Blog
    else if (req.method === "GET" && req.url.startsWith("/blogs/")) {
      const id = req.url.split("/")[2];

      const [blog] = await db.query("SELECT * FROM blogs WHERE id = ?", [id]);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(blog));
    }

    //ADD Blog
    else if (req.method === "POST" && req.url === "/add-blog") {
      let body = "";
      req.on("data", chunk => (body += chunk));

      req.on("end", async () => {
        try {
          const { title, shortDesc, longDesc, image } = JSON.parse(body);

          // Required validation
          if (!title || !shortDesc || !longDesc) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({
                error: "Title, shortDesc, and longDesc are required",
              })
            );
            return;
          }

          // Auto Date
          const today = new Date().toISOString().split("T")[0];

          // Auto Read Time
          const readTime = calculateReadTime(longDesc);

          // Insert into DB
          const [result] = await db.query(
            "INSERT INTO blogs (title, date, readTime, shortDesc, longDesc, image) VALUES (?, ?, ?, ?, ?, ?)",
            [title, today, readTime, shortDesc, longDesc, image || null]
          );

          // Response
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Blog added successfully!",
              id: result.insertId,
              readTime,
              date: today,
            })
          );
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid JSON format" }));
        }
      });
    }

    //DELETE Blog
    else if (req.method === "DELETE" && req.url.startsWith("/blogs/")) {
      const id = req.url.split("/")[2];

      await db.query("DELETE FROM blogs WHERE id = ?", [id]);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Blog deleted successfully" }));
    }

    //404 ROUTE
    else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Not found" }));
    }
  } catch (err) {
    console.error("Server error:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal server error" }));
  }
});

//Start Server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
