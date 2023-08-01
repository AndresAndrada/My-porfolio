import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import foto from '../../img/FOTO CV.png';
import styles from '../Inicio/inicio.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getCount, patchCount } from "../../Redux/actions";

function Inicio() {
    const dispatch = useDispatch();
    const [num, setNum] = useState({
        count: 1
    });
    const count = useSelector(state => state.count);
    // console.log(count[0].id, 'COUNT INICIO');

    const handleClick = (numero) => {
        setNum(num.count + numero);
        // console.log(num, 'SETNUME INICIO');
        dispatch(patchCount(count[0].id, num))
    };

    useEffect(() => {
        dispatch(getCount());
    },[dispatch]);

    return (
        <div className={ styles.inicio }>
            {/* <Navbar /> */}
            <div className={ styles.card }>
                <Link to='/home'><img onClick={() => handleClick(1)} className={ styles.image } src={ foto } alt="Foto carnet"/></Link>
                <Link to='/home' className={ styles.link }><h1 onClick={() => handleClick(1)} className={ styles.title }>Andres Andrada</h1></Link>
                <h3 className={ styles.subtitle }>Full Stack Developer</h3>
            </div>
        </div>
    );
};

export default Inicio;