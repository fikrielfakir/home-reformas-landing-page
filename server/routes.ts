import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    console.log("\n=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Request Body:", JSON.stringify(req.body, null, 2));
    
    try {
      const { name, email, message } = req.body;
      
      // Validate email
      if (!email || !email.trim()) {
        console.log("❌ Validation failed: No email provided");
        return res.status(400).json({ message: "Email es requerido" });
      }
      
      // Get credentials
      const consumerKey = process.env.SMTP_USER;
      const consumerSecret = process.env.SMTP_PASS;

      if (!consumerKey || !consumerSecret) {
        console.error("❌ CRITICAL: Missing SMTP credentials!");
        console.error("SMTP_USER:", consumerKey ? "SET" : "MISSING");
        console.error("SMTP_PASS:", consumerSecret ? "SET" : "MISSING");
        return res.status(500).json({ message: "Error de configuración en el servidor" });
      }

      console.log("✓ Credentials loaded");
      console.log("✓ Preparing TurboSMTP request...");

      // Prepare payload
      const emailPayload = {
        from: "Homereformas24@gmail.com",
        to: "Homereformas24@gmail.com",
        subject: `Nuevo mensaje de contacto de ${name || 'Anónimo'}`,
        content: `Nombre: ${name || 'No proporcionado'}\nEmail: ${email}\n\nMensaje:\n${message || 'Sin mensaje'}`,
        html_content: `<h3>Nuevo mensaje de contacto</h3><p><strong>Nombre:</strong> ${name || 'No proporcionado'}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${message || 'Sin mensaje'}</p>`
      };

      console.log("Payload:", JSON.stringify(emailPayload, null, 2));
      console.log("\n🚀 Sending to TurboSMTP API...");

      // Call TurboSMTP
      const response = await fetch("https://pro.api.serversmtp.com/api/v2/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "consumerKey": consumerKey,
          "consumerSecret": consumerSecret
        },
        body: JSON.stringify(emailPayload)
      });

      // Log response status
      console.log("\n📬 TurboSMTP Response:");
      console.log("Status Code:", response.status);
      console.log("Status Text:", response.statusText);

      // Parse response
      let responseData;
      try {
        responseData = await response.json();
        console.log("Response Body:", JSON.stringify(responseData, null, 2));
      } catch (parseError) {
        console.error("❌ Failed to parse response as JSON");
        const textResponse = await response.text();
        console.error("Raw response:", textResponse);
        throw new Error("Invalid JSON response from TurboSMTP");
      }

      // Check if successful
      if (!response.ok) {
        console.error("\n❌ TurboSMTP API Error!");
        console.error("Status:", response.status);
        console.error("Error Details:", responseData);
        
        return res.status(500).json({ 
          message: "Error al enviar el email",
          details: responseData 
        });
      }

      console.log("\n✅ SUCCESS! Email sent via TurboSMTP");
      console.log(`From: ${name || 'Anónimo'} (${email})`);
      console.log("===================================\n");
      
      res.json({ 
        message: "Mensaje enviado correctamente",
        success: true 
      });
      
    } catch (error: any) {
      console.error("\n❌ EXCEPTION in /api/contact:");
      console.error("Error Message:", error.message);
      console.error("Error Stack:", error.stack);
      console.error("===================================\n");
      
      res.status(500).json({ 
        message: "Error al enviar el email",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}