import React from "react";
import { Link } from "react-router-dom";
import style from '../../componentes/Footer/Footer.module.css'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import { useStoreUi } from "../../store";

const translations = {
  es: {
    message1: "Desarrollando soluciones digitales con pasión y código.",
    message2: "¿Listo para empezar tu próximo proyecto? ¡Contáctame!",
    rights: `© ${new Date().getFullYear()} Andres Andrada. Todos los derechos reservados.`
  },
  en: {
    message1: "Developing digital solutions with passion and code.",
    message2: "Ready to start your next project? Let's talk!",
    rights: `© ${new Date().getFullYear()} Andres Andrada. All rights reserved.`
  }
};

const Footer = () => {
  const { Language } = useStoreUi(state => state);

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

  const t = translations[Language] || translations.es;

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.textSection}>
          <h3 className={style.title}>{t.message2}</h3>
          <p className={style.subtitle}>{t.message1}</p>
        </div>
        
        <div className={style.redes}>
          <Link onClick={handleClickWapp} className={style.link} aria-label="WhatsApp">
            <FaWhatsapp />
          </Link>
          <Link onClick={handleClickLinkedIn} className={style.link} aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link onClick={handleClickInst} className={style.link} aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link onClick={handleClickgithub} className={style.link} aria-label="GitHub">
            <FaGithub />
          </Link>
        </div>
      </div>
      <div className={style.date}>
        <p className={style.letra}>{t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;