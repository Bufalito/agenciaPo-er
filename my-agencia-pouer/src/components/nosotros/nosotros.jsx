import React from 'react';
import n from "./nosotros.module.css";
import { Link } from 'react-router-dom';
import icono1 from '../../images/icono1.svg';
import icono2 from '../../images/icono2.svg';
import icono4 from '../../images/icono3.svg';
import icono3 from '../../images/icono4.svg';




export default function Nosotros(){
    return(
        <>
        <div className={n.containerDiv}>
            <section >
           <h1 className={n.tituloN}>
           La mejor agencia <br></br> para el mejor proyecto
           </h1>
           <p className={n.parrafoN}>
           Conformado por un equipo de <br></br>
           desarrolladores, buscamos la mejor <br></br>
            solucion a tu emprendimiento.
           </p>
          
          <Link to={'/planes'} ><button className={n.button1} >Ver Planes</button>
                                            </Link>
          <Link to={'/contacto'}><button  className={n.button2} >Asesorarme</button></Link>
           


            </section>

         <section className={n.quienes}>
                <h1>¿Quienes somos?</h1>   
                <p>Un grupo de desarrolladores y diseñadores web, <br></br>
                   emprendedores como vos, buscamos el mejor resultado a <br></br>
                   tu plan con las mejores soluciones tanto creativas y <br></br>
                   eficaces siendo capaces de llevar a término tu proyecto <br></br>
                   con su respectivo diseño con total precisión.</p>

        </section>

        <section className={n.honores}>
            <div className={n.boxicon}>
           <img src={icono1} alt="" />
           +10 proyectos realizados
            </div>
            <div className={n.boxicon} >
            <img src={icono2} alt="" />
            +20 clientes sastifechos
            </div>
            <div className={n.boxicon}  >
            <img src={icono3} alt="" />
            +50 consultas
            </div>
            <div className={n.boxicon}  >
            <img src={icono4} alt="" />
            Calidad & Efectividad
            </div>

        
        
        </section>   
        <div className={n.center}>
            <Link to={'/contacto'} >
                <button className={n.buttonFinal}>Asesorarme</button>
            </Link>
        </div>
        </div>
        </>
    )
}