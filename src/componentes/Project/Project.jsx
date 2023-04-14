import React from "react";
import Slider from "react-slick";
// import bonita from '../../img/bonita.png'
// import pokemon from '../../img/pokemon.png'
// import hire from '../../img/hire.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bonita from "./1- Bonita/Bonita";
import HireMySkills from "./2- Hire/Hire";
import Pokemon from "./3- Pokemon/Pokemon";
import style from '../Project/Project.module.css'


const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };
    return (
        <div className={ style.project } id="Proyecto" >
            {/* <h1>Project</h1> */}
            <Slider {...settings}>
                <div>
                    {/* <h3>3</h3> */}
                    {/* <img src={bonita} alt="" width='400'/> */}
                    <Bonita />
                </div>
                <div>
                    {/* <h3>3</h3> */}
                    {/* <img src={hire} alt="" width='600'/> */}
                    <HireMySkills />
                </div>
                <div>
                    {/* <h3>3</h3> */}
                    {/* <img src={pokemon} alt="" width='600'/> */}
                    <Pokemon />
                </div>
            </Slider>
        </div>
    )
};

export default Project;