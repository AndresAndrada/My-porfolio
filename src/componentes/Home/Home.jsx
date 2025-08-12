import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import About from '../About/About'
import Technology from '../Technology/Technology'
import style from '../../componentes/Home/Home.module.css'
import { IoLocationSharp } from "react-icons/io5";
import bonita from '../../assets/BonitaImg.png';
import hire from '../../assets/hire.png';
import pokemon from '../../assets/pokemon.png';
import docs from '../../doc/Currículum-Vitae Andrada Andres.pdf';
import Reviews from "../Reviews/Reviews";
import Project from '../Project/Project'
import Certificados from "../Certificados/Certificados";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer/Footer";
import { useStoreUi } from "../../store";

const Home = () => {
  const { DarkMode } = useStoreUi(state => state);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const effect = containerRef.current;
    const handleMouseMove = (e) => {
      const rect = effect.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = effect.clientWidth;
      const height = effect.clientHeight;
      const yRotation = ((x - width / 2) / width) * 10;
      const xRotation = ((y - height / 2) / width) * 10;
      const string = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      effect.style.transform = string;
    };
    const handleMouseOut = () => {
      effect.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    };
    effect.addEventListener("mousemove", handleMouseMove);
    effect.addEventListener("mouseout", handleMouseOut);
    return () => {
      effect.removeEventListener("mousemove", handleMouseMove);
      effect.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/andr%C3%A9s-alfredo-andrada-1a83261b5/');
  };

  return (
    <div className={`${style.container} ${DarkMode ? style.dark : ""}`}>
      <div className={style.home} id="Home">
        <div className={style.left} ref={containerRef}>
          {/* <h2 className={ style.saludo }>Hola!</h2> */}
          <h1 className={style.presentation}>
            Hola! Mi nombre es <span className={style.name}>Andres Andrada</span>
          </h1>
          <h3><span className={style.profesion}>Full-Stack Developer</span><span className={style.dev}>{"<></>"}</span></h3>
          <h3 className={style.localizacion}><IoLocationSharp /><span>Córdoba, Argentina</span></h3>
        </div>
        <div className={style.right}>
          {/* <Slider { ...settings }> */}
          <div className={style.title}>
            <div className={style.imageconteiner}>
              <div><img className={style.image} src={bonita} alt={bonita} /></div>
              <div><img className={style.image} src={hire} alt={hire} /></div>
              <div><img className={style.image} src={pokemon} alt={pokemon} /></div>
            </div>
          </div>
          <div className={style.containerBtn}>
            <Link onClick={handleClickLinkedIn} className={style.link}>
              <button id='linkedin' type="button" className={style.boton}>
                {/* <ion-icon name="logo-linkedin" className={style.icons}></ion-icon> */}
                <h6 className={style.textH6}>LinkedIn</h6>
              </button>
            </Link>
            <a target="_blank" href={docs} rel="noreferrer" className={style.link}>
              <button type="button" className={style.boton}>
                <h6 className={style.textH6}>Curriculum</h6>
              </button>
            </a>
          </div>
          {/* </Slider> */}
        </div>
      </div>
      <About />
      <Project />
      <Technology />
      <Certificados />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;