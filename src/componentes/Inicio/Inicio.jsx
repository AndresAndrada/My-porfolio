import React from "react";
import foto from '../../assets/FOTO CV.png';
import styles from '../Inicio/inicio.module.css';
import { Loader } from "../../core/ui/Loader";
import { useStoreUi } from "../../store";

function Inicio() {
    const { SetEntered } = useStoreUi(state => state);
    const enterPortfolio = () => SetEntered(true);

    return (
        <React.Suspense fallback={
            <div className="h-screen w-full grid place-content-center">
                <Loader className="h-[4rem] w-[4rem]" />
            </div>
        }>
            <main className={styles.inicio}>
                <div className={styles.overlay} aria-hidden="true" />

                <div className={styles.card}>
                    <button
                        onClick={enterPortfolio}
                        className={styles.avatarLink}
                        aria-label="Ir al portfolio"
                        title="Ir al portfolio"
                    >
                        <span className={styles.avatarRing} aria-hidden="true" />
                        <img className={styles.image} src={foto} alt="Foto de Andres Andrada" />
                    </button>

                    <h1 className={styles.title}>Andres Andrada</h1>
                    <h2 className={styles.subtitle}>Full Stack Developer</h2>

                    <button onClick={enterPortfolio} className={styles.cta}>
                        <span className={styles.ctaLabel}>Entrar al Portfolio</span>
                        <span className={styles.ctaArrow} aria-hidden="true">→</span>
                    </button>
                </div>
            </main>
        </React.Suspense>
    );
};

export default Inicio;