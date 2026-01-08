import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Verify environment variables on startup
console.log("=== Environment Variables Check ===");
console.log("SMTP_USER:", process.env.SMTP_USER ? "✓ Set" : "✗ Missing");
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "✓ Set" : "✗ Missing");
console.log("===================================");

// Register API routes BEFORE static files
const server = registerRoutes(app);

// Error handling middleware
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error('=== Server Error ===');
  console.error('URL:', req.url);
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  console.error('===================');
  
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Setup Vite or static files
(async () => {
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = parseInt(process.env.PORT || "5000", 10);
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`✓ Backend server running on port ${PORT}`);
    console.log(`✓ API endpoint: http://localhost:${PORT}/api/contact`);
    console.log(`✓ TurboSMTP endpoint: https://pro.api.serversmtp.com/api/v2/mail/send`);
  });
})();