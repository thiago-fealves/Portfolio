// Modules
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Button from "./button";
import Title from "./title";
import Paragraph from "./paragraph";

// Styles
import styles from "../styles/navbar.module.css";
import { Arvo } from "next/font/google";
const arvo = Arvo({ weight: "400", subsets: ["latin"] });
const arvobold = Arvo({ weight: "700", subsets: ["latin"] });

// Main Component
const NavBar = () => {
  const { portugues, toggleLanguage } = useContext(LanguageContext);
  const router = useRouter();

  // Data
  const navLinks = [
    { path: "/", label: portugues ? "Início" : "Home" },
    { path: "/projects", label: portugues ? "Projetos" : "Projects" },
    { path: "/about", label: portugues ? "Sobre" : "About" },
    { path: "/articles", label: portugues ? "Artigos" : "Articles" },
  ];
  return (
    <div className={styles.navcontainer}>
      <div className={styles.thiagocontainer}>
        <Title customcls={styles.thiagofealves}>Thiago Felipe</Title>
      </div>
      <div className={styles.pagescontainer}>
        {navLinks.map((navLink) => (
          <MotionLink
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={navLink.path}
            href={navLink.path}
            className={
              router.pathname === navLink.path
                ? arvobold.className + " " + styles.navbarselected
                : arvo.className + " " + styles.navbar
            }
          >
            {navLink.label}
          </MotionLink>
        ))}
        <div className={styles.translatecontainer} onClick={toggleLanguage}>
          <Button
            customcls=""
            image="/assets/translatebutton.png"
            hoverImage="/assets/translatebutton.png"
            text=""
            path=""
            height={30}
            width={30}
          />
          <Paragraph>{portugues ? "Translate" : "Traduzir"}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
