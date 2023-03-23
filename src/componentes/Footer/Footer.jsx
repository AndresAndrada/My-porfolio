import React from "react";
import { Link } from "react-router-dom";
import style from '../../componentes/Footer/Footer.module.css'

const Footer = () => {

    const handleClickWapp = () => {
        window.open('https://wa.me/543517445402');
    };

    const handleClickLinkedIn = () => {
        window.open('https://www.linkedin.com/in/andr%C3%A9s-alfredo-andrada-1a83261b5/');
    };

    const handleClickInst = () => {
        window.open('https://www.instagram.com/andres.aa94/?hl=es-la');
    };

    return (
        <div className={ style.footer }>
                <Link onClick={ handleClickWapp }>
                    {/* <img src={ whtp } alt="whtp" width='50' /> */}
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </Link>
                <Link onClick={ handleClickLinkedIn }>
                    {/* <img src={ linkedIn } alt="linkedIn" width='50' /> */}
                    <ion-icon name="logo-linkedin"></ion-icon>
                </Link>
                <Link onClick={ handleClickInst }>
                    {/* <img src={ inst } alt="inst" width='50' /> */}
                    <ion-icon name="logo-instagram"></ion-icon>
                </Link>
                <Link onClick={ handleClickInst }>
                    <ion-icon name="logo-github"></ion-icon>
                </Link>
        </div>
    );
};

export default Footer;