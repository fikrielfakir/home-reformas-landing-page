import projectKitchen from "../assets/project-kitchen.jpg";
import projectBathroom from "../assets/project-bathroom.jpg";
import projectLiving from "../assets/project-living.jpg";
import projectApartment from "../assets/project-apartment.jpg";
import projectBedroom from "../assets/project-bedroom.jpg";
import projectExterior from "../assets/project-exterior.jpg";

const projects = [
  {
    image: projectKitchen,
    title: "Reforma de cocina moderna",
    tag: "Antes / Después",
  },
  {
    image: projectBathroom,
    title: "Reforma de baño completo",
    tag: "Antes / Después",
  },
  {
    image: projectLiving,
    title: "Reforma integral de salón",
    tag: "Antes / Después",
  },
  {
    image: projectApartment,
    title: "Reforma integral de vivienda",
    tag: "Antes / Después",
  },
  {
    image: projectBedroom,
    title: "Reforma de dormitorio",
    tag: "Antes / Después",
  },
  {
    image: projectExterior,
    title: "Rehabilitación de fachada",
    tag: "Antes / Después",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-body font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-6">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto">
            Descubre algunas de las transformaciones que hemos realizado para nuestros clientes.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-body font-medium tracking-wider text-primary bg-primary/20 rounded-full">
                  {project.tag}
                </span>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-heading text-foreground tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
