import React from "react";
// import { Link } from "react-router-dom";
import About from '../About/About'
import Technology from '../Technology/Technology'
import style from '../../componentes/Home/Home.module.css'
import { IoLocationSharp } from "react-icons/io5";
import bonita from '../../assets/BonitaImg.png';
import hire from '../../assets/hire.png';
import pokemon from '../../assets/pokemon.png';
import docs from '../../doc/CV.pdf';
import Reviews from "../Reviews/Reviews";
import Project from '../Project/Project'
import Certificados from "../Certificados/Certificados";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home} id="Home">
        <div className={style.left}>
          {/* <h2 className={ style.saludo }>Hola!</h2> */}
          <h1 className={style.presentacion}>
            Hola! Mi nombre es
            <span className={style.nombre}> Andres Andrada</span>
          </h1>
          <h3 className={style.localizacion}><IoLocationSharp /><span>Córdoba, Argentina</span></h3>
          <h3><span className={style.profesion}>Full-Stack Developer</span></h3>
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
            <Link to='https://www.linkedin.com/in/andres-alfredo-andrada/' name='project' rel="noreferrer"><button id={style.boton} type="button" class="btn btn-secondary"><h6 className={style.textH6}><ion-icon name="logo-linkedin" className={style.linkedin}></ion-icon> LinkedIn</h6></button></Link>
            <a target="_blank" href={docs} rel="noreferrer"><button type="button" class="btn btn-secondary"><h6 className={style.textH6}>Curriculum</h6></button></a>
          </div>
          {/* </Slider> */}
        </div>
      </div>
      <div className={style.about}>
        <About />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Technology />
      </div>
      <div>
        <Certificados />
      </div>
      <div className={style.reviews}>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;