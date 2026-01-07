import { Home, Building2, ChefHat, Hammer, Zap, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Reformas integrales de viviendas",
    description: "Transformamos tu hogar de principio a fin con proyectos completos y personalizados.",
  },
  {
    icon: Building2,
    title: "Obra nueva y construcción",
    description: "Construimos desde cero con los más altos estándares de calidad y diseño.",
  },
  {
    icon: ChefHat,
    title: "Reformas de cocinas y baños",
    description: "Espacios funcionales y modernos que elevan el valor de tu propiedad.",
  },
  {
    icon: Hammer,
    title: "Albañilería y estructuras",
    description: "Trabajos estructurales sólidos y duraderos con materiales de primera.",
  },
  {
    icon: Zap,
    title: "Electricidad y fontanería",
    description: "Instalaciones seguras y eficientes que cumplen con toda la normativa.",
  },
  {
    icon: Paintbrush,
    title: "Pintura y acabados",
    description: "Acabados impecables que dan vida y personalidad a cada espacio.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-body font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-6">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
            Lo que hacemos
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto">
            Ofrecemos soluciones completas para todas tus necesidades de construcción y reforma.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
