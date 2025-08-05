import React, { useState } from 'react';
import { Link } from "react-scroll";
import styles from '../NavBar/NavBar.module.css';
import './NavBar.module.css'
import { BurgerButton } from './dropdown/BurgerButton';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar(props) {
  const [mode, setMode] = useState('home');
  const [click, setClick] = useState(false);

  const closeMenu = (e) => {
    // setActive(e)
    setClick(false)
  };

  return (
    <>
      <div className={styles.conteiner}>
        <div className={styles.img}>
          {/* <a href='/home' className='enlace'>
            <img src={logo} className={styles.fotohome} alt='logo' />
          </a> */}
        </div>
        <div className={`${styles.list} ${click ? styles.active : null}`}>
          <Link
            className={styles.link}
            activeClass={styles.activeLink}
            to='Home' name='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => closeMenu('home')}>
            Home
          </Link>
          <Link
            className={styles.link}
            activeClass={styles.activeLink}
            to='About'
            name='about'
            spy={true}
            smooth={true}
            offset={-37}
            duration={500}
            onClick={() => closeMenu('about')}>
            About
          </Link>
          <Link
            className={styles.link}
            activeClass={styles.activeLink}
            to='Proyecto'
            name='project'
            spy={true}
            smooth={true}
            offset={-27}
            duration={500}
            onClick={() => closeMenu('project')}>
            Proyectos
          </Link>
          <Link
            className={styles.link}
            activeClass={styles.activeLink}
            to='Technology' name='technology'
            spy={true} smooth={true}
            offset={-15}
            duration={500}
            onClick={() => closeMenu('tecnology')}>
            Tecnologias
          </Link>
          <Link
            className={styles.link}
            activeClass={styles.activeLink}
            to='Certificado' name='certificado'
            spy={true}
            smooth={true}
            offset={-7}
            duration={500}
            onClick={() => closeMenu('certific')}>
            Certificado
          </Link>
          <Link
            className={styles.link}
            activeClass={styles.activeLink}
            to='Footer' name='footer'
            spy={true} smooth={true}
            offset={-5}
            duration={500}
            onClick={() => closeMenu('contact')}>
            Contacto
          </Link>
        </div>
        <div className={styles.darkMode}>
          {mode
            ? <MdOutlineLightMode size="25px" onClick={() => setMode(!mode)} />
            : <MdDarkMode size="25px" color='white' onClick={() => setMode(!mode)} />
          }
        </div>
        <div className={styles.burguer}>
          <BurgerButton click={click} onClick={() => setClick(!click)} />
        </div>
        <div className={`${click ? styles.bgDiv : styles.bgDiv1}`} />
      </div>
    </>
  );
}

export default Navbar;