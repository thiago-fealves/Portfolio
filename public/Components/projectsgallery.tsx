// Modules
import Link from "next/link";

// Styles
import styles from "../styles/projectsgallery.module.css";

// Components
import ProjectCard from "./projectcard";
import Title from "./title";
import { useContext } from "react";
import { LanguageContext } from "./language";

// Data
const projects = [
  {
    id: 1,
    title: "Arcane Insight",
    portugueseTitle: "Arcane Insight",
    description: "Arcane Insight is a Discord bot created using the Gemini API and trained to answer various questions related to D&D 5e spells.",
    portugueseDescription: "Arcane Insight é um bot do discord criado a partir da API do Gemini e treinado para responder perguntas variadas relacionadas às magias de D&D5e.",
    imageUrl: "/assets/arcaneinsight.png",
    path: "https://github.com/thiago-fealves/Arcane-Insight",
    ptsubtitle: "Assistente de Magias D&D5e",
    subtitle: "Spells Assistant D&D5e"
  },
  {
    id: 2,
    title: "Portfolio",
    portugueseTitle: "Portfólio",
    description: "Personal portfolio website created to showcase my work. It was built using Next.js and React to optimize loading times. The code is open source and can be found here.",
    portugueseDescription: "Website de portfolio pessoal criado para promover meu trabalho, ele foi feito utilizando Next.js e React para otimizar tempos de carregamento, o código é open source e pode ser encontrado aqui.",
    imageUrl: "/assets/bannerportfolio.png",
    path: "https://github.com/thiago-fealves/Portfolio",
    ptsubtitle: "Você está aqui!",
    subtitle: "You are here!"
  },
  {
    id: 3,
    title: "Finances app",
    portugueseTitle: "Aplicativo de Finanças",
    description: "Still in development...",
    portugueseDescription: "Em construção...",
    imageUrl: "/assets/project2image.png",
    path: "/",
    ptsubtitle: "Projeto em construção",
    subtitle: "Project in development..."
  },
];

// Main Component
const Gallery = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <>
      <Title customcls={styles.gallerytitle}>
        {portugues ? "Meus Projetos" : "My Main Projects"}
      </Title>
      <div className={styles.gallery}>
        {projects.map((project) => (
          <Link href={project.path}>
            <ProjectCard
            subtitle={portugues ? project.ptsubtitle : project.subtitle}
              key={project.id}
              title={portugues ? project.portugueseTitle : project.title}
              description={
                portugues ? project.portugueseDescription : project.description
              }
              imageUrl={project.imageUrl}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Gallery;
