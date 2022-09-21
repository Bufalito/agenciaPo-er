import React from 'react'
import s from "./contacto.module.css"
import instagram from "../../icons/instagram-icon.svg"
import linkedin from "../../icons/linkedin-icon.svg"
import whatsapp from "../../icons/whatsapp-icon.svg"


export default function Contacto() {
    return (
        <>
            <h1 className={s.tituloContacto}>Atencion Personalizada</h1>
            <h3 className={s.subtituloContacto}>Contanos como te podemos ayudar y <br></br> nuestro equipo te va a estar respondiendo</h3>

            <div className={s.contactoDivGeneral}>
                <div className={s.formularioContacto}>

                    <form action="">
                        <p>
                            <input type="text" name="fullname" placeholder='NOMBRE/EMPRESA' />
                        </p>
                        <p>
                            <input type="email" name="email" placeholder='EMAIL' />
                        </p>
                        <p>
                            <input type="tel" name="phone" placeholder='TELEFONO' />
                        </p>
                        <p>
                            <input type="text" name="affair" placeholder='ASUNTO' />
                        </p>
                        <p >
                            <textarea name="message" rows="3" placeholder='ESCRIBA AQUI SU MENSAJE'></textarea>
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

            <button className={s.contactoButton}>
                ENVIAR
            </button>
        </>
    )
}
