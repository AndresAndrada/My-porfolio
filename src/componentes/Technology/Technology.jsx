import React from "react";
import { SiSequelize, SiPostgresql, SiExpress } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoHtml5 } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiSolidity, SiDocker } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import style from '../../componentes/Technology/Technology.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import sliderStyles from '../Project/Slider.module.css';
import sliderStyles from './SliderTecnologi.module.css';

function SampleNextArrow() {
  return (
    <div />
  );
}

function SamplePrevArrow() {
  return (
    <div />
  );
}

const Technology = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 0,
    rows: 2,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <section className={style.contenedor} id="Technology">
      <h2>Tecnologías</h2>
      <div className={style.technology}>
        <div className="slider-container">
          <Slider
            {...settings}
            className={sliderStyles['slick-slider']}
          >
            <div className={style.simbolos}>
              <h5 className={style.itmes}>JavaScript</h5>
              <IoLogoJavascript className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>TypeScript</h5>
              <SiTypescript className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>React</h5>
              <IoLogoReact className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>HTML5</h5>
              <IoLogoHtml5 className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>CSS</h5>
              <IoLogoCss3 className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Tailwind</h5>
              <SiTailwindcss className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Next</h5>
              <TbBrandNextjs className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Node.JS</h5>
              <IoLogoNodejs className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Express.JS</h5>
              <SiExpress className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Sequelize</h5>
              <SiSequelize className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>PostgreSQL</h5>
              <SiPostgresql className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Solidity</h5>
              <SiSolidity className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Docker</h5>
              <SiDocker className={style.icons} />
            </div>
            <div className={style.simbolos}>
              <h5 className={style.itmes}>Java</h5>
              <FaJava className={style.icons} />
            </div>
          </Slider>
        </div>
      </div>
    </section >
  )
}

export default Technology;