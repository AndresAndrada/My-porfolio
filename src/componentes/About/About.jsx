import React from "react";
// import { Link } from "react-router-dom";
import style from '../About/About.module.css';
// import docs from '../../doc/CV.pdf';
import image from '../../img/FOTO CV.png'

const About = () => {
  return (
    <div className={style.about} id="About">
      <section id="about" className={style.about}>
        <h2 className={style.title}>Acerca de Mí</h2>
        <div className={style.container}>
          <div className={style.aboutContent}>
            <div className={style.profilePicContainer}>
              <img src={image} alt="Mi foto" className={style.profilePic} />
            </div>
            <div className={style.bioContainer}>
              <h4 className={style.textH4}>Hola, soy Andrada Andres!</h4>
              <br />
              <h4 className={style.textH4}>Soy un apasionado por la tecnología y me encanta desarrollar aplicaciones web. Tengo experiencia en HTML, CSS, JavaScript y otras tecnologías web.</h4>
              <br />
              <h4 className={style.textH4}>En mi tiempo libre, disfruto aprendiendo nuevas habilidades y creando proyectos interesantes.</h4>
              <h4 className={style.textH4}>¡No dudes en contactarme si tienes alguna pregunta o proyecto en el que pueda ayudarte!</h4>
            </div>
          </div>
        </div>
      </section>
      {/* <h2>Acerca de mi</h2>
      <div className={style.conteiner}>
        <div className={ style.left }>
          <h4>Soy un persona que siempre está en permanente capacitació y estudiando lo que realmente le apaciona. He sufrido algunos cambios en mi vida, los cuales me han llevado a grandes desafios que he ido superando con mucho esfuerzo y sacrificio y gracias a ello, hoy me considero una persona comprometida, responsable, sociable y con gran capacidad de adaptabilidad.</h4>
        </div>
        <div>
          <br /><br />
          <h4 className={style.right}>
            Al terminar mi escolaridad decidí estudiar Profesorado de Educación Física y capacitarme como Preparador Físico de alto rendimiento. Es lo que me apasionaba y quería llegar a cumplir un sueño, llegar a lo más alto de futbol argentino. Lo logré trabajando para Instituto Atlético Central Córdoba de Córdoba, Argentina y Club Deportivo Godoy Cruz Antonio Tomba de Mendoza, Argentina.
            <br /><br />
            Luego de cumplir ese tan ansiado sueño, empecé a familiarizarme con el desarrollo web y descubrí que se pueden lograr cosas maravillosas. Por lo que empecé a estudiar e investigar. Comencé como autodidacta y continue incribiendome en la carrera Analista de Sistemas en el instituto Cervantes (en curso) y en el bootcamp Henry (finalizado). En este último me gradué como Full Stack Developer, desarrollando un proyecto individual y dos proyectos grupales.
            <br /><br />
            Muchas gracias por su tiempo.
          </h4>

        </div>

      </div> */}
    </div >
  )
};

export default About;