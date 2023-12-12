import React from "react";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import bonita1 from '../../../video/bonita.mp4'
import style from './Bonita.module.css'

const Henry = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/pfhenry-back');
    };

    const handleClickDeploy = () => {
        window.open('https://9-pf-deploy-font.vercel.app/');
    };

    return (
        <div className={style.henry}>
            <h3 className={style.title}>Bonita Devoto</h3>
            <h4 className={style.proyecto}>E-commerce</h4>
            <div className={style.contenVideo}>
                <ReactPlayer
                    url={bonita1}
                    width='100%'
                    height='100%'
                    controls
                    playing
                    className={style.video}
                />
            </div>
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

export default Henry; 