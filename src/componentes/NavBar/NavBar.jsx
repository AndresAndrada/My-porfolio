import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import styles from '../NavBar/NavBar.module.css';
import './NavBar.module.css'
import { BurgerButton } from './dropdown/BurgerButton';
import { MdOutlineLightMode, MdDarkMode, MdLanguage } from "react-icons/md";
import { useStoreUi } from '../../store';

function Navbar() {
  const { SetDarkMode, DarkMode, Language, SetLanguage } = useStoreUi(state => state);
  const [mode, setMode] = useState('home');
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const closeMenu = (e) => {
    setClick(false)
  };

  return (
    <div className={`${styles.conteiner} ${scrolled ? styles.scrolled : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
        <div className={`${styles.img} ${styles.darkMode}`}>
          {mode
            ? <MdOutlineLightMode size="30px" onClick={() => SetDarkMode(!DarkMode)} className={styles.fadeOut} />
            : <MdDarkMode size="30px" color='white' onClick={() => setMode(!DarkMode)} className={styles.fadeIn} />
          }
        </div>
        <div 
          className={styles.languageMode} 
          onClick={() => SetLanguage(Language === 'es' ? 'en' : 'es')}
        >
          <MdLanguage size="30px" />
          <span className={styles.languageText} >{Language.toUpperCase()}</span>
        </div>
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
          offset={-1}
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
          offset={1}
          duration={500}
          onClick={() => closeMenu('project')}>
          Proyectos
        </Link>
        <Link
          className={styles.link}
          activeClass={styles.activeLink}
          to='Technology' name='technology'
          spy={true} smooth={true}
          offset={1}
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
          offset={1}
          duration={500}
          onClick={() => closeMenu('certific')}>
          Certificado
        </Link>
        <Link
          className={styles.link}
          activeClass={styles.activeLink}
          to='Footer' name='footer'
          spy={true} smooth={true}
          offset={1}
          duration={500}
          onClick={() => closeMenu('contact')}>
          Contacto
        </Link>
      </div>
      <div className={styles.burguer}>
        <BurgerButton click={click} onClick={() => setClick(!click)} />
      </div>
      <div className={`${click ? styles.bgDiv : styles.bgDiv1}`} />
    </div>
  );
}

export default Navbar;