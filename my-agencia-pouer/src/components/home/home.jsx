import React from "react"
import h from "./home.module.css"
import img1 from '../../images/home.svg'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <>
            <section className={h.containerHome}>
                <div>
                    <h1>
                        Nunca fue tan facil <br></br> tener tu pagina<br></br>web!
                    </h1>
                    <p>
                    Diseñamos y desarrollamos la web que <br></br> mejor se adapte a tus necesidades.
                    </p>
                    <Link to={'/planes'}><button className={h.buttonHome} >Planes</button></Link> 

                </div>
                <div>
                    <img src={img1} alt="imagen" width="500px" />
                </div>


            </section>

            <section className={h.section2}>
                    <h1>Nuestros productos</h1>
                    <h2> ¿Por que elegirnos?</h2>
                   <div className={h.section3}>
                    <div>
                        <img src={icon1} alt="" />
                        <h3 className={h.titulo}>Compromiso</h3>
                        <p className={h.parrafo}>Somos conscientes de la importancia de <br></br> 
                        cumplir con el desarrollo del trabajo en el <br></br> 
                        tiempo estipulado. Ponemos al máximo <br></br> 
                        nuestras capacidades para sacar adelante <br></br>
                        la tarea encomendada.</p>

                    </div>
                    <div>
                         <img src={icon2} alt="" />
                        <h3 className={h.titulo}>Llevamos tu negocio a internet con cero estres</h3>
                        <p className={h.parrafo} >Nuestros planes de Diseño web se adaptan a todas las <br></br>
                            necesidades y presupuestos. <br></br>
                           Tenemos el sitio que tu proyecto esta necesitando: <br></br>
                           Landing pages, Sitios corporativos y Tiendas Online para <br></br>
                           que puedas vender en línea las 24/7, los 365 días del año.</p>
                        </div>
                    <div>
                    <img src={icon3} alt="" />
                        <h3 className={h.titulo} >Vocacion</h3>
                        <p className={h.parrafo} >Estamos encantados con nuestro trabajo.  <br></br>
                            Dividir para vencer es toda una filosofía de vida y  <br></br>
                             eso es lo que hacemos cada día para resolver  <br></br>
                             problemas o construir proyectos.  <br></br> </p>
                    </div>
                    </div>


            </section>


            <div>
                <section className={h.banner}>
                    Banner
                </section>



            </div>





        </>
    )
}