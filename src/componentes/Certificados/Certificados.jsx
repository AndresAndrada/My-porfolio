import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./Certificado.module.css";
import Henry from "./1- Henry/Henry";
import Platzi from "./2- Platzi/Platzi";
import Scrum from "./3- Scrum/Scrum";


const Certificados = () => {

    return (
        <section className={styles.container} id="Certificado">
            <div className={styles.title} id="Certificado">
                <h2>Certificados</h2>
            </div>
            <div className={styles.certificado}>
                {/* <h1>Project</h1> */}
                {/* <Slider
                // {...settings} 
                className={styles.conten}> */}
                <div className={styles.card}>
                    <Henry />
                </div>
                <div className={styles.card}>
                    <Platzi />
                </div>
                <div className={styles.card}>
                    <Scrum />
                </div>
                {/* </Slider> */}
            </div>
        </section>
    )
};

export default Certificados;