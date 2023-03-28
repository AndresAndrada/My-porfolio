import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import pokemon from '../../../img/pokemon.png'


const Pokemon = () => {
    return (
        <div className={ style.bonita }>
            <h2>Pokemon</h2>
            <h4>Proyecto Indivicual</h4>
            <img src={ pokemon } alt={ pokemon } width='800' />
        </div>
    )
}

export default Pokemon; 