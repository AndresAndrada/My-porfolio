import React from "react";
import { Link } from "react-router-dom";
import About from '../About/About'
import Technology from '../Technology/Technology'
import style from '../../componentes/Home/Home.module.css'
import { IoLocationSharp } from "react-icons/io5";
import bonita from '../../img/bonita.png';
import hire from '../../img/hire.png';
import pokemon from '../../img/pokemon.png';
import docs from '../../doc/CV.pdf';
import Reviews from "../Reviews/Reviews";
import Project from '../Project/Project'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <div className={style.home} id="Home">
        <div className={style.left}>
          {/* <h2 className={ style.saludo }>Hola!</h2> */}
          <h1 className={style.presentacion}>
            Hola! Mi nombre es
            <span className={style.nombre}> Andres Andrada</span></h1>
          <h3><IoLocationSharp /><span>Córdoba, Argentina</span></h3>
          <h3><span className={style.profesion}>Full-Stack Developer</span></h3>
        </div>
        <div className={style.right}>
          {/* <Slider { ...settings }> */}
          <div className={style.title}>
            <div className={style.imageconteiner}>
              <div><img className={style.image} src={bonita} alt={bonita} /></div>
              <div><img className={style.image} src={hire} alt={bonita} /></div>
              <div><img className={style.image} src={pokemon} alt={bonita} /></div>
            </div>
          </div>
          <div>
            <Link to='/project' className={style.links}><button type="button" class="btn btn-secondary">VER PROYECTOS</button></Link>
            <a href={ docs }><button type="button" class="btn btn-secondary">CURRICULUM</button></a>

          </div>
          {/* </Slider> */}
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Technology />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Reviews />
      </div>
    </>
  );
};

export default Home;