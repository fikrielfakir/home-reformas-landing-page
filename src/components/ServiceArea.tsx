import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-8">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6">
            Zona de servicio
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground font-body font-light leading-relaxed mb-8">
            Ofrecemos servicios de construcción y reformas integrales en{" "}
            <span className="text-foreground font-medium">Madrid, Barcelona, Valencia</span>{" "}
            y alrededores. Nuestro equipo de profesionales se desplaza a tu ubicación para
            ofrecerte un presupuesto personalizado sin compromiso.
          </p>
          
          {/* Map Placeholder */}
          <div className="relative w-full h-64 md:h-80 bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6229614296853!2d-3.7037974!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zona de servicio Home Reformas"
            />
          </div>
          
          {/* CTA */}
          <div className="mt-10">
            <a 
              href="#contacto" 
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider rounded-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              SOLICITAR PRESUPUESTO EN TU ZONA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
