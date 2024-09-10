// Modules
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Styles
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmsanssub = DM_Sans({ weight: "500", subsets: ["latin"] });

// Data
interface ParagraphProps {
  children: ReactNode;
  customcls?: string;
  subtitle?: boolean;
}

// Component
const Paragraph = ({ children, customcls, subtitle }: ParagraphProps) => {
  return (
    <motion.p
      className={
        subtitle
          ? dmsanssub.className + " " + customcls
          : dmsans.className + " " + customcls
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.p>
  );
};
export default Paragraph;
