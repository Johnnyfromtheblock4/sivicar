import { motion } from "framer-motion";
import { FaArrowRight, FaWandMagicSparkles } from "react-icons/fa6";
import DecorativeLines from "./DecorativeLines";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>
      <DecorativeLines />

      <div className="container hero-content-wrap">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="hero-badge">
            <FaWandMagicSparkles /> Tecnologia - Ecologia - Qualità -
            Innovazione
          </span>

          <h1>
            Il tuo <span>CarWash</span>, smart.
          </h1>

          <p>
            Cura dell’auto guidata dalla tecnologia, rispetto per l’ambiente e
            attenzione ai dettagli. CarWash by Sivicar unisce innovazione,
            qualità e sostenibilità per offrirti un’esperienza di lavaggio
            moderna, efficace e professionale.
          </p>

          <div className="hero-actions">
            <a href="#servizi" className="btn btn-brand">
              Scopri i servizi <FaArrowRight />
            </a>

            <a href="#contatti" className="btn btn-outline-brand">
              Contattaci
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
