// Modules
import { motion } from "framer-motion";

// Styles
import styles from "../styles/projectcard.module.css";

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Title from "./title";
import Paragraph from "./paragraph";

// Data
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  subtitle: string;
}

// Main Component
const ProjectCard = ({ title, description, imageUrl, subtitle }: CardProps) => {
  const { portugues } = useContext(LanguageContext);
  return (
    <div className={styles.card}>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src={imageUrl}
        alt={title}
      />
      <Title>{title}</Title>
      <Paragraph customcls={styles.subtitle}>
        {subtitle}
      </Paragraph>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ProjectCard;
