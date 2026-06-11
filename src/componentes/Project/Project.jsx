import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../Project/Project.module.css'
import sliderStyles from './Slider.module.css';
import SampleNextArrow from "../../core/ui/SampleNextArrow";
import SamplePrevArrow from "../../core/ui/SamplePrevArrow";
import { data } from "../../utils/data";
import { CardProject } from "./CardProject";
import { useStoreUi } from "../../store";

const translations = {
  es: {
    title: "Proyectos",
      },
  en: {
    title: "Projects",
  }
};

const Project = () => {
  const { DarkMode, Language } = useStoreUi(state => state);
  
  var settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true
        }
      }
    ]
  };

  //  var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   // centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 0
  //       }
  //     },
  //     {
  //       breakpoint: 650,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false
  //       }
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         arrows: true
  //       }
  //     }
  //   ]
  // };

  const t = translations[Language] || translations.es;
  
  return (
    <section className={`${styles.container} ${DarkMode ? 'dark' : ''}`} id="Proyecto">
      <div className={styles.project}>
        <div className={styles.title}>
          <h2>{t.title}</h2>
        </div>
        {/* <div className={styles.project}> */}
        <div className={styles.sliderContainer}>
          <Slider
            {...settings}
            className={sliderStyles['slick-slider']}
          >
            {data.map((item) => {
              return <CardProject key={item.id} item={item} />
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
};

export default Project;
