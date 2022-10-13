import instagram from "../../icons/instagram-icon.svg"
import linkedin from "../../icons/linkedin-icon.svg"
import whatsapp from "../../icons/whatsapp-icon.svg"
import s from './footer.module.css'

export default function Footer(){
    return (
        <div className={s.cointainerM}>
            <div className={s.centerVertically}>
                <h3>Contacto</h3>
                <p>+5492477564712</p>
                <p>poueragency@gmail.com</p>
            </div>
            <div className={s.centerVertically}>
                <hr/>
                <p>© 2022 Todos los derechos reservados | Pouer Agency</p>
            </div>
            <div className={s.centerVertically}>
                    <h3>Seguinos en redes</h3>
                <div className={s.imagesContainer}>
                    <img src={instagram} alt="Instagram logo" />
                    <img src={linkedin} alt="Linkedin logo" />
                    <img src={whatsapp} alt="Whatsapp logo" />
                </div>
            </div>
        </div>
    )
}


