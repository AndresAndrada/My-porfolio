import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import styles from '../NavBar/NavBar.module.css';
import img from '../../img/FOTO CV.png';
import docs from '../../doc/CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  const [scroll, setScroll] = useState(false);
  console.log(scroll, 'SCROLL');

  const handleClick = () => setScroll(!scroll);

  const closeMenu = () => setScroll(false);

  // const handleHome = () => {
  // }

  return (
    <div className={styles.conteiner} id="Inicio">
      <div className={styles.left}>
        <li>
          <a href="/home">
            <img src={img} className={styles.fotohome} alt="home" />
          </a>
        </li>
        {/* <li><FontAwesomeIcon icon={ faBars } /></li> */}
      </div>
      <>
        {props.location.pathname === "/" ? <div className={styles.right}>
        </div > :
          <div className={styles.right}>
              <li className={styles.navItem}>
                <Link className={styles.link} to="/about" spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>
                  ACERCA DE MI
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.link} to="/project" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                  PROYECTO
                </Link>
              </li>
              {/* <li className={styles.navItem}>
                <Link className={styles.link} to="/contact" spy={true} smooth={true} offset={150} duration={500} onClick={closeMenu}>
                  CONTACTO
                </Link>
              </li> */}
              <li className={styles.navItem}>
                <a className={styles.link} href={docs}>CURRICULUM VITAE</a>
              </li>
              <li className={styles.navItem}>
                <input type="checkbox" id="check" className={styles.check} />
                <label for="check" className={styles.checkbtn}>
                  <FontAwesomeIcon icon={faBars} className={styles.icon} />
                </label>
              </li>            
          </div>
        }
      </>
    </div>
  );
};

export default Navbar;


// const [current, setCurrent] = useState("Home");

// useEffect(() => {
//   const handleScroll = () => {
//     if (parseInt(window.pageYOffset) === 848) alert('ESTOY')

//     const homeSection = document.getElementById("Home");
//     const aboutMeSection = document.getElementById("About");
//     const proyectoSection = document.getElementById("Proyecto");
//     const footerSection = document.getElementById("Footer");
//     // console.log(inicioSection, 'INICIO');
//     if (window.pageYOffset >= homeSection.offsetTop && window.pageXOffset < aboutMeSection.offsetTop) {
//       setCurrent("Home");
//     } else if (window.pageYOffset >= aboutMeSection.offsetTop &&
//       window.pageYOffset < proyectoSection.offsetTop) {
//       setCurrent('About');
//     } else if (window.pageYOffset >= proyectoSection.offsetTop &&
//       window.pageYOffset < footerSection.offsetTop) {
//       setCurrent('Proyecto');
//     } else if (window.pageYOffset >= footerSection.offsetTop) {
//       setCurrent('Footer')
//     }
//   };
//   window.addEventListener('scroll', handleScroll)
//   // console.log(window.addEventListener('scroll', handleScroll), 'EVENT');
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);


// ESTE ES EL PRIMER CODIGO PARA SCROLEAR

{/* <li className={styles.navItem}>
            <button className={styles.link} to="About" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} disabled>
              ACERCA DE MI
            </button></li>
          <li className={styles.navItem}>
            <button className={styles.link} to="Proyecto" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu} disabled>
              PROYECTO
            </button></li>
          <li className={styles.navItem}>
            <button className={styles.link} to="Footer" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu} disabled>
              CONTACTO
            </button></li>
          <li className={styles.navItem}>
            <a className={styles.link} href={docs} disabled>CURRICULUM VITAE</a></li> */}