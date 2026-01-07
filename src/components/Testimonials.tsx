import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Excelente trabajo en la reforma de nuestra cocina. Profesionales, puntuales y el resultado superó nuestras expectativas. Muy recomendables.",
    name: "María García",
    location: "Madrid",
    rating: 5,
  },
  {
    quote: "Contratamos a Home Reformas para la reforma integral de nuestro piso y quedamos encantados. Cumplieron con los plazos y el presupuesto. Volveremos a contar con ellos.",
    name: "Carlos Rodríguez",
    location: "Barcelona",
    rating: 5,
  },
  {
    quote: "La reforma del baño quedó espectacular. El equipo fue muy profesional y nos asesoraron en todo momento. Calidad-precio inmejorable.",
    name: "Laura Martínez",
    location: "Valencia",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-body font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-6">
            TESTIMONIOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
            Opiniones de nuestros clientes
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground/90 font-body font-light text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-body font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground font-body text-xs">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
