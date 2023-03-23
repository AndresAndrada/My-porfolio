import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div>
            <h2>Acerca de mi</h2>
            <h4>Quiero comentarles que soy un persona que siempre esta en permanente capacitacion y estudiando lo que realmente me apaciona. Puedo agragar de que eh sufrido algunos cambios en mi vida, los me han llevado a grandes desafios que pude superarlos con mucho esfuerzo y sacrificio y gracias a ello eh logrado ser lo que soy ahora, una persona comprometida, responsable, sociable y con gran capacidad de adaptabilidad.
            <br /><br />
            Al terminar mi escolaridad decidí estudiar Profesorado de Educación Física y capacitarme como Preparador Físico de alto rendimiento. Es lo que me a pasionaba y quería llegar a cumplir un sueño, que era llegar a lo más alto de futbol argentino y lo logré trabajando para Instituto Atlético Central Córdoba de Córdoba, Argentina y Club Deportivo Godoy Cruz Antonio Tomba de Mendoza, Argentina.
            <br /><br />
            Luego de cumplir ese tan anciado sueño, empecé a familiarizarme con el desarrollo web y descubrí que se pueden lograr cosas maravillosas. Por lo que empecé a estudiar e investigar. Comencé como autodidacta y continue incribiendome en la carrera Analista de Sistemas en el instituto Cervantes (en curso) y en el bootcamp Henry (finalizado). En este último me gradue como Full Stack Developer, desarrollando un proyecto individual y dos proyectos grupales. En ambos utulicé las tecnologias mencionadas en el apartado <Link to='/technology'>tecnologias</Link>. 
            <br /><br />
            Si desea conocer más sobre mí, puedes hacer <Link to='/contac'>click aquí</Link>
            <br /><br />
            Muchas gracias por su tiempo.
            
            </h4>
        </div>
    )
};

export default About;