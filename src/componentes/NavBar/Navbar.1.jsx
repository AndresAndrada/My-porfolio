import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {
    return (
        <div className="navbar bg">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <Link clLinkssName="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
}





// const Navbar = (props) => {
//   const [click, setClick] = useState(false)
//   const handleClick = () => {
//     // console.log(window.outerWidth, 'WINDOW')
//     setClick(!click)
//   }
//   const closeMenu = () => setClick(false)
//   return (
//     <div className={styles.conteiner}>
//       {/* <nav> */}
//       <div className={styles.left}>
//         <a href='/home' className='enlace'>
//           <img src={logo} className={styles.fotohome} alt='logo' />
//         </a>
//       </div>
//       <>
//         {props.location.pathname === "/" ? <div className={styles.right}>
//         </div > :
//           <div className={styles.right}>
//             <ul className={!click ? styles.ulLista : styles.ulListaFalse}>
//               {/* <li className={styles.navitem}>
//                 <Link className={styles.link} to='Home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
//               </li> */}
//               <li className={styles.navitem}>
//                 <Link className={styles.link} to='About' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
//               </li>
//               {/* { window.outerWidth < 800 ? '' :  */}
//               <li className={styles.navitem}>
//                 <Link className={styles.link} to='Proyecto' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Proyectos</Link>
//               </li>
//               {/* } */}
//               <li className={styles.navitem}>
//                 <Link className={styles.link} to='Technology' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Tecnologias</Link>
//               </li>
//               <li className={styles.navitem}>
//                 <Link className={styles.link} to='Certificado' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Certificado</Link>
//               </li>
//               <li className={styles.navitem}>
//                 <Link className={styles.link} to='Footer' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contacto</Link>
//               </li>
//               {/* <li>
//               <a className={styles.link} href={docs} disabled>CURRICULUM VITAE</a>
//             </li> */}
//             </ul>
//             <div className={styles.hamburger} onClick={handleClick}>
//               {/* <input type="checkbox" id='checkInput' className={ styles.checkInp } /> */}
//               {click ? (<FaTimes className={styles.checkbtn} size={30} />)
//                 : (<FaBars className={styles.checkbtn} size={30} style={{ color: '#ffffff' }} />)}
//             </div>
//           </div>
//         }
//       </>
//       {/* </nav> */}
//     </div>
//   )
// }
// export default Navbar
// import LOGO from '../../assets/FOTO CV.png'
// // import shoppingCart from '@/assets/icons/shopping-cart.svg'
// import logoutIcon from '../../assets/svg/logout.svg'
// import menuIcon from '../../assets/svg/menu.svg'
// import NavItem from './navigation/navItem'
// import UserDropdown from './dropdown/userDropdown'
// import { Link } from 'react-router-dom'
