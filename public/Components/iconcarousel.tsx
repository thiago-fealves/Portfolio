// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Styles
import styles from "../styles/iconcarousel.module.css";
import "swiper/css";

// Main Component
const IconCarousel = () => {
  // Data
  const icons = [
    { image: "/assets/githubicon.png" },
    { image: "/assets/burpicon.png" },
    { image: "/assets/geminiicon.png" },
    { image: "/assets/godoticon.png" },
    { image: "/assets/htmlicon.png" },
    { image: "/assets/insomniaicon.png" },
    { image: "/assets/kaliicon.png" },
    { image: "/assets/nesticon.png" },
    { image: "/assets/nexticon.png" },
    { image: "/assets/nmapicon.png" },
    { image: "/assets/prismaicon.png" },
    { image: "/assets/pythonicon.png" },
    { image: "/assets/reacticon.png" },
    { image: "/assets/typescripticon.png" },
  ];
  return (
    <Swiper
      className={styles.carousel}
      spaceBetween={0}
      slidesPerView={8}
      speed={700}
      loop={true}
      allowTouchMove={false}
      centeredSlides={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
    >
      {icons.map((icon) => (
        <SwiperSlide>
          <img className={styles.icon} src={icon.image} alt=""/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IconCarousel;
