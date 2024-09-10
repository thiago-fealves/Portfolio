// Modules
import { motion } from "framer-motion";

// Styles
import styles from "../styles/email.module.css";

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Title from "./title";

// Main Component
const Email = () => {
  // Data
  const { portugues } = useContext(LanguageContext);
  const email = "thiagofelipealves13@gmail.com";
  const subject = "Portfolio Message";
  const body = "Your message goes here";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const handleClick = () => {
    window.location.href = gmailUrl;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={styles.emailcontainer}
    >
      <Title customcls={styles.text}>
        <span className={styles.callforaction}>
          {portugues ? "Ficou interessado?" : "I got your attention?"}
        </span>
        <br />
        {portugues ? "Vamos tomar um café!" : "So, let's build together!"}
      </Title>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.button}
        onClick={handleClick}
      >
        <span className={styles.buttontop}>
          {portugues ? "Enviar Email" : "Send Mail"}
        </span>
      </motion.button>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src="/assets/cursoremail.png"
        alt=""
      />
    </motion.div>
  );
};

export default Email;
