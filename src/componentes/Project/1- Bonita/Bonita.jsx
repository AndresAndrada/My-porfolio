import React from "react";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import bonita from '../../../img/BonitaImg.png'
import bonita1 from '../../../video/bonita.mp4'
import style from './Bonita.module.css'

const Bonita = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/pfhenry-back');
    };

    const handleClickDeploy = () => {
        window.open('https://9-pf-deploy-font.vercel.app/');
    };

    return (
        <div className={style.bonita}>
            <h1 className={style.title}>Bonita Devoto</h1>
            <h4 className={style.proyecto}>E-commerce</h4>
            { window.outerWidth < 858 ? 
                <div className={ style.imagen}>
                    <img src={ bonita } alt={ bonita } className={ style.image } />
                    {/* <img src={ pokemon } alt={ pokemon } width='400' /> */}
                </div> : 
                <div className={style.contenVideo}>
                    <ReactPlayer
                        url={bonita1}
                        width='400'
                        controls
                        playing
                        className={style.video}
                    />
                </div>
            }
            <div className={style.boton}>
                <Link onClick={handleClickgithub}>
                    <ion-icon name="logo-github" className={ style.icon }></ion-icon>
                </Link>
                <Link onClick={handleClickDeploy}>
                    <ion-icon name="reader" className={ style.icon }></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Bonita; 