// Modules
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

// Styles
import styles from "../styles/taverndices.module.css";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

// Language Logic
import { useContext } from "react";
import { LanguageContext } from "./language";

// Components
import Paragraph from "./paragraph";
import Title from "./title";

// Main Component
const TavernDices = () => {
  const { portugues } = useContext(LanguageContext);
  const [chat, setChat] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleDices = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/taverndices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dices: inputValue,
        }),
      });
      const res = await response.json();
      setChat((prevChat) => [
        ...prevChat,
        "Dados: " + res.dices + " | Soma dos dados: " + res.sumofdices,
      ]);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending dices", error);
    }
    setInputValue("");
  };

  useEffect(() => {
    const chatMessagesElement = document.querySelector(
      `.${styles.chatmessages}`
    );
    if (chatMessagesElement) {
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }
  }, [chat]);
  return (
    <div className={styles.chatwrapper}>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.diceimage}
        src="/assets/taverndicesimage.png"
        alt=""
      />
      <div className={styles.text}>
        <Title>Tavern Dices</Title>
        <Paragraph>{portugues ? "Este foi o primeiro projeto desenvolvido por mim quando tinha 15 anos. Trata-se de um bot do discord para RPGs de mesa, ele foi criado para adaptar os principais elementos de um encontro presencial na época da pandemia da COVID-19. Você pode testá-lo ao lado digitando dados no formato \"NdN\"." : "This was the first project I developed when I was 15 years old. It’s a Discord bot for tabletop RPGs, created to adapt the main elements of a face-to-face session during the COVID-19 pandemic. You can test it by typing dice rolls in the format \"NdN\"."}</Paragraph>
        <Paragraph><span className={styles.tip}>{portugues ? "<Dica/> ":"<Tip/> "}</span>{portugues? "caso não esteja familiarizado com dados de RPG, escreva \"Nd6\", você rolará N dados comuns.":"If you’re not familiar with RPG dice, type \"Nd6\", this way you’ll roll N standard dice."}</Paragraph>
        <MotionLink
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          href="https://github.com/thiago-fealves/TavernDices"
          className={dmsans.className}
        >
          {portugues ? "Veja ao vivo >>>" : "Check live >>>"}
        </MotionLink>
      </div>
      <div className={styles.chatcontainer}>
        <div className={styles.chatmessages}>
          {chat.map((message, index) => (
            <div key={index} className={styles.chatmessage}>
              <Paragraph>{message}</Paragraph>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form className={styles.chatform} onSubmit={handleDices}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Dices"
            className={styles.chatforminput + " " + dmsans.className}
          />
          <button type="submit" className={styles.chatformbutton}>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src="/assets/sendarrow.png"
              alt=""
              width={21.65}
              height={20}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TavernDices;
