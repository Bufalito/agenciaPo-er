import React, { useRef, useState } from 'react';
import s from './contacto.module.css';
import x_icon from '../../icons/x.svg';
import emailjs from 'emailjs-com';
import img1 from '../../images/formsimg.svg';
import Popup from 'reactjs-popup';
import { motion } from 'framer-motion';

export default function Contacto() {
  const [isSent, setIsSent] = useState(false);
  const closeModal = () => setIsSent(false);
  const form = useRef();
  const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_API_KEY } = process.env;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, form.current, REACT_APP_API_KEY);
    setIsSent(true);
    form.current.reset();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={s.container}
      >
        <div className={s.imgContainer}>
          <h1>
            {' '}
            Mas cerca de vos, <br></br>
            en todo momento y a toda hora
          </h1>
          <img src={img1} alt="logo" width="600px" />
        </div>
        <div className={s.inputs}>
          <h1>Contános cómo te podemos ayudar y nuestro equipo te va a estar respondiendo</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="name" placeholder="Nombre/Empresa" required />

            <input type="email" name="email" id="email" placeholder="Email" required />

            <input type="text" name="subject" id="subject" placeholder="Asunto" required />

            <textarea name="message" id="message" rows="3" placeholder="Mensaje"></textarea>
          </form>

          <button className={s.boton} onClick={sendEmail} type="submit">
            ENVIAR
          </button>
          <Popup open={isSent} closeOnDocumentClick onClose={closeModal}>
            <div className={s.modal}>
              <a className={s.x_icon} onClick={closeModal}>
                <img src={x_icon} width={20} height={20} />
              </a>
              <div className={s.message_popup}>Su mensaje ha sido enviado enviado con éxito ✅</div>
            </div>
          </Popup>
        </div>
      </motion.div>
    </>
  );
}
