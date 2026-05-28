import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from '../Reviews/Reviews.module.css';
import { postReviews } from "../../Redux/actions";
import swal from 'sweetalert';
import { useStoreUi } from "../../store";

const translations = {
  es: {
    title: "Contactame",
    subtitle: "Si estas interesado en que trabajemos juntos, envíame un mensaje:",
    placeholderName: "Nombre",
    placeholderComment: "Comentario...",
    btnSubmit: "Enviar",
    alertIncompleteTitle: "Debe completar los datos requeridos",
    alertIncompleteText: "Disculpe las molestias",
    alertSuccessTitle: "¡Muchas gracias por su aporte!",
    alertSuccessText: "Estaré revisando su mensaje.",
  },
  en: {
    title: "Contact me",
    subtitle: "If you are interested in working together, send me a message:",
    placeholderName: "Name",
    placeholderComment: "Comment...",
    btnSubmit: "Submit",
    alertIncompleteTitle: "You must fill in the required fields",
    alertIncompleteText: "Sorry for the inconvenience",
    alertSuccessTitle: "Thank you very much for your message!",
    alertSuccessText: "I will be reviewing your message soon.",
  }
};

const Reviews = () => {
  const { Language } = useStoreUi(state => state);
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
    const t = translations[Language] || translations.es;
    form.current.reset()
    if (!imput.email || !imput.comment) return swal(t.alertIncompleteTitle, t.alertIncompleteText);
    dispatch(postReviews(imput), setImput({ email: '', comment: '' }),
      swal(t.alertSuccessTitle, t.alertSuccessText, "success"));
  };

  const t = translations[Language] || translations.es;

  return (
    <div className={styles.conteiner} id="Footer">
      <div className={styles.conten}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.texto}>{t.subtitle}</p>
        </div>
        <div className={styles.card}>
          <form ref={form} className={styles.fomurlario} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>{t.placeholderName}</label>
              <input 
                id="email"
                name="email" 
                value={imput.email}
                className={styles.name} 
                placeholder="Ej: John Doe" 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="comment" className={styles.label}>{t.placeholderComment.replace('...', '')}</label>
              <textarea 
                id="comment"
                name="comment" 
                value={imput.comment}
                className={styles.coment} 
                placeholder="Escribe tu mensaje aquí..." 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.contentBtn}>
              <button type="submit" className={styles.boton}>
                {t.btnSubmit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;