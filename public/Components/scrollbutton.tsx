// Modules
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";

// Styles
import styles from "../styles/scrollbutton.module.css";

// Main Component
const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <div className={styles.buttoncontainer}>
      <button onClick={scrollToTop} className={styles.button}>
        <Image src="/assets/scrollbt.png" width={72.1} height={70} alt="" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
