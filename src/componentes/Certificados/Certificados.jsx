import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import style from "./Certificado.module.css";
import Henry from "./1- Henry/Henry";
import Platzi from "./2- Platzi/Platzi";
import Scrum from "./3- Scrum/Scrum";


const Certificados = () => {

    return (
        <>
            <div className={style.title}>
                <h2>Certificados</h2>
            </div>
            <div className={style.certificado} id="Proyecto" >
                {/* <h1>Project</h1> */}
                {/* <Slider
                // {...settings} 
                className={style.conten}> */}
                <div>
                    <Henry />
                </div>
                <div>
                    <Platzi />
                </div>
                <div>
                    <Scrum />
                </div>
                {/* </Slider> */}
            </div>
        </>
    )
};

export default Certificados;