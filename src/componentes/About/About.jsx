import React from "react";
import { Link } from "react-router-dom";
import style from '../About/About.module.css';
import docs from '../../doc/CV.pdf';

const About = () => {
    return (
        <div className= { style.about } id="About">
            <div className={ style.conteiner }>
                <h2>Acerca de mi</h2>
                <h4>Soy un persona que siempre está en permanente capacitació y estudiando lo que realmente le apaciona. He sufrido algunos cambios en mi vida, los cuales me han llevado a grandes desafios que he ido superando con mucho esfuerzo y sacrificio y gracias a ello, hoy me considero una persona comprometida, responsable, sociable y con gran capacidad de adaptabilidad.
                <br /><br />
                Al terminar mi escolaridad decidí estudiar Profesorado de Educación Física y capacitarme como Preparador Físico de alto rendimiento. Es lo que me apasionaba y quería llegar a cumplir un sueño, llegar a lo más alto de futbol argentino. Lo logré trabajando para Instituto Atlético Central Córdoba de Córdoba, Argentina y Club Deportivo Godoy Cruz Antonio Tomba de Mendoza, Argentina.
                <br /><br />
                Luego de cumplir ese tan ansiado sueño, empecé a familiarizarme con el desarrollo web y descubrí que se pueden lograr cosas maravillosas. Por lo que empecé a estudiar e investigar. Comencé como autodidacta y continue incribiendome en la carrera Analista de Sistemas en el instituto Cervantes (en curso) y en el bootcamp Henry (finalizado). En este último me gradué como Full Stack Developer, desarrollando un proyecto individual y dos proyectos grupales. En ambos utulicé las tecnologias mencionadas en el apartado <Link className={ style.link } to='/home/technology'>tecnologias</Link>. 
                <br /><br />
                Si desea conocer más sobre mí, puedes hacer <a href={ docs } className={ style.link } to='/home/contac'>click aquí</a>
                <br /><br />
                Muchas gracias por su tiempo.
                </h4>

            </div>
        </div>
    )
};

export default About;