import { motion } from "framer-motion";

import "../styles/section-title.css";

const SectionTitle = ({ eyebrow, title, text }) => {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
};

export default SectionTitle;
