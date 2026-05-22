import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lead collection API
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    const timestamp = new Date().toISOString();
    
    // In a real app, you'd save this to a database
    console.log("New Lead Received:", { name, email, message, timestamp });
    
    // Save to a JSON file for easier parsing by the admin panel
    const leadsFile = path.join(__dirname, "leads.json");
    let leads = [];
    if (fs.existsSync(leadsFile)) {
      leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
    }
    leads.push({ name, email, message, timestamp });
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    res.json({ 
      success: true, 
      message: "Lead collected successfully. Akanni will get back to you soon!" 
    });
  });

  // Admin Login
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    // Password from constants.ts is "AkanniElite2026!"
    if (password === "AkanniElite2026!") {
      res.json({ success: true, token: "elite_session_token_2026" });
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  });

  // Get Leads (Protected)
  app.get("/api/admin/leads", (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader === "Bearer elite_session_token_2026") {
      const leadsFile = path.join(__dirname, "leads.json");
      let leads = [];
      if (fs.existsSync(leadsFile)) {
        leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
      }
      res.json({ success: true, leads });
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
