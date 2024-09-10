// Modules
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

// Styles
import styles from "../styles/projectsbanner.module.css";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Paragraph from "./paragraph";
import Title from "./title";

// Main Component
const ProjectsBanner = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <Title>{portugues ? "Meus Projetos" : "My Projects"}</Title>
      <Paragraph>
        {portugues ? "Desenvolvo softwares individuais desde meu ensino médio de modo a aliar o conhecimento que adquiri na área de programação com a prática necessária para o meu dia a dia profissional, nesta página você encontrará uma coleção dos meus melhores projetos open-source com seus respectivos códigos-fonte." : "I have been developing individual software projects since high school, combining the programming knowledge I’ve acquired with the practical experience needed for my professional day-to-day work. On this page, you’ll find a collection of my best open-source projects along with their source codes."}
      </Paragraph>
      <MotionLink
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={dmsans.className}
        href="https://github.com/thiago-fealves"
      >
        {portugues ? "< Veja meu GitHub >" : "< Check my GitHub >"}
      </MotionLink>
    </div>
  );
};
export default ProjectsBanner;
