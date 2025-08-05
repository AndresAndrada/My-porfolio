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
              <h4 className={style.parrafo}>Hola 👋, soy Andrada Andres!</h4>
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
              <h4 className={style.parrafo}>Soy graduado en Desarrollo Full Stack de Henry y actualmente estoy cursando Analista en Sistemas en la Institución Cervantes. Mis habilidades incluyen el manejo de diversas tecnologías, como <span className={style.bold}>Javascript, TML, CSS, React-Redux, Next.js, Node.js, PostgreSQL, Solidity y Hardhat</span>. He aplicado estas habilidades con éxito en el desarrollo de proyectos tanto en el ámbito front-end como en el back-end.</h4>
              <br />
              <h4 className={style.parrafo}>En la academia educativa <span className={style.bold}>"Personal Class"</span>, donde actualmente ocupo el cargo de desarrollador web Full Stack en la modalidad part-time, he llevado a cabo con éxito la ejecución de un proyecto específico, consistente en el desarrollo de una aplicación web. En este contexto, lideré un curso de programación con una duración de dos meses.</h4>
              <br />
              <h4 className={style.parrafo}> Asimismo, en <span className={style.bold}>"Dazlabs"</span>, una empresa orientada al desarrollo de software opensource, actualmente desempeño el rol de desarrollador web Full Stack y desarrollador Blockchain. He adquirido una experiencia significativa en el diseño e implementación de interfaces de usuario, así como en la creación, testeo y conexión de smart contracts para diversos proyectos, contribuyendo a soluciones innovadoras y funcionales.  </h4>
            </div>}
            {option === "study" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>Estudios:</h3>
              <p className={style.parrafo}>
                Soy graduado en Desarrollo Full Stack de Henry en donde adquirí conocimientos sólidos sobre <span className={style.bold}>desarrollo wed full stack.</span> y actualmente estoy cursando Analista en Sistemas en la Institución Cervantes.
              </p>
              <br />
              <p className={style.parrafo}>
                Para finalizar la cursada, debí desarrollar dos aplicación web (mis primeras dos apps). Una individual y otra grupla. Esta última simulando un contexto de trabajo real utiluzando motodologías <span className={style.bold}>Agiles (Scrum).</span> Mis habilidades incluyen el manejo de diversas tecnologías, como <span className={style.bold}>Javascript, TML, CSS, React-Redux, Next.js, Node.js, PostgreSQL, Solidity y Hardhat</span>. He aplicado estas habilidades con éxito en el desarrollo de proyectos tanto en el ámbito front-end como en el back-end.
              </p>
              <p className={style.parrafo}>En la academia educativa <span className={style.bold}>"Personal Class"</span>, donde actualmente ocupo el cargo de desarrollador web Full Stack en la modalidad part-time, he llevado a cabo con éxito la ejecución de un proyecto específico, consistente en el desarrollo de una aplicación web. En este contexto, lideré un curso de programación con una duración de dos meses.</p>
              <br />
              <p className={style.parrafo}> Asimismo, en <span className={style.bold}>"Dazlabs"</span>, una empresa orientada al desarrollo de software opensource, actualmente desempeño el rol de desarrollador web Full Stack y desarrollador Blockchain. He adquirido una experiencia significativa en el diseño e implementación de interfaces de usuario, así como en la creación, testeo y conexión de smart contracts para diversos proyectos, contribuyendo a soluciones innovadoras y funcionales.  </p>
            </div>}
            {option === "experience" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>Experiencia:</h3>
              <h4 className={style.parrafo}>Soy graduado en Desarrollo Full Stack de Henry y actualmente estoy cursando Analista en Sistemas en la Institución Cervantes. Mis habilidades incluyen el manejo de diversas tecnologías, como <span className={style.bold}>Javascript, TML, CSS, React-Redux, Next.js, Node.js, PostgreSQL, Solidity y Hardhat</span>. He aplicado estas habilidades con éxito en el desarrollo de proyectos tanto en el ámbito front-end como en el back-end.</h4>
              <br />
              <h4 className={style.parrafo}>En la academia educativa <span className={style.bold}>"Personal Class"</span>, donde actualmente ocupo el cargo de desarrollador web Full Stack en la modalidad part-time, he llevado a cabo con éxito la ejecución de un proyecto específico, consistente en el desarrollo de una aplicación web. En este contexto, lideré un curso de programación con una duración de dos meses.</h4>
              <br />
              <h4 className={style.parrafo}> Asimismo, en <span className={style.bold}>"Dazlabs"</span>, una empresa orientada al desarrollo de software opensource, actualmente desempeño el rol de desarrollador web Full Stack y desarrollador Blockchain. He adquirido una experiencia significativa en el diseño e implementación de interfaces de usuario, así como en la creación, testeo y conexión de smart contracts para diversos proyectos, contribuyendo a soluciones innovadoras y funcionales.  </h4>
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