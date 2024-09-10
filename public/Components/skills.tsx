// Modules
import { useState } from "react";
import { motion } from "framer-motion";

// Styles
import styles from "../styles/skills.module.css";

// Language Logic
import { LanguageContext } from "./language";
import { useContext } from "react";

// Components
import Title from "./title";

// Main Component
const Skills = () => {
  const [current, setCurrent] = useState("coding");
  const { portugues } = useContext(LanguageContext);
  return (
    <div className={styles.skillscontainer}>
      <div className={styles.textblock}>
        <Title customcls={styles.titlebanner}>
          {portugues ? "{ Habilidades }" : "{ Skills }"}
        </Title>
        <ul className={styles.selectorlist}>
          <li>
            <button
              onMouseEnter={() => setCurrent("databases")}
              className={
                current === "databases"
                  ? styles.selector + " " + styles.selectorfocus
                  : styles.selector
              }
            >
              <Title>Databases</Title>
            </button>
          </li>
          <li>
            <button
              onMouseEnter={() => setCurrent("frameworks")}
              className={
                current === "frameworks"
                  ? styles.selector + " " + styles.selectorfocus
                  : styles.selector
              }
            >
              <Title>Frameworks</Title>
            </button>
          </li>
          <li>
            <button
              onMouseEnter={() => setCurrent("coding")}
              className={
                current === "coding"
                  ? styles.selector + " " + styles.selectorfocus
                  : styles.selector
              }
            >
              <Title>Coding</Title>
            </button>
          </li>
          </ul>
          <ul className={styles.selectorlist2}>
          <li>
            <button
              onMouseEnter={() => setCurrent("offsec")}
              className={
                current === "offsec"
                  ? styles.selector + " " + styles.selectorfocus
                  : styles.selector
              }
            >
              <Title>OffSec</Title>
            </button>
          </li>

          <li>
            <button
              onMouseEnter={() => setCurrent("softskills")}
              className={
                current === "softskills"
                  ? styles.selector + " " + styles.selectorfocus
                  : styles.selector
              }
            >
              <Title>Soft-Skills</Title>
            </button>
          </li>
        </ul>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src={
          portugues
            ? "/assets/pt" + current + "banner.png"
            : "/assets/" + current + "banner.png"
        }
        alt=""
      />
    </div>
  );
};

export default Skills;
