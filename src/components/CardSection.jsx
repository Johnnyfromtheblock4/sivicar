import { motion } from "framer-motion";
import { FaGift, FaStar, FaWallet } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import "../styles/card-section.css";

const CardSection = () => {
  return (
    <section id="card" className="section-block card-section">
      <div className="container">
        <SectionTitle
          eyebrow="Card"
          title="Lavaggio smart"
          text="Una card pensata per i clienti abituali, che rende ogni lavaggio più rapido e semplice."
        />

        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <motion.div
              className="loyalty-card-box"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="loyalty-card-visual">
                <span className="mini-chip"></span>
                <p className="small-label"> Sivicard</p>
                <h3>CarWash by Sivicar</h3>
                <span className="card-number">**** **** **** 2026</span>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-6">
            <motion.div
              className="card-benefits"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="benefit-item">
                <FaWallet />
                <div>
                  <h4>Ricaricabile e pratica</h4>
                  <p>
                    Gestisci i tuoi lavaggi in modo semplice e veloce, senza
                    pensieri.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <FaGift />
                <div>
                  <h4>Uso semplice</h4>
                  <p>
                    Una card intuitiva, pensata per rendere ogni utilizzo
                    immediato e comodo.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <FaStar />
                <div>
                  <h4>Esperienza fluida</h4>
                  <p>
                    Più rapidità e praticità per un lavaggio sempre efficiente.
                  </p>
                </div>
              </div>

              <a href="#contatti" className="btn btn-brand mt-3">
                Chiedi informazioni
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
