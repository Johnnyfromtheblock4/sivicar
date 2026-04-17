import { motion } from "framer-motion";
import { FaSoap, FaSprayCanSparkles, FaWind, FaCarSide } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import "../styles/services-section.css";

const services = [
  {
    icon: <FaSoap />,
    title: "Lavaggio self",
    text: "Postazioni self-service tecnologiche per una pulizia completa e precisa, con il massimo controllo su ogni dettaglio.",
  },
  {
    icon: <FaWind />,
    title: "Interni e rifiniture",
    text: "Cura degli interni con aspirazione e rifiniture accurate per un abitacolo sempre pulito, ordinato e confortevole.",
  },
  {
    icon: <FaSprayCanSparkles />,
    title: "Trattamenti premium",
    text: "Servizi extra dedicati al comfort e alla finitura: profumatori, pulizia tappetini e soluzioni pratiche per vetri sempre perfetti.",
  },
  {
    icon: <FaCarSide />,
    title: "Portali automatici",
    text: "Lavaggio automatico rapido ed efficiente, progettato per offrire risultati impeccabili in pochi minuti.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="section-block services-section">
      <div className="container">
        <SectionTitle
          eyebrow="Servizi"
          title="Ogni dettaglio conta"
          text="Abbiamo immaginato un autolavaggio dal gusto moderno, pulito ed efficace, dove tecnologia e attenzione si incontrano."
        />

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={service.title}>
              <motion.article
                className="service-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
