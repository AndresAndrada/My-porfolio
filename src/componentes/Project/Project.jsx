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
        <div className={style.project} id="Proyecto" >
            {/* <h1>Project</h1> */}
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
                <Pokemon />
            </div>
            <div>
                <PersonalClass />
            </div>
            {/* </Slider> */}
        </div>
    )
};

export default Project;