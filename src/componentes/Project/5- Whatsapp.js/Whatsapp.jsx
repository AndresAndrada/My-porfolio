import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import wtp from '../../../img/whtp.png'
import { Link } from "react-router-dom";


const Whatsapp = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/whatsapp-web');
    };

    const handleClickDeploy = () => {
        window.open('https://pf-hire-my-skills.vercel.app/');
    };

    return (
        <div className={style.bonita}>
            <div className={style.image}>
                {/* <img src={ hire } alt={ hire } width='800' /> */}
                <img src={wtp} alt={wtp} className={style.image} />
            </div>
            <div className={style.title}>
                <h4 className={style.title}>WhatsApp-Boot</h4>
                <h5>Respuestas personalizadas y automatizadas</h5>
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

export default Whatsapp; 