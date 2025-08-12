import { useState } from 'react';
import style from './Card.module.css';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';

export const CardProject = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClickgithub = (url) => {
    window.open(url);
  };

  const handleClickDeploy = (url) => {
    window.open(url);
  };

  return (
    <div className={style['flip-container']} onClick={() => setFlipped(!flipped)}>
      <div className={`${style.bonita} ${flipped ? style.flipped : ""}`}>
        <div className={`${style.bonitafront} ${flipped ? style.fadeOut : style.fadeIn}`}>
          <div className={style.image}>
            {/* <img src={ img } alt={ hire } width='800' /> */}
            <img src={item.img} alt={item.img} className={style.image} />
          </div>
          <div className={style.text}>
            <h4 className={style.title}>{item.title}</h4>
            <p>{item.subTitle}</p>
          </div>
          <div className={style.botonIcon}>
            <Link onClick={() => handleClickgithub(item.github)} className={style.tecnology}>
              {item?.tecnology.length > 0 && item?.tecnology.map((icon) => {
                return <div className={style.contentIcon}>{icon}</div>;
              })}
            </Link>
          </div>
          <div className={style.boton}>
            <Link onClick={() => handleClickgithub(item.github)} className={style.link}>
              <FaGithub color="#ce8c40ff" className={style.iconDoc} />
            </Link>
            {item.deploy &&
              <Link onClick={() => handleClickDeploy(item.deploy)} className={style.link}>
                <IoDocumentTextSharp color="#ce8c40ff" className={style.iconDoc} />
              </Link>}
          </div>
        </div>
        <div className={`${style.bonitaback} ${flipped ? style.fadeIn : style.fadeOut}`}>
          <div className={style.text}>
            <h4 className={style.title}>{item.title}</h4>
            <p>{item.subTitle}</p>
          </div>
          <div className={style.description}>
            <p>{item.description}</p>
          </div>
          <div className={style.botonIcon}>
            <Link onClick={() => handleClickgithub(item.github)} className={style.tecnology}>
              {item?.tecnology.length > 0 && item?.tecnology.map((icon) => {
                return <div className={style.contentIcon}>{icon}</div>;
              })}
            </Link>
          </div>
          <div className={style.boton}>
            <Link onClick={() => handleClickgithub(item.github)} className={style.link}>
              <FaGithub color="#ce8c40ff" className={style.iconDoc} />
            </Link>
            {item.deploy &&
              <Link onClick={() => handleClickDeploy(item.deploy)} className={style.link}>
                <IoDocumentTextSharp color="#ce8c40ff" className={style.iconDoc} />
              </Link>}
          </div>
        </div>
      </div>
    </div>
  )
}
