import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ServiceArea from "../components/ServiceArea";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
