import { Award, Clock, Users, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Más de 15 años de experiencia",
    description: "En construcción y reformas integrales, respaldados por cientos de proyectos exitosos.",
  },
  {
    icon: ShieldCheck,
    title: "Materiales de alta calidad",
    description: "Utilizamos solo materiales premium para garantizar acabados profesionales y duraderos.",
  },
  {
    icon: Clock,
    title: "Cumplimiento de plazos",
    description: "Respetamos los tiempos acordados y presupuestos establecidos sin sorpresas.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Acompañamiento durante todo el proceso con garantía de satisfacción total.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-body font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-6">
            NUESTRA DIFERENCIA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
            ¿Por qué elegir Home Reformas?
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto">
            Confía en profesionales que ponen tu satisfacción en primer lugar.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3 tracking-wide">
                {reason.title}
              </h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
