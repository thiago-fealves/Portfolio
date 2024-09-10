// Modules
import Link from "next/link";

// Components
import Title from "./title";
import Paragraph from "./paragraph";
import Button from "./button";

// Styles
import styles from "../styles/mainbanner.module.css";

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Main Component
const MainBanner = () => {
  const { portugues } = useContext(LanguageContext);
  return (
    <>
      <div className={styles.mainblock}>
        <span className={styles.texts}>
          <Paragraph subtitle={true} customcls={styles.hello}>
            {portugues ? "Olá, eu me chamo" : "Hello, i'm"} Thiago Felipe A.
          </Paragraph>
          <Title customcls={styles.backend}>
            {portugues ? "Programador " : "A "}
            <span className={styles.highlight}>Backend</span>
            {portugues ? "" : " Developer"}
          </Title>
          <Title subtitle={true} customcls={styles.pentester}>
            {portugues ? "& Pentester" : "& Pentester"}
          </Title>
          <Paragraph customcls={styles.paragraph}>
            {portugues
              ? "Sou um engenheiro de software apaixonado e meu diferencial é a minha disposição em me manter atualizado. Minha missão é construir soluções backend modernas com foco em performance, escalabilidade e segurança."
              : "I’m a passionate software engineer, and my key differentiator is my commitment to staying up-to-date. My mission is to build modern backend solutions with a focus on performance, scalability, and security."}
          </Paragraph>
        </span>
        <div className={styles.btandnumber}>
          <div>
            <Button
              customcls={""}
              image={portugues ? "/assets/btresumept.png" : "/assets/BtResume.png"}
              hoverImage={
                portugues ? "/assets/btresumeptH.png" : "/assets/BtResumeH.png"
              }
              width={205}
              height={40}
              path="/curriculo.pdf"
            />
          </div>
          <Link href="https://contate.me/thiagofelipealves">
            <Paragraph subtitle={true}>+55 (31) 99496-0209</Paragraph>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MainBanner;
