import React from "react";
// import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import img from '../../../img/bonita.png'
// import bonita1 from '../../../video/bonita.mp4'
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
            <div className={style.image}>
                {/* <img src={ img } alt={ hire } width='800' /> */}
                <img src={img} alt={img} className={style.image} />
            </div>
            {/* <div className={style.contenVideo}>
                <ReactPlayer
                    url={bonita1}
                    width='100%'
                    height='100%'
                    controls
                    playing
                    className={style.video}
                />
            </div> */}
            <div className={style.title}>
                <h4>Bonita Devoto</h4>
                <h5>E-commerce</h5>
            </div>
            <div className={style.boton}>
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

export default Bonita; 