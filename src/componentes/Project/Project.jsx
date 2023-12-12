import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Bonita from "./1- Bonita/Bonita";
import HireMySkills from "./2- Hire/Hire";
import Pokemon from "./3- Pokemon/Pokemon";
import style from '../Project/Project.module.css'
import PersonalClass from "./4- PersonalClass/PersonalClass";


const Project = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 1000,
    //     autoplaySpeed: 3500,
    //     cssEase: "linear"
    //   };
    return (
        <>
            <div className={style.title} id="Proyecto">
                <h2>Proyectos</h2>
            </div>
            <div className={style.project} >
                {/* <Slider
                // {...settings} 
                className={style.conten}> */}
                <div>
                    <Bonita />
                </div>
                <div>
                    <HireMySkills />
                </div>
                <div>
                    <PersonalClass />
                </div>
                <div>
                    <Pokemon />
                </div>
                {/* </Slider> */}
            </div>
        </>
    )
};

export default Project;