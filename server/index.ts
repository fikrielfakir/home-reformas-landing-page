import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const urlPath = req.path;
  let resBody: any = undefined;
  const oldJson = res.json;
  res.json = function (body) {
    resBody = body;
    return oldJson.apply(res, arguments as any);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (urlPath.startsWith("/api")) {
      let logLine = `${req.method} ${urlPath} ${res.statusCode} in ${duration}ms`;
      if (resBody) logLine += ` :: ${JSON.stringify(resBody)}`;
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });
  next();
});

(async () => {
  try {
    const server = registerRoutes(app);
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      throw err;
    });

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const PORT = 5000;
    server.listen(PORT, "0.0.0.0", () => {
      log(`serving on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
})();
