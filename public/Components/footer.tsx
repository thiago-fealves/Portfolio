// Modules
import { motion } from "framer-motion";

// Styles
import styles from "../styles/footer.module.css";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "500", subsets: ["latin"] });

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Component
const Footer = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={styles.container}
    >
      <div className={styles.copyright}>
        <p className={dmsans.className}>
          {new Date().getFullYear()} &copy;{" "}
          {portugues ? "Todos os Direitos Reservados" : "All Rights Reserved."}
        </p>
      </div>
    </motion.header>
  );
};

export default Footer;
