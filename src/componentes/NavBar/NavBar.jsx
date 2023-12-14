import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import logo from '../../assets/FOTO CV.png';
import styles from '../NavBar/NavBar.module.css';
// import docs from '../../doc/CV.pdf';
import './NavBar.module.css'

function Navbar(props) {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => setClick(false);

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
        </div> :
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
            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
              {click ? (<FaTimes className={styles.checkbtn} size={30} />)
                : (<FaBars className={styles.checkbtn} size={30} style={{ color: '#ffffff' }} />)}
            </div>
          </div>}
      </>
      {/* </nav> */}
    </div>
  );
}

export default Navbar









// import LOGO from '../../assets/FOTO CV.png'
// // import shoppingCart from '@/assets/icons/shopping-cart.svg'
// import logoutIcon from '../../assets/svg/logout.svg'
// import menuIcon from '../../assets/svg/menu.svg'
// import NavItem from './navigation/navItem'
// import UserDropdown from './dropdown/userDropdown'

// export default function Navbar() {
//   return (
//     <div className="navbar bg-red-500">
//       <div className="flex-none">
//         <button className="btn btn-square btn-ghost">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//         </button>
//       </div>
//       <div className="flex-1">
//         <Link clLinkssName="btn btn-ghost text-xl">daisyUI</Link>
//       </div>
//       <div className="flex-none">
//         <button className="btn btn-square btn-ghost">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
//         </button>
//       </div>
//     </div>
//   )
// }









