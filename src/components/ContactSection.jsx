import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import "../styles/contact-section.css";

const ContactSection = () => {
  return (
    <section id="contatti" className="section-block contact-section">
      <div className="container">
        <SectionTitle
          eyebrow="Contatti"
          title="Passa a trovarci"
          text="Siamo a Busnago presso il Centro Commerciale Globo!"
        />

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-item">
                <FaLocationDot />
                <div>
                  <h4>Indirizzo</h4>
                  <p>
                    Via Italia 221, Via del Commercio, 62-64, 20874 Busnago MB
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone />
                <div>
                  <h4>Telefono</h4>
                  <p>
                    <a href="tel:+393395713079">+39 339 5713079</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaClock />
                <div>
                  <h4>Orari</h4>
                  <p>Tutti i giorni · 24 ore su 24</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/AHS93taZD98xExaX7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-brand mt-3"
              >
                Apri su Google Maps
              </a>
            </motion.div>
          </div>

          <div className="col-12 col-lg-7">
            <motion.div
              className="map-box"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <iframe
                title="Mappa CarWash by Sivicar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.5100949432594!2d9.473622076613244!3d45.62048817299674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b306d8c3a313%3A0xd60e8f127032f108!2sAUTOLAVAGGIO%20Carwash%20by%20Sivicar!5e0!3m2!1sit!2sit!4v1776423034106!5m2!1sit!2sit"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
