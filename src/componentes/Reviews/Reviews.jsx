import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import style from '../Reviews/Reviews.module.css';
import { postReviews, resertImput } from "../../Redux/actions";
import swal from 'sweetalert';

const Reviews = () => {
  const form = useRef();
  const [imput, setImput] = useState({
    comment: '',
    email: ''
  });
  // console.log(imput, 'IMPUTTT');

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
    form.current.reset()
    if (!imput.email || !imput.comment) return swal("Debe completar los datos requeridos", "Disculpe las molestias");
    dispatch(postReviews(imput), setImput({ email: '', comment: '' }),
      swal("Muchas gracias por su aporte!", "Esteré sevisando su aporte a mí Porfolio", "success"));
  };

  return (
    <div className={style.reviews}>
      <div className={style.conten}>
        <h4 className={style.texto}>Si deseas dejar un comentario para realizarme un feedback de mis trabajos, para que puede mejorar, puedes hacerlo aquí:</h4>
        <div>
          <form ref={form} className={style.fomurlario}>
            <textarea name="email" className={style.name} placeholder='Name' onChange={handleChange} />
            <textarea name="comment" className={style.coment} placeholder="Comentario..." onChange={handleChange} />
            <input type="submit" className={style.btn} onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;