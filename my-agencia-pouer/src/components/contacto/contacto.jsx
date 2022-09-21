import React from 'react'
import "./contacto.css"


export default function Contacto(){
    return(
      <>
    <body>
    
    <div class="content">

        <h1 class="logo">Atencion Personalizada</h1>
        <h3 className='subtitle'>Contanos como te podemos ayudar y nuestro equipo te va a estar respondiendo</h3>

        <div class="contact-wrapper">
            <div class="contact-form">
                <h3>Contactanos</h3>
                <form action="">
                    <p>
                        <label>NOMBRE/EMPRESA</label>
                        <input type="text" name="fullname"/>
                    </p>
                    <p>
                        <label>EMAIL</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>TELEFONO</label>
                        <input type="tel" name="phone"/>
                    </p>
                    <p>
                        <label>ASUNTO</label>
                        <input type="text" name="affair"/>
                    </p>
                    <p class="block">
                       <label>MENSAJE</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                           ENVIAR
                        </button>
                    </p>
                    
                </form>
                
            </div>
            <div class="contact-info">
                <h4>CONTACTO</h4>
                <ul>
                     <li><i class="fas fa-phone"></i> (111) 111 111 111</li>   
                    <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                    <li><i class="fas fa-envelope-open-text"></i>agenciapower@gmail.com</li>
                    <li><i class="fas fa-map-marker-alt"></i> Direcciondelaempresa</li>
                </ul>
            </div>
             </div>

    </div>

</body>
    </>
)
}
