import React from "react";
import { Link } from "react-router-dom";
import whtp from '../../img/whtp.png'
import linkedIn from '../../img/linkedIn.png'
import github from '../../img/github.png'
import inst from '../../img/inst.png'

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
        <div>
            <h5>
                <Link onClick={ handleClickWapp }>
                    <img src={ whtp } alt="whtp" width='50' />
                </Link>
            </h5>
            <h5>
                <Link onClick={ handleClickLinkedIn }>
                    <img src={ linkedIn } alt="linkedIn" width='50' />
                </Link>
            </h5>
            <h5>
                <Link onClick={ handleClickInst }>
                    <img src={ inst } alt="inst" width='50' />
                </Link>
                </h5>
        </div>
    );
};

export default Footer;