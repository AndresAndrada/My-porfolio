import React from "react";
import style from '../1- Henry/Henry.module.css';
import platzi from '../../../img/Platzi-blazor-webassembly.png';
// import { Link } from "react-router-dom";
import docs from '../../../doc/Platzi-diploma-blazor-webassembly.pdf'

const Platzi = () => {
    return (
        <div className={style.henry}>
            <div className={style.image}>
                {/* <img src={ hire } alt={ hire } width='800' /> */}
                <img src={platzi} alt={platzi} className={style.image} />
            </div>
            <div className={style.title}>
                <h4 className={style.title}>Platzi</h4>
                <h5>Blazor - WebAssembly</h5>
            </div>
            <div>
                <a target="_blank" href={docs} className={style.link}>
                    <ion-icon name="reader"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default Platzi;