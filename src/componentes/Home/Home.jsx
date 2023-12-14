import React from "react";
import { Link } from "react-router-dom";
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
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

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
          <div>
            <Link to='/project' className={style.links}><button id={style.boton} type="button" class="btn btn-secondary"><h6 className={style.textH6}>VER PROYECTOS</h6></button></Link>
            <Link target="_blank" href={docs}><button type="button" class="btn btn-secondary"><h6 className={style.textH6}>CURRICULUM</h6></button></Link>
          </div>
          {/* </Slider> */}
        </div>
      </div>
      <div>
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
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;