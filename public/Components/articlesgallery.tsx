// Modules
import styles from "../styles/articlesgallery.module.css";
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import ArticlesCard from "./articlescard";

// Data
const articles = [
  {
    title: "HTTP and HTTPS",
    portugueseTitle: "HTTP e HTTPS",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    portugueseDescription:
      "Artigo feito pelo grupo de estudos FireUAI da UFMG para educar sobre os protocolos HTTP e HTTPS como parte da proposta de trazer material de qualidade da área de cibersegurança gratuitamente, com o qual tive o prazer de contribuir.",

    image: "/assets/articlecardimage.png",
    path: "https://github.com/EoSingle/FireUAI/blob/main/Artigos/HTTP%20e%20HTTPS.md",
  },
];

// Main Component
const ArticlesGallery = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
        <ArticlesCard
          path={article.path}
          left={index % 2 === 0}
          title={portugues ? article.portugueseTitle : article.title}
          description={
            portugues ? article.portugueseDescription : article.description
          }
          image={article.image}
        />
      ))}
    </div>
  );
};

export default ArticlesGallery;
