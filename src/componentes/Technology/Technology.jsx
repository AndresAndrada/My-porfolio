import React from "react";
import { SiSequelize, SiPostgresql, SiExpress } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoHtml5 } from "react-icons/io5";
import style from '../../componentes/Technology/Technology.module.css'

const Technology = () => {
    return (
        <div className={ style.contenedor }>
            <h2>Tecnologías</h2>
            <div className={style.technology}>
                <div className={style.left}>
                    <h3>Front-end</h3>
                    <div className={style.logos}>
                        <div>
                            <IoLogoJavascript className={style.icons} />
                        </div>
                        <div>
                            <IoLogoReact className={style.icons} />
                        </div>
                        <div>
                            <IoLogoHtml5 className={style.icons} />
                        </div>
                        <div>
                            <IoLogoCss3 className={style.icons} />
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <h3>Back-end</h3>
                    <div className={style.logos}>
                        <div>
                            <IoLogoNodejs className={style.icons} />
                        </div>
                        <div>
                            <SiExpress className={style.icons} />
                        </div>
                        <div>
                            <SiSequelize className={style.icons} />
                        </div>
                        <div>
                            <SiPostgresql className={style.icons} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;