import { Link } from "react-router-dom";
import foto from '../../assets/FOTO CV.png';
import styles from '../Inicio/inicio.module.css'

function Inicio() {

    return (
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
    );
};

export default Inicio;