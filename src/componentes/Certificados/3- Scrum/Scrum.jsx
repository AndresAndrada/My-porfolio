import React from "react";
import style from '../1- Henry/Henry.module.css';
import scrum from '../../../img/PersonalClass SCRUM.png';
// import { Link } from "react-router-dom";
import docs from '../../../doc/Andrés Andrada PersonalClass SCRUM.pdf'


const Scrum = () => {
    return (
        <div className={style.henry}>
            <div className={style.image}>
                {/* <img src={ hire } alt={ hire } width='800' /> */}
                <img src={scrum} alt={scrum} className={style.image} />
            </div>
            <div className={style.title}>
                <h4 className={style.title}>Scrum</h4>
                <h5>Metodologías Agiles</h5>
            </div>
            <div>
                <a target="_blank" href={docs} className={style.link}>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default Scrum;