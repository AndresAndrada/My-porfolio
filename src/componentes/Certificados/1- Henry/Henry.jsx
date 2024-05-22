import React from "react";
import style from './Henry.module.css';
import henry from '../../../assets/Henry.jpeg';
// import { Link } from "react-router-dom";
import docs from "../../../doc/Full Stack Web Developer - Henry.pdf";


const Henry = () => {
    return (
        <div className={style.henry}>
            <div className={style.image}>
                {/* <img src={ hire } alt={ hire } width='800' /> */}
                <img src={henry} alt={henry} className={style.image} />
            </div>
            <div className={style.title}>
                <h4 className={style.title}>Henry</h4>
                <h5>Full Stack Developer</h5>
            </div>
            <div>
                <a target="_blank" href={docs} className={style.link} rel="noreferrer">
                    <ion-icon name="reader"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default Henry; 