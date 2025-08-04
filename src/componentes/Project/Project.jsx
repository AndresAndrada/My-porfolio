import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bonita from "./1- Bonita/Bonita";
import HireMySkills from "./2- Hire/Hire";
import Pokemon from "./3- Pokemon/Pokemon";
import styles from '../Project/Project.module.css'
import sliderStyles from '../Project/Slider.module.css';
import PersonalClass from "./4- PersonalClass/PersonalClass";
import Whatsapp from "./5- Whatsapp.js/Whatsapp";
import SampleNextArrow from "../../core/ui/SampleNextArrow";
import SamplePrevArrow from "../../core/ui/SamplePrevArrow";

const Project = () => {
  var settings = {
    dots: true,
    infinite: false,
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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };
  return (
    <div className={styles.container}>
      <div className={styles.title} id="Proyecto">
        <h2>Proyectos</h2>
      </div>
      {/* <div className={styles.project}> */}
      <div className="slider-container">
        <Slider
          {...settings}
          className={sliderStyles['slick-slider']}
        >
          <div><Bonita /></div>
          <div><HireMySkills /></div>
          <div><PersonalClass /></div>
          <div><Pokemon /></div>
          <div><Whatsapp /></div>
        </Slider>
      </div>
    </div>
  )
};

export default Project;