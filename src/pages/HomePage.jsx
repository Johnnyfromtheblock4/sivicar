import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import CardSection from "../components/CardSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <ServicesSection />
      <CardSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
