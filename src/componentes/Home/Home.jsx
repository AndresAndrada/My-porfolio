import React from "react";
import { Link } from "react-router-dom";
import About from '../About/About'
import Footer from "../Footer/Footer";
import Technology from '../Technology/Technology'
import style from '../../componentes/Home/Home.module.css'

const Home = () => {
    return (
        <>
            <div className={ style.home }>
                <div className={ style.left }>
                    <h2 className={ style.saludo }>Hola!</h2>
                    <h1 className={ style.presentacion }>Mi nombre es <span className={ style.nombre }>Andres Andrada</span></h1>
                    <h3 className={ style.profesion }>Full-Stack Developer</h3>
                </div>
                <div className={ style.right }>
                    <Link to='/project'><button type="button" class="btn btn-secondary">VER PROYECTOS</button></Link>
                </div>
            </div>
            <div>
                <About />
            </div>
            <div>
                <Technology />
            </div>
                <Footer />
        </>
    );
};

export default Home;