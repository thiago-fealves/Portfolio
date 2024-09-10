// Modules
import Link from "next/link";

// Styles
import styles from "../styles/articlesbanner.module.css";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Title from "./title";
import Paragraph from "./paragraph";

// Main Component
const ArticlesBanner = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <Title>{portugues ? "Meus Artigos" : "My Articles"}</Title>
      <Paragraph>
        {portugues
          ? "Nesta página compartilho ideias, insights e conceitos da minha vida acadêmica, combinando meus estudos, experiências e reflexões relacionados à tecnologia. Meu objetivo é contribuir para a comunidade e trocar conhecimento, assim como compartilhar a minha visão acerca de novas tecnologias emergentes e suas aplicações."
          : "On this page, I share ideas, insights, and concepts from my academic life, combining my studies, experiences, and reflections related to technology. My goal is to contribute to the community and exchange knowledge, as well as share my perspective on emerging technologies and their applications."}
      </Paragraph>
      <Link
        className={dmsans.className}
        href="https://github.com/thiago-fealves"
      >
        {portugues ? "< Veja Meus Artigos >" : "< Check my Articles >"}
      </Link>
    </div>
  );
};

export default ArticlesBanner;
