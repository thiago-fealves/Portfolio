// Modules
import Link from "next/link";
import { motion } from "framer-motion";

// Styles
import styles from "../styles/articlescard.module.css";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Title from "./title";
import Paragraph from "./paragraph";

// Main Component
const ArticlesCard = ({ title, description, image, left, path }) => {
  const { portugues } = useContext(LanguageContext);
  if (left) {
    return (
      <div className={styles.card}>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src={image}
          alt=""
        />
        <div className={styles.texts}>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
          <Link className={dmsans.className} href={path}>
            {portugues ? "< Veja Esse Artigo >" : "< Check this Article >"}
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.texts}>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
          <Link className={dmsans.className} href={path}>
            {portugues ? "< Veja Esse Artigo >" : "< Check this Article >"}
          </Link>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src={image}
          alt=""
        />
      </div>
    );
  }
};

export default ArticlesCard;
