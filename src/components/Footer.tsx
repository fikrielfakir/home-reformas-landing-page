const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="font-heading text-xl mb-4 text-primary">Home Reformas</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs mx-auto md:mx-0">
              Transformamos tus espacios con calidad y profesionalidad. Construcción y reformas integrales en Vitoria-Gasteiz.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <h4 className="font-heading text-sm uppercase tracking-wider mb-2">Ubicación</h4>
            <p className="text-sm text-muted-foreground font-body">Castillo de gebara 8 2P DR</p>
            <p className="text-sm text-muted-foreground font-body">01007 Vitoria-Gasteiz, Álava</p>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Home Reformas – Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
