import React from "react";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import bonita from '../../../video/bonita.mp4'
import style from './Bonita.module.css'


const Bonita = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/pfhenry-back');
    };

    const handleClickDeploy = () => {
        window.open('https://my-porfolio-henna.vercel.app/');
    };

    return (
        <div className={ style.bonita }>
            <h1 className={ style.title }>Bonita Devoto</h1>
            <h4 className={ style.proyecto }>E-commerce</h4>
                <ReactPlayer  
                    url={ bonita }
                    // width='400'
                    controls
                    playing
                />
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

export default Bonita; 