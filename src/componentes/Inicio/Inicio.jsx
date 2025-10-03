import React from "react";
import { Link } from "react-router-dom";
import foto from '../../assets/FOTO CV.png';
import styles from '../Inicio/inicio.module.css'
import { Loader } from "../../core/ui/Loader";

function Inicio() {

    return (
        <React.Suspense fallback={
            <div className="h-screen w-full grid place-content-center">
                <Loader className="h-[4rem] w-[4rem]" />
            </div>
        }>
            <div className={styles.inicio}>
                {/* <Navbar /> */}
                <div className={styles.card}>
                    <Link to='/home'>
                        <img onClick={() => { }} className={styles.image} src={foto} alt="Foto carnet" />
                    </Link>
                    <Link to='/home' className={styles.link}>
                        <h1 onClick={() => { }} className={styles.title}>Andres Andrada</h1>
                    </Link>
                    <h3 className={styles.subtitle}>Full Stack Developer</h3>
                </div>
            </div>
        </React.Suspense>
    );
};

export default Inicio;