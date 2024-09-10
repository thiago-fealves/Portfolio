// Modules
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Language Logic
import { useContext, useEffect } from "react";
import { LanguageContext } from "./language";

// Styles
import styles from "../styles/button.module.css";

// Data
interface ButtonProps {
  image: string;
  hoverImage: string;
  width: number;
  path?: string;
  text?: string;
  height: number;
  customcls?: string;
  download?: string;
}

// Main Component
const Button = ({
  image,
  hoverImage,
  width,
  path,
  height,
  customcls,
}: ButtonProps) => {
  const [currentImage, setCurrentImage] = useState(image);
  const { portugues } = useContext(LanguageContext);
  useEffect(() => {
    setCurrentImage(image);
  }, [portugues]);
  return (
    <div
      className={styles.button + " " + customcls}
      onMouseEnter={() => setCurrentImage(hoverImage)}
      onMouseLeave={() => setCurrentImage(image)}
    >
      <Link href={path ? path : ""} className={styles.link}>
        <ButtonContent image={currentImage} width={width} height={height} />
      </Link>
    </div>
  );
};

const ButtonContent = ({ image, width, height }) => {
  const { portugues } = useContext(LanguageContext);
  return (
    <>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src={image}
        alt=""
        className={styles.image}
        width={width}
        height={height}
      />
    </>
  );
};

export default Button;
