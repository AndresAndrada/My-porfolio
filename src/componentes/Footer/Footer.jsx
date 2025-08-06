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

  const handleClickgithub = () => {
    window.open('https://github.com/AndresAndrada');
  };

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.parrafo}>
          <p className={style.letra}>Muchas gracias por visitar mi porfolio! 😁
            <br />
            En caso de que desee contactarme les dejo los siguieste datos: ⬇️
          </p>
        </div>
        <div className={style.redes}>
          <div className={style.items}>
            <p className={style.parrafoItem}>WhatsApp:</p>
            <Link onClick={handleClickWapp} className={style.link}>
              {/* <img src={ whtp } alt="whtp" width='50' /> */}
              <ion-icon name="logo-whatsapp"></ion-icon>
            </Link>
          </div>
          <div className={style.items}>
            <p className={style.parrafoItem}>LinkedIn:</p>
            <Link onClick={handleClickLinkedIn} className={style.link}>
              {/* <img src={ linkedIn } alt="linkedIn" width='50' /> */}
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </div>
          <div className={style.items}>
            <p className={style.parrafoItem}>Instagam:</p>
            <Link onClick={handleClickInst} className={style.link}>
              {/* <img src={ inst } alt="inst" width='50' /> */}
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </div>
          <div className={style.items}>
            <p className={style.parrafoItem}>gitHub:</p>
            <Link onClick={handleClickgithub} className={style.link}>
              <ion-icon name="logo-github"></ion-icon>
            </Link>
          </div>

        </div>
      </div>
      <div className={style.date}>
        <p className={style.letra}>© 2025 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;