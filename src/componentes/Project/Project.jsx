import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Bonita from "./1- Bonita/Bonita";
// import HireMySkills from "./2- Hire/Hire";
// import Pokemon from "./3- Pokemon/Pokemon";
import styles from '../Project/Project.module.css'
import style from './1- Bonita/Bonita.module.css';
import sliderStyles from './Slider.module.css';
// import PersonalClass from "./4- PersonalClass/PersonalClass";
// import Whatsapp from "./5- Whatsapp.js/Whatsapp";
import SampleNextArrow from "../../core/ui/SampleNextArrow";
import SamplePrevArrow from "../../core/ui/SamplePrevArrow";
import { data } from "../../utils/data";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";

const Project = (url) => {
  const handleClickgithub = () => {
    window.open(url);
  };

  const handleClickDeploy = (url) => {
    window.open(url);
  };

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
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className={styles.container} id="Proyecto">
      <div className={styles.title}>
        <h2>Proyectos</h2>
      </div>
      {/* <div className={styles.project}> */}
      <div className="slider-container">
        <Slider
          {...settings}
          className={sliderStyles['slick-slider']}
        >
          {data.map((item) => {
            return (
              <div className={style.bonita}>
                <div className={style.image}>
                  {/* <img src={ img } alt={ hire } width='800' /> */}
                  <img src={item.img} alt={item.img} className={style.image} />
                </div>
                <div className={style.text}>
                  <h4 className={style.title}>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className={style.botonIcon}>
                  <Link onClick={() => handleClickgithub(item.github)} className={style.tecnology}>
                    {item?.tecnology.length > 0 && item?.tecnology.map((icon) => {
                      return <div className={style.contentIcon}>{icon}</div>;
                    })}
                  </Link>
                </div>
                <div className={style.boton}>
                  <Link onClick={() => handleClickgithub(item.github)} className={style.link}>
                    <FaGithub color="#ce8c40ff" className={style.iconDoc} />
                  </Link>
                  {item.deploy &&
                    <Link onClick={() => handleClickDeploy(item.deploy)} className={style.link}>
                      <IoDocumentTextSharp color="#ce8c40ff" className={style.iconDoc} />
                    </Link>}
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
};

export default Project;