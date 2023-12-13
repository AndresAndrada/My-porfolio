import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import logo from '../../img/FOTO CV.png';
import styles from '../NavBar/NavBar.module.css';
// import docs from '../../doc/CV.pdf';


// import './Navbar.css'

const Navbar = (props) => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    // console.log(window.outerWidth, 'WINDOW')
    setClick(!click)
  }

  const closeMenu = () => setClick(false)

  return (
    <div className={styles.conteiner}>
      {/* <nav> */}
      <div className={styles.left}>
        <a href='/home' className='enlace'>
          <img src={logo} className={styles.fotohome} alt='logo' />
        </a>
      </div>
      <>
        {props.location.pathname === "/" ? <div className={styles.right}>
        </div > :
          <div className={styles.right}>
            <ul className={!click ? styles.ulLista : styles.ulListaFalse}>
              {/* <li className={styles.navitem}>
                <Link className={styles.link} to='Home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
              </li> */}
              <li className={styles.navitem}>
                <Link className={styles.link} to='About' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
              </li>
              {/* { window.outerWidth < 800 ? '' :  */}
              <li className={styles.navitem}>
                <Link className={styles.link} to='Proyecto' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Proyectos</Link>
              </li>
              {/* } */}
              <li className={styles.navitem}>
                <Link className={styles.link} to='Technology' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Tecnologias</Link>
              </li>
              <li className={styles.navitem}>
                <Link className={styles.link} to='Certificado' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Certificado</Link>
              </li>
              <li className={styles.navitem}>
                <Link className={styles.link} to='Footer' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contacto</Link>
              </li>
              {/* <li>
              <a className={styles.link} href={docs} disabled>CURRICULUM VITAE</a>
            </li> */}
            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
              {/* <input type="checkbox" id='checkInput' className={ styles.checkInp } /> */}
              {click ? (<FaTimes className={styles.checkbtn} size={30} />)
                : (<FaBars className={styles.checkbtn} size={30} style={{ color: '#ffffff' }} />)}
            </div>
          </div>
        }
      </>
      {/* </nav> */}
    </div>
  )
}

export default Navbar



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { Link } from "react-scroll";
// import styles from '../NavBar/NavBar.module.css';
// import img from '../../img/FOTO CV.png';
// import docs from '../../doc/CV.pdf';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// const Navbar = (props) => {
//   const [scroll, setScroll] = useState(false);
//   console.log(scroll, 'SCROLL');

//   const handleClick = () => setScroll(!scroll);

//   const closeMenu = () => setScroll(false);

//   // const handleHome = () => {
//   // }

//   return (
//     <div className={styles.conteiner} id="Inicio">
//       <div className={styles.left}>
//         <li>
//           <a href="/home">
//             <img src={img} className={styles.fotohome} alt="home" />
//           </a>
//         </li>
//         {/* <li><FontAwesomeIcon icon={ faBars } /></li> */}
//       </div>
//       <>
//         {props.location.pathname === "/" ? <div className={styles.right}>
//         </div > :
//           <div className={styles.right}>
//               <li className={styles.navItem}>
//                 <Link className={styles.link} to="/about" spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>
//                   ACERCA DE MI
//                 </Link>
//               </li>
//               <li className={styles.navItem}>
//                 <Link className={styles.link} to="/project" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
//                   PROYECTO
//                 </Link>
//               </li>
//               {/* <li className={styles.navItem}>
//                 <Link className={styles.link} to="/contact" spy={true} smooth={true} offset={150} duration={500} onClick={closeMenu}>
//                   CONTACTO
//                 </Link>
//               </li> */}
//               <li className={styles.navItem}>
//                 <a className={styles.link} href={docs}>CURRICULUM VITAE</a>
//               </li>
//               <li className={styles.navItem}>
//                 <input type="checkbox" id="check" className={styles.check} />
//                 <label for="check" className={styles.checkbtn}>
//                   <FontAwesomeIcon icon={faBars} className={styles.icon} />
//                 </label>
//               </li>
//           </div>
//         }
//       </>
//     </div>
//   );
// };

// export default Navbar;


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

// <li className={styles.navItem}>
//            <button className={styles.link} to="About" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} disabled>
//            ACERCA DE MI
//          </button></li>
//      <li className={styles.navItem}>
//      <button className={styles.link} to="Proyecto" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu} disabled>
//      PROYECTO
//  </button></li>
// <li className={styles.navItem}>
// <button className={styles.link} to="Footer" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu} disabled>
//   CONTACTO
//      </button></li>
//  <li className={styles.navItem}>
//  <a className={styles.link} href={docs} disabled>CURRICULUM VITAE</a></li> 