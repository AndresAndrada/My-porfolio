import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from '../Reviews/Reviews.module.css';
import { postReviews } from "../../Redux/actions";
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
      swal("Muchas gracias por su aporte!", "Esteré revisando su aporte a mí Porfolio", "success"));
  };

  return (
    <div className={styles.reviews} id="Footer">
      <div className={styles.conten}>
        <h1>Contactame</h1>
        <h4 className={styles.texto}>Si deseas dejar un comentario para realizarme un feedback de mis trabajos, para que puede mejorar, puedes hacerlo aquí:</h4>
        <div className={styles.card}>
          <form ref={form} className={styles.fomurlario}>
            <textarea name="email" className={styles.name} placeholder='Name' onChange={handleChange} />
            <textarea name="comment" className={styles.coment} placeholder="Comentario..." onChange={handleChange} />
            <div className={styles.contentBtn}>
              <input type="submit" className={styles.boton} onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;