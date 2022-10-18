import React, { useRef } from "react";
import s from "./contacto.module.css";
import instagram from "../../icons/instagram-icon.svg";
import linkedin from "../../icons/linkedin-icon.svg";
import whatsapp from "../../icons/whatsapp-icon.svg";
import emailjs from "emailjs-com";
import img1 from '../../images/formsimg.svg'


export default function Contacto() {
  const form = useRef();
  const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_API_KEY } = process.env
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      REACT_APP_SERVICE,
      REACT_APP_TEMPLATE,
      form.current,
      REACT_APP_API_KEY
    );

  };

  return (
    <>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <h1> Mas cerca de vos, <br></br>
            en todo momento y a toda hora</h1>
          <img src={img1} alt="logo" width="600px" />



        </div>
        <div className={s.inputs}>
          <h1>Contános cómo te podemos ayudar y nuestro equipo te va a estar respondiendo</h1>
          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre/Empresa"
              required
            />


            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />


            {/* <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="TELEFONO"
                required
              /> */}


            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Asunto"
              required
            />


            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Mensaje"
            ></textarea>

          </form>



          <button className={s.boton} onClick={sendEmail} type="submit">
            ENVIAR
          </button>
        </div>





      </div>
      {/* <h1 className={s.tituloContacto}>Atencion Personalizada</h1>
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
      </button> */}
    </>


  );
}
