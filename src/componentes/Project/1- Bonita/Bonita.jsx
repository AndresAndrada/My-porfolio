import React from "react";
import ReactPlayer from 'react-player';
import bonita from '../../../video/bonita.mp4'
import style from './Bonita.module.css'


const Bonita = () => {
    return (
        <div className={ style.bonita }>
            <h2>Bonita Devoto</h2>
            <h4>E-commerce</h4>
            <ReactPlayer
                url={ bonita }
                width='400'
                controls
                playing
            />
        </div>
    )
}

export default Bonita; 