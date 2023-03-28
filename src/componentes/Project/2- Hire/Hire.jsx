import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import hire from '../../../img/hire.png'
import { Link } from "react-router-dom";


const HireMySkills = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/sergioare/PF-HireMySkills');
    };

    const handleClickDeploy = () => {
        window.open('https://pf-hire-my-skills.vercel.app/');
    };

    return (
        <div className={ style.bonita }>
            <h2>HireMySkills</h2>
            <h4>E-commerce de Servicios</h4>
            <div className={ style.imagen}>
                <img src={ hire } alt={ hire } width='800' />
            </div>
            <div>
                <Link onClick={ handleClickgithub }>
                    <ion-icon name="logo-github"></ion-icon>
                </Link>
                <Link onClick={ handleClickDeploy }>
                    <ion-icon name="reader"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default HireMySkills; 