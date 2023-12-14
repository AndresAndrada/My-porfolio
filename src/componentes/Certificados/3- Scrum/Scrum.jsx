import React from "react";
import style from '../1- Henry/Henry.module.css';
import scrum from '../../../assets/PersonalClass SCRUM.png';
// import { Link } from "react-router-dom";
import docs from '../../../doc/Andrés Andrada PersonalClass SCRUM.pdf'
import { Link } from "react-router-dom/cjs/react-router-dom.min";


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
                <Link target="_blank" href={docs} className={style.link}>
                    <ion-icon name="reader"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Scrum;