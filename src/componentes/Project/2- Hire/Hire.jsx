import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import hire from '../../../assets/hire.png'
import { Link } from "react-router-dom";


const HireMySkills = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/sergioare/PF-HireMySkills');
    };

    const handleClickDeploy = () => {
        window.open('https://pf-hire-my-skills.vercel.app/');
    };

    return (
        <div className={style.bonita}>
            <div className={style.image}>
                {/* <img src={ hire } alt={ hire } width='800' /> */}
                <img src={hire} alt={hire} className={style.image} />
            </div>
            <div className={style.title}>
                <h4 className={style.title}>HireMySkills</h4>
                <h5>E-commerce de Servicios</h5>
            </div>
            <div>
                <Link onClick={handleClickgithub} className={style.link}>
                    <ion-icon name="logo-github"></ion-icon>
                </Link>
                <Link onClick={handleClickDeploy} className={style.link}>
                    <ion-icon name="reader"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default HireMySkills; 