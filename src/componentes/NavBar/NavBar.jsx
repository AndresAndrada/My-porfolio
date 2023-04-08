import React from "react";
import { Link } from "react-router-dom";
import styles from '../NavBar/NavBar.module.css'
import img from '../../img/FOTO CV.png'
import docs from '../../doc/CV.pdf';


const Navbar = () => {
  console.log(window.pageYOffset, 'WIND NAV');

  return (
    <div className={styles.conteiner}>
      <div className={styles.left}>
        <li><Link to='/home'><img src={img} className={styles.fotohome} alt="home" /></Link></li>
      </div>
      <div className={styles.right}>
        <li><Link className={styles.link} to='/about'>ACERCA DE MI</Link></li>
        <li><Link className={styles.link} to='/project'>PROYECTO</Link></li>
        {/* <li><Link className={styles.link} to='/contact'>CONTACTO</Link></li> */}
        <li><a className={styles.link} href={docs}>CURRICULUM VITAE</a></li>
      </div>
    </div>
  );
};

export default Navbar;