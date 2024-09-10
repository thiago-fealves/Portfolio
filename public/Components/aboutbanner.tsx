// Modules
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
// Styles
import styles from "../styles/aboutbanner.module.css";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Title from "./title";
import Paragraph from "./paragraph";

// Main Component
const AboutBanner = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleandtext}>
          <Title>{portugues ? "Sobre mim" : "About me"}</Title>
          <Paragraph>
            {portugues?"Sou um desenvolvedor autodidata com foco nas tecnologias mais recentes, buscando os padrões mais novos de segurança e desenvolvimento. Acredito que inovação é a chave para se destacar, e por isso, me mantenho atualizado com as ferramentas mais eficazes do mercado.":"I am a self-taught developer focused on the latest technologies, aiming for the newest security and development standards. I believe innovation is the key to standing out, and that’s why I stay up to date with the most effective tools on the market."}<br/><br/>{portugues ? "Meu diferencial é trazer uma visão atual que toda empresa precisa para se atualizar e crescer, pois confio que essa metodologia de trabalho é capaz de entregar resultados que vão além do esperado em menos tempo. Estou aqui para ajudar sua empresa a avançar de maneira eficiente, escalável e segura.":"My differential is bringing a modern perspective that every company needs to update and grow, as I believe this work methodology is capable of delivering results beyond expectations in less time. I’m here to help your company move forward efficiently, scalably, and securely."}
          </Paragraph>
          <MotionLink
            className={dmsans.className}
            href="https://github.com/thiago-fealves"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {portugues ? "< Confira o meu GitHub >" : "< Check my GitHub >"}
          </MotionLink>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src="/assets/fotoabout.png"
          alt=""
        />
      </div>
    </>
  );
};

export default AboutBanner;
