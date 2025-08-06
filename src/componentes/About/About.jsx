import React, { useState } from "react";
// import { Link } from "react-router-dom";
import style from '../About/About.module.css';
// import docs from '../../doc/CV.pdf';
import image from '../../assets/FOTO CV.png'
import { MdOutlineDescription, MdOutlineBook } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { PiToolbox } from "react-icons/pi";

const About = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [option, setOption] = useState("description");
  const handleOption = (option) => {
    setShowDescription(!showDescription);
    setOption(option);
  }
  return (
    <div className={style.about} id="About">
      <section id="about" className={style.about1}>
        <h2 className={style.title}>Acerca de Mí</h2>
        {!showDescription
          ? <div className={`${style.container}`}>
            {/* <div className={style.aboutContent}> */}
            <div className={style.profilePicContainer}>
              <img src={image} alt="Mi foto" className={`${style.profilePic}  ${style.fadeOut}`} />
            </div>
            <div className={style.bioContainer}>
              <h4 className={style.saludo}>Hola 👋, soy Andrada Andres!</h4>
              <br />
              <div className={style.selector} onClick={() => handleOption("description")}>
                <MdOutlineDescription /> Descripción
              </div>
              <div className={style.selector} onClick={() => handleOption("study")}>
                <MdOutlineBook /> Estudios
              </div>
              <div className={style.selector} onClick={() => handleOption("experience")}>
                <PiToolbox /> Experiencia
              </div>
              <div className={style.selector} onClick={() => handleOption("background")}>
                <VscTools /> Backgroun
              </div>
              {/* <h4 className={style.parrafo}>Soy  un apasionado desarrollador web con experiencia destacada en el desarrollo del lado del front-end y back-end. Mi enfoque se centra en la creación de aplicaciones web innovadoras y eficientes. Poseo habilidades sólidas en las tecnologías clave del ecosistema web, con énfasis en JavaScript, React.js y Node.js</h4>
              <br />
              <h4 className={style.parrafo}>En mi tiempo libre, disfruto aprendiendo nuevas habilidades y creando proyectos interesantes.</h4>
              <h4 className={style.parrafo}>¡No dudes en contactarme si tienes alguna pregunta o proyecto en el que pueda ayudarte!</h4> */}
            </div>
            {/* </div> */}
          </div>
          : <div className={`${style.container2} ${style.fadeIn}`} onClick={() => setShowDescription(false)}>
            {option === "description" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>Descripcion:</h3>
              <p className={style.parrafo}>Me considero una persona <span className={style.bold}>proactiva</span>, <span className={style.bold}>comprometida</span> y con un fuerte sentido de la <span className={style.bold}>responsabilidad</span>. En el ámbito profesional, valoro la <span className={style.bold}>organización</span>, la <span className={style.bold}>comunicación clara</span> y el <span className={style.bold}>trabajo en equipo</span>. Me esfuerzo por mantener una <span className={style.bold}>actitud positiva</span> frente a los desafíos, buscando siempre soluciones prácticas y efectivas.
              </p>
              <p className={style.parrafo}>Tengo la <span className={style.bold}>capacidad de adaptarme</span> rápidamente a nuevos entornos y tecnologías, y asumo cada proyecto con compromiso y enfoque en los resultados. Mi interés por aprender de forma constante me impulsa a mejorar tanto en lo técnico como en lo humano, aportando valor no solo desde mis conocimientos, sino también desde mi actitud y disposición para colaborar. </p>
            </div>}
            {option === "study" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>Estudios:</h3>
              <p className={style.parrafo}>Actualmente estoy cursando la carrera de <span className={style.bold}>Analista en Sistemas en la Institución Cervantes</span>, donde me encuentro en el año y medio de formación. A lo largo de este tiempo, he adquirido <span className={style.bold}>conocimientos fundamentales</span> en análisis, diseño y desarrollo de sistemas, bases de datos relacionales, lógica de programación, estructuras de datos, <span className={style.bold}>arquitectura de computadoras y redes</span>.</p>
              <p className={style.parrafo}>
                Me gradué como Desarrollador Web Full Stack en Henry, donde adquirí sólidos conocimientos en <span className={style.bold}>Desarrollo web Full Stack.</span> Y, como parte de la formación en Henry, desarrollé dos aplicaciones web: una de forma individual y otra grupal. En esta última trabajamos simulando un entorno profesional, aplicando <span className={style.bold}>metodologías ágiles (Scrum)</span>.
              </p>
              <p className={style.parrafo}>
                Además, completé varios cursos en <span className={style.bold}>Platzi</span>, por ejemplo Blazor WebAssembly y .NET, y en <span className={style.bold}>Personal Class</span> donde me especialicé en <span className={style.bold}>metodologías ágiles</span> con enfoque en <span className={style.bold}>Scrum</span>.
              </p>
            </div>}
            {option === "experience" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>Experiencia:</h3>
              <p className={style.parrafo}>
                A lo largo de mi experiencia como desarrollador <span className={style.bold}>Full Stack Web & Blockchain</span>, me he caracterizado por ser una persona proactiva, responsable y comprometida con cada desafío profesional. En <span className={style.bold}>"Personal Class"</span>, tuve la oportunidad de desarrollar una aplicación desde cero, abordando tanto el <span className={style.bold}>frontend</span> como el <span className={style.bold}>backend</span>, lo que fortaleció mi autonomía, mi capacidad para resolver problemas y mi sentido de la responsabilidad técnica. También tuve la posilidad de ser tutor de un curso de programación, lo que potenció mis habilidades de comunicación y trabajo en equipo.
              </p>
              <p className={style.parrafo}>
                Actualmente, formo parte del equipo <span className={style.bold}>Blockchain</span> de <span className={style.bold}>"Dazlabs"</span>, una empresa <span className={style.bold}>Software Factory</span> orientada al desarrollo de soluciones blockchain y open source. Allí, he trabajado en la creación, optimización y conexión de contratos inteligentes con aplicaciones descentralizadas (dApps), participando activamente en equipos multidisciplinarios, bajo metodologías ágiles.
              </p>
            </div>}
            {option === "background" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>Experiencia:</h3>
              <h4 className={style.parrafo}>Soy graduado en Desarrollo Full Stack de Henry y actualmente estoy cursando Analista en Sistemas en la Institución Cervantes. Mis habilidades incluyen el manejo de diversas tecnologías, como <span className={style.bold}>Javascript, TML, CSS, React-Redux, Next.js, Node.js, PostgreSQL, Solidity y Hardhat</span>. He aplicado estas habilidades con éxito en el desarrollo de proyectos tanto en el ámbito front-end como en el back-end.</h4>
              <br />
              <h4 className={style.parrafo}>En la academia educativa <span className={style.bold}>"Personal Class"</span>, donde actualmente ocupo el cargo de desarrollador web Full Stack en la modalidad part-time, he llevado a cabo con éxito la ejecución de un proyecto específico, consistente en el desarrollo de una aplicación web. En este contexto, lideré un curso de programación con una duración de dos meses.</h4>
              <br />
              <h4 className={style.parrafo}> Asimismo, en <span className={style.bold}>"Dazlabs"</span>, una empresa orientada al desarrollo de software opensource, actualmente desempeño el rol de desarrollador web Full Stack y desarrollador Blockchain. He adquirido una experiencia significativa en el diseño e implementación de interfaces de usuario, así como en la creación, testeo y conexión de smart contracts para diversos proyectos, contribuyendo a soluciones innovadoras y funcionales.  </h4>
            </div>}
          </div>
        }
      </section>
    </div >
  )
};

export default About;