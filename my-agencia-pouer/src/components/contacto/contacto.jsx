import React, { useRef } from "react";
import s from "./contacto.module.css";
import instagram from "../../icons/instagram-icon.svg";
import linkedin from "../../icons/linkedin-icon.svg";
import whatsapp from "../../icons/whatsapp-icon.svg";
import emailjs from "emailjs-com";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_iyrkua9",
      "template_kxxb1cs",
      form.current,
      "oi2W1zY6VQa6cJMVc"
    );

  };

  return (
    <>
      <h1 className={s.tituloContacto}>Atencion Personalizada</h1>
      <h3 className={s.subtituloContacto}>
        Contanos como te podemos ayudar y <br></br> nuestro equipo te va a estar
        respondiendo
      </h3>

      <div className={s.contactoDivGeneral}>
        <div className={s.formularioContacto}>
          <form ref={form} onSubmit={sendEmail}>
            <p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="NOMBRE/EMPRESA"
                required
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                required
              />
            </p>
            <p>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="TELEFONO"
                required
              />
            </p>
            <p>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="ASUNTO"
                required
              />
            </p>
            <p>
              <textarea
                name="message"
                id="message"
                rows="3"
                placeholder="ESCRIBA AQUI SU MENSAJE"
              ></textarea>
            </p>
          </form>
        </div>
        <div className={s.contactoNumero}>
          <h4>CONTACTO</h4>
          <ul>
            <li> agenciapower@gmail.com</li>
            <li> +54 11 4003-6263 /</li>
            <li> +54 11 2722-2934</li>
            <li> CABA, Prov. de Buenos Aires, Argentina</li>
            <img src={instagram} alt="instagram icono" />
            <img src={linkedin} alt="linkedin icono" />
            <img src={whatsapp} alt="whatsapp icono" />
          </ul>
        </div>
      </div>

      <button onClick={sendEmail} type="submit" className={s.contactoButton}>
        ENVIAR
      </button>
    </>
  );
}
