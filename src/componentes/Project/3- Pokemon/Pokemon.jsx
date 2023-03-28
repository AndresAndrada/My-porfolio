import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import pokemon from '../../../img/pokemon.png'
import { Link } from "react-router-dom";


const Pokemon = () => {
    const handleClickgithub = () => {
        window.open('https://github.com/AndresAndrada/PI-Pokemon-main');
    };

    return (
        <div className={ style.bonita }>
            <h2>Pokemon</h2>
            <h4>Proyecto Indivicual</h4>
            <div className={ style.imagen}>
                <img src={ pokemon } alt={ pokemon } width='800' />
            </div>
            <div>
                    <Link onClick={ handleClickgithub }>
                        <ion-icon name="logo-github"></ion-icon>
                    </Link>
            </div>
        </div>
    )
}

export default Pokemon; 