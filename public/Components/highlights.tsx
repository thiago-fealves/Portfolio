// Modules
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Styles
import styles from "../styles/highlights.module.css";

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Paragraph from "./paragraph";
import Title from "./title";

// Main component
const Highlights = () => {
  // Data
  const { portugues } = useContext(LanguageContext);
  const highlights = [
    {
      title: portugues ? "Automação" : "Automation",
      description: portugues
        ? "Construo software que executa tarefas diárias, melhorando sua produtividade"
        : "I build software that performs your daily tasks, enhancing your productivity.",
      path: "https://github.com/thiago-fealves/Arcane-Insight",
      image: "/assets/automationhigh.png",
      width: 227,
      height: 225,
    },
    {
      title: "Performance",
      description: portugues
        ? "Crio sistemas velozes, que reduzem o tempo de carregamento e conectam o cliente ao produto mais rápido"
        : "I create fast systems that reduce loading time and connect the customer to the product more quickly.",
      path: "https://github.com/thiago-fealves/Portfolio",
      image: "/assets/performancehigh.png",
      width: 220,
      height: 251,
    },
    {
      title: portugues ? "Backend moderno" : "Modern Backend",
      description: portugues
        ? "Utilizo os frameworks mais recentes para trazer as últimas novidades da tecnologia para o seu serviço"
        : "I use the latest frameworks to bring the newest technology trends to your service.”",
      path: "https://github.com/thiago-fealves/Portfolio",
      image: "/assets/backendhigh.png",
      width: 225,
      height: 235,
    },
    {
      title: portugues ? "Segurança" : "Security",
      description: portugues
        ? "Emprego meu conhecimento multidisciplinar de cibersegurança para proteger seu negócio"
        : "two line description of this highlight of mine",
      path: "https://github.com/thiago-fealves/Portfolio",
      image: "/assets/securityhigh.png",
      width: 180,
      height: 235,
    },
  ];

  return (
    <>
      <Image
        className={styles.bgright}
        src="/assets/bgeffectleft.png"
        width={397}
        height={84}
        alt=""
      />
      <div className={styles.fullblock}>
        <Title customcls={styles.highlightstitle}>
          {portugues ? "{ Destaques }" : "{ Highlights }"}
        </Title>
        <div className={styles.highlights}>
          {highlights.map((highlight) => (
            <div className={styles.highlightblocks}>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                src={highlight.image}
                alt=""
                className={styles.highlightimage}
              />
              <div className={styles.highlightstext}>
                <Title>{highlight.title}</Title>
                <Paragraph>{highlight.description}</Paragraph>
                <Link href={highlight.path}>
                  {portugues ? "< Veja o projeto >" : "< Check the project >"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        className={styles.bgleft}
        src="/assets/bgeffectright.png"
        width={333}
        height={132}
        alt=""
      />
    </>
  );
};

export default Highlights;
