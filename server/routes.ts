import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import path from "path";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const consumerKey = process.env.SMTP_USER;
      const consumerSecret = process.env.SMTP_PASS;

      if (!consumerKey || !consumerSecret) {
        console.error("Missing SMTP_USER or SMTP_PASS secrets");
        return res.status(500).json({ message: "Error de configuración en el servidor" });
      }

      const response = await fetch("https://pro.api.serversmtp.com/api/v2/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "consumerKey": consumerKey,
          "consumerSecret": consumerSecret
        },
        body: JSON.stringify({
          from: "Homereformas24@gmail.com",
          to: "Homereformas24@gmail.com",
          subject: `Nuevo mensaje de contacto de ${name}`,
          content: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
          html_content: `<h3>Nuevo mensaje de contacto</h3><p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${message}</p>`
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("TurboSMTP error:", errorData);
        throw new Error("Failed to send email via TurboSMTP");
      }

      console.log(`Email sent from: ${name} (${email}) via TurboSMTP`);
      res.json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error al enviar el email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
