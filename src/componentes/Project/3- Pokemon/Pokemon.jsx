import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import pokemon from '../../../img/pokemon.png'
import { Link } from "react-router-dom";


const Pokemon = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/PI-Pokemon-main');
    };

    return (
        <div className={style.bonita}>
            <div className={style.image}>
                <img src={pokemon} alt={pokemon} className={style.image} />
                {/* <img src={ pokemon } alt={ pokemon } width='400' /> */}
            </div>
            <div className={style.title}>
                <h4 className={style.title}>Pokemon</h4>
                <h5>Proyecto Individual</h5>
            </div>
            <div>
                <Link onClick={handleClickgithub} className={style.link}>
                    <ion-icon name="logo-github"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Pokemon; 