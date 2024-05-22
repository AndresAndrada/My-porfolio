import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Bonita from "./1- Bonita/Bonita";
import HireMySkills from "./2- Hire/Hire";
import Pokemon from "./3- Pokemon/Pokemon";
import styles from '../Project/Project.module.css'
import PersonalClass from "./4- PersonalClass/PersonalClass";
import Whatsapp from "./5- Whatsapp.js/Whatsapp";


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
        <div className={styles.container}>
            <div className={styles.title} id="Proyecto">
                <h2>Proyectos</h2>
            </div>
            <div className={styles.project} >
                {/* <Slider
                // {...settings} 
                className={styles.conten}> */}
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
                <div>
                    <Whatsapp />
                </div>
                {/* </Slider> */}
            </div>
        </div>
    )
};

export default Project;