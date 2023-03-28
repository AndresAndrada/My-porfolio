import React from "react";
import style from '../1- Bonita/Bonita.module.css';
import hire from '../../../img/hire.png'


const HireMySkills = () => {
    return (
        <div className={ style.bonita }>
            <h2>HireMySkills</h2>
            <h4>E-commerce de Servicios</h4>
            <img src={ hire } alt={ hire } width='800' />
        </div>
    )
}

export default HireMySkills; 