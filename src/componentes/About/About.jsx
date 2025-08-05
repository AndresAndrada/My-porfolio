import React, { useState } from "react";
// import { Link } from "react-router-dom";
import style from '../About/About.module.css';
// import docs from '../../doc/CV.pdf';
import image from '../../assets/FOTO CV.png'

const About = () => {
  const [showDescription, setShowDescription] = useState(true);
  return (
    <div className={style.about} id="About" onClick={() => setShowDescription(!showDescription)}>
      <section id="about" className={style.about1}>
        <h2 className={style.title}>Acerca de Mí</h2>
        {showDescription
          ? <div className={`${style.container} ${style.fadeOut}`}>
            {/* <div className={style.aboutContent}> */}
            <div className={style.profilePicContainer}>
              <img src={image} alt="Mi foto" className={style.profilePic} />
            </div>
            <div className={style.bioContainer}>
              <h4 className={style.textH4}>Hola, soy Andrada Andres!</h4>
              <br />
              <h4 className={style.textH4}>Soy  un apasionado desarrollador web con experiencia destacada en el desarrollo del lado del front-end y back-end. Mi enfoque se centra en la creación de aplicaciones web innovadoras y eficientes. Poseo habilidades sólidas en las tecnologías clave del ecosistema web, con énfasis en JavaScript, React.js y Node.js</h4>
              <br />
              <h4 className={style.textH4}>En mi tiempo libre, disfruto aprendiendo nuevas habilidades y creando proyectos interesantes.</h4>
              <h4 className={style.textH4}>¡No dudes en contactarme si tienes alguna pregunta o proyecto en el que pueda ayudarte!</h4>
            </div>
            {/* </div> */}
          </div>
          : <div className={`${style.container} ${style.fadeIn}`}>
            <div className={style.bioContainer}>
              <h4 className={style.textH4}>Soy graduado en Desarrollo Full Stack de Henry y actualmente estoy cursando Analista en Sistemas en la Institución Cervantes. Mis habilidades incluyen el manejo de diversas tecnologías, como <span className={style.bold}>Javascript, TML, CSS, React-Redux, Next.js, Node.js, PostgreSQL, Solidity y Hardhat</span>. He aplicado estas habilidades con éxito en el desarrollo de proyectos tanto en el ámbito front-end como en el back-end.</h4>
              <br />
              <h4 className={style.textH4}>En la academia educativa <span className={style.bold}>"Personal Class"</span>, donde actualmente ocupo el cargo de desarrollador web Full Stack en la modalidad part-time, he llevado a cabo con éxito la ejecución de un proyecto específico, consistente en el desarrollo de una aplicación web. En este contexto, lideré un curso de programación con una duración de dos meses.</h4>
              <br />
              <h4 className={style.textH4}> Asimismo, en <span className={style.bold}>"Dazlabs"</span>, una empresa orientada al desarrollo de software opensource, actualmente desempeño el rol de desarrollador web Full Stack y desarrollador Blockchain. He adquirido una experiencia significativa en el diseño e implementación de interfaces de usuario, así como en la creación, testeo y conexión de smart contracts para diversos proyectos, contribuyendo a soluciones innovadoras y funcionales.  </h4>
            </div>
          </div>
        }
      </section>
    </div >
  )
};

export default About;