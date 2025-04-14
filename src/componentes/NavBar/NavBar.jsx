import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import logo from '../../assets/FOTO CV.png';
import styles from '../NavBar/NavBar.module.css';
// import docs from '../../doc/CV.pdf';
import './NavBar.module.css'
import { BurgerButton } from './dropdown/BurgerButton';

function Navbar(props) {

  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false)
  };

  return (
    <>
      <div className={styles.conteiner}>
        <div className={styles.img}>
          <a href='/home' className='enlace'>
            <img src={logo} className={styles.fotohome} alt='logo' />
          </a>
        </div>
        <div className={`${styles.list} ${click ? styles.active : null}`}>
          <Link className={styles.link} to='Home' name='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          <Link className={styles.link} to='About' name='about' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>About</Link>
          <Link className={styles.link} to='Proyecto' name='project' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Proyectos</Link>
          <Link className={styles.link} to='Technology' name='technology' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Tecnologias</Link>
          <Link className={styles.link} to='Certificado' name='certificado' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Certificado</Link>
          <Link className={styles.link} to='Footer' name='footer' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contacto</Link>
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