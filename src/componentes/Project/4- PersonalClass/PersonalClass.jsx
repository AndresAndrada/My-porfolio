import React from "react";
import { Link } from "react-router-dom";
import pc from '../../../img/pc.png'
import style from '../1- Bonita/Bonita.module.css'

const PersonalClass = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/PersonalClass-Front');
    };

    const handleClickDeploy = () => {
        window.open('https://api.personalclassonline.com/');
    };

    return (
        <div className={style.bonita}>
            <h1 className={style.title}>Personal Class</h1>
            <h4 className={style.proyecto}>Academia Educativa</h4>
            {/* {window.outerWidth < 858 ? */}
            <div className={style.imagen}>
                <img src={pc} alt={pc} className={style.image} />
                {/* <img src={ pokemon } alt={ pokemon } width='400' /> */}
            </div>
            {/* } */}
            <div className={style.boton}>
                <Link onClick={handleClickgithub}>
                    <ion-icon name="logo-github" className={style.icon}></ion-icon>
                </Link>
                <Link onClick={handleClickDeploy}>
                    <ion-icon name="reader" className={style.icon}></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default PersonalClass; 