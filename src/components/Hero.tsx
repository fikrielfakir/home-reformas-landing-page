import heroImage from "../assets/hero-construction.jpg";
import logoImage from "@assets/ChatGPT_Image_Jan_7,_2026,_10_36_49_AM_1767778757733.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/75" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo Integration */}
        <div className="opacity-0 animate-fade-in-up mb-8 flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl inline-block transform hover:scale-105 transition-transform duration-500">
            <img 
              src={logoImage} 
              alt="Home Reformas Logo" 
              className="h-28 md:h-36 w-auto object-contain"
            />
          </div>
        </div>
        
        {/* Top Label */}
        <div className="opacity-0 animate-fade-in-up animation-delay-100">
          <span className="inline-block px-4 py-2 text-sm font-body font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-8">
            HOME REFORMAS
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-tight mb-6">
          Construcción y reformas<br />
          <span className="text-gradient-gold">integrales</span>
        </h1>
        
        {/* Subtitle */}
        <p className="opacity-0 animate-fade-in-up animation-delay-400 text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto mb-10">
          Calidad, confianza y resultados profesionales para tu hogar
        </p>
        
        {/* CTA Button */}
        <div className="opacity-0 animate-fade-in-up animation-delay-600">
          <a 
            href="#contacto" 
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider rounded-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            SOLICITAR PRESUPUESTO
          </a>
        </div>
        
        {/* Contact Information */}
        <div className="opacity-0 animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <a 
            href="mailto:Homereformas24@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span className="font-body text-sm">Homereformas24@gmail.com</span>
          </a>
          <a 
            href="https://wa.me/34642385299" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="font-body text-sm">+34 642 385 299</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
