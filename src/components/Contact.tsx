import { useState } from "react";
import { Mail, Phone, Send, Check, MessageCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim()) {
      toast({
        title: "Error",
        description: "Por favor, introduce tu email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Usando Formspree como alternativa sin servidor SMTP
      const response = await fetch("https://formspree.io/f/Homereformas24@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Nuevo mensaje de contacto - Home Reformas"
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      setFormData({ name: "", email: "", message: "", newsletter: false });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de reformas.");

  return (
    <section id="contacto" className="py-24 bg-charcoal-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-body font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-6">
            HABLEMOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-muted-foreground font-body font-light text-lg">
            Escríbenos sin compromiso
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-8">
            <a 
              href="mailto:Homereformas24@gmail.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>Homereformas24@gmail.com</span>
            </a>
            <a 
              href="tel:+34642385299"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>+34 642 385 299</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <div className="flex items-center gap-3 text-muted-foreground font-body">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Castillo de gebara 8 2P DR 01007, Vitoria-Gasteiz, Álava</span>
            </div>
            
            <div className="w-full h-[400px] rounded-sm overflow-hidden border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.340057077366!2d-2.678486!3d42.8458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc26665c56c2d%3A0x7d00201086a9f5d!2sC.%20Castillo%20de%20Guevara%2C%208%2C%2001007%20Vitoria-Gasteiz%2C%20%C3%81lava%2C%20Spain!5e0!3m2!1sen!2ses!4v1715100000000!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mb-12">
            <a 
              href={`https://wa.me/34642385299?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(142_70%_45%)] text-foreground font-body font-semibold text-sm tracking-wider rounded-sm hover:bg-[hsl(142_70%_40%)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              CONTACTAR POR WHATSAPP
            </a>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full px-4 py-4 bg-card border border-border rounded-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full px-4 py-4 bg-card border border-border rounded-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={5}
                className="w-full px-4 py-4 bg-card border border-border rounded-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
              />
            </div>
            
            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, newsletter: !prev.newsletter }))}
                className={`w-5 h-5 mt-0.5 flex-shrink-0 border rounded-sm flex items-center justify-center transition-all duration-300 ${
                  formData.newsletter 
                    ? "bg-primary border-primary" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                {formData.newsletter && <Check className="w-3 h-3 text-primary-foreground" />}
              </button>
              <label className="text-sm text-muted-foreground font-body font-light cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, newsletter: !prev.newsletter }))}>
                Suscríbete a nuestra lista de correo para recibir actualizaciones, promociones y más.
              </label>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-body font-semibold text-sm tracking-wider rounded-sm hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "ENVIANDO..."
              ) : (
                <>
                  ENVIAR
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Free Quote CTA */}
            <div className="text-center pt-4">
              <a 
                href="#contacto" 
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider rounded-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                SOLICITAR PRESUPUESTO GRATUITO
              </a>
            </div>
          </form>
          
          {/* Privacy Notice */}
          <p className="text-xs text-muted-foreground/60 font-body text-center mt-8 leading-relaxed">
            Este sitio está protegido por reCAPTCHA y se aplican la{" "}
            <a href="#" className="underline hover:text-muted-foreground transition-colors">Política de Privacidad</a> y los{" "}
            <a href="#" className="underline hover:text-muted-foreground transition-colors">Términos de Servicio</a> de Google.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
