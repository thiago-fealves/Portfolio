// Imports
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fonts
import { Arvo } from "next/font/google";
const arvo = Arvo({ weight: "700", subsets: ["latin"] });
const regulararvo = Arvo({ weight: "400", subsets: ["latin"] });

// Data
interface TitleProps {
  children: ReactNode;
  customcls?: string;
  subtitle?: boolean;
}

// Main Component
const Title = ({ children, customcls, subtitle }: TitleProps) => {
  return (
    <motion.h1
      className={
        subtitle
          ? regulararvo.className + " " + customcls
          : arvo.className + " " + customcls
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.h1>
  );
};

export default Title;
