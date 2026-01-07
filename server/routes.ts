import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import path from "path";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      const gmailUser = process.env.GMAIL_USER || process.env.VITE_GMAIL_USER;
      const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.VITE_GMAIL_APP_PASSWORD;

      if (!gmailUser || !gmailPass) {
        console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD secrets");
        return res.status(500).json({ message: "Error de configuración en el servidor" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const mailOptions = {
        from: gmailUser,
        to: "Homereformas24@gmail.com",
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        replyTo: email,
        attachments: [
          {
            filename: 'logo.png',
            path: path.join(__dirname, '..', 'attached_assets', 'ChatGPT_Image_Jan_7,_2026,_10_36_49_AM_1767778757733.png'),
            cid: 'logo' // optional cid to use in html body
          }
        ]
      };

      await transporter.sendMail(mailOptions);
      
      console.log(`Email sent from: ${name} (${email})`);
      res.json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error al enviar el email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
