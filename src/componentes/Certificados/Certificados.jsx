import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Certificado.module.css";
import style from '../Certificados/1- Henry/Henry.module.css';
import { certificate } from "../../utils/data";
import SampleNextArrow from "../../core/ui/SampleNextArrow";
import SamplePrevArrow from "../../core/ui/SamplePrevArrow";
import sliderStyles from './SliderCertific.module.css';

const Certificados = () => {
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
    <section className={styles.container} id="Certificado">
      <div className={styles.title} id="Certificado">
        <h2>Certificados</h2>
      </div>
      {/* <div className={styles.certificado}> */}
      <div className="slider-container">
        {/* <h1>Project</h1> */}
        <Slider
          {...settings}
          className={sliderStyles['slick-slider']}>
          {certificate.map((item) => {
            return (
              <div key={item.id} className={style.henry}>
                <div className={style.image}>
                  {/* <img src={ hire } alt={ hire } width='800' /> */}
                  <img src={item.img} alt={item.img} className={style.image} />
                </div>
                <div className={style.title}>
                  <h4 className={style.title}>{item.name}</h4>
                  <h5>{item.title}</h5>
                </div>
                <div>
                  <a target="_blank" href={item.docs} rel="noreferrer" className={style.link}>
                    <ion-icon name="reader"></ion-icon>
                  </a>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
};

export default Certificados;