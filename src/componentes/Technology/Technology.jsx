import React from "react";
import { SiSequelize, SiPostgresql, SiExpress } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoHtml5 } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import style from '../../componentes/Technology/Technology.module.css'

const Technology = () => {
    return (
        <>
            <div className={style.contenedor}>
                <h2 id="Technology">Tecnologías</h2>
                <div className={style.technology}>
                    {/* <div className={style.left}> */}
                    {/* <h3>Front-end</h3> */}
                    {/* <div className={style.conteinerlogo}> */}
                    <div className={style.logos}>
                        <div className={style.simbolos}>
                            <h5>JavaScript</h5>
                            <IoLogoJavascript className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>TypeScript</h5>
                            <SiTypescript className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>React</h5>
                            <IoLogoReact className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>HTML5</h5>
                            <IoLogoHtml5 className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>CSS</h5>
                            <IoLogoCss3 className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>Tailwind</h5>
                            <SiTailwindcss className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>Next</h5>
                            <TbBrandNextjs className={style.icons} />
                        </div>
                    </div>
                    <div className={style.logos}>
                        <div className={style.simbolos}>
                            <h5>Node.JS</h5>
                            <IoLogoNodejs className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>Express.JS</h5>
                            <SiExpress className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>Sequelize</h5>
                            <SiSequelize className={style.icons} />
                        </div>
                        <div className={style.simbolos}>
                            <h5>PostgreSQL</h5>
                            <SiPostgresql className={style.icons} />
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Technology;