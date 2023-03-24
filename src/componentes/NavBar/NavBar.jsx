import React from "react";
import { Link } from "react-router-dom";
import styles from '../NavBar/NavBar.module.css'
import img from '../../img/FOTO CV.png'

const Navbar = () => {
    return (
        <div className={ styles.conteiner }>
            <div className={ styles.left }>
                <li><Link to='/home'><img src={ img } className={ styles.fotohome } alt="home" /></Link></li>
            </div>
            <div className={ styles.right }>
                <li><Link className={ styles.link } to='/curriculumvitae'>CURRICULUM VITAE</Link></li>
                <li><Link className={ styles.link } to='/about'>ACERCA DE MI</Link></li>
                <li><Link className={ styles.link } to='/project'>PROYECTO</Link></li>
                <li><Link className={ styles.link } to='/contact'>CONTACTO</Link></li>
            </div>
        </div>

        // <div>
        //     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //         <div className="container-fluid">
        //             <Link to='/home'><img src={ img } className={ styles.fotohome } alt="home" /></Link>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                 <div class="navbar-nav">
        //                     {/* <Link class="nav-link active" aria-current="page" href="#">Home</Link> */}
        //                     <Link class="nav-link" to='/about'>About</Link>
        //                     <Link class="nav-link" to='/project'>Project</Link>
        //                     <Link class="nav-link" to='/curriculumvitae'>Curriculum Vitae</Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
};

export default Navbar;