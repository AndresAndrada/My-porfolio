import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from '../Reviews/Reviews.module.css';
import { postReviews } from "../../Redux/actions";

const Reviews = () => {
  const [imput, setImput] = useState({
    comment: '',
    email: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setImput(state => {
      return {
        ...state,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ENTRE');
    return (dispatch(postReviews(imput)), alert('Gracias por su aporte'));
  };

  return (
    <div className={style.reviews}>
      <div className={style.conten}>
        <h4 className={style.texto}>Si deseas dejar un comentario para realizarme una devolución de mis trabajos, para que puede mejorar, puedes hacerlo aqui:</h4>
        <div>
          <form className={style.fomurlario}>
            <textarea name="email" className={style.name} placeholder='Name' onChange={ handleChange } />
            <textarea name="comment" className={style.coment} placeholder="Comentario..." onChange={ handleChange } />
            <input type="submit" className={style.btn} onClick={ handleSubmit }  />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;