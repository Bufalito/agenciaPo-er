import React from 'react';
import h from './home.module.css';
import img1 from '../../images/home.svg';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className={h.containerHome}>
        <div>
          <h1>
            Nunca fue tan facil <br></br> tener tu pagina<br></br>web!
          </h1>
          <p>
            Diseñamos y desarrollamos la web que <br></br> mejor se adapte a tus necesidades.
          </p>
          <Link to={'/planes'}>
            <button className={h.buttonHome}>Planes</button>
          </Link>
        </div>
        <div className={h.aux}>
          <img src={img1} alt="imagen" width="450px" />
        </div>
      </section>

      <section className={h.section2}>
        <h2> ¿Por que elegirnos?</h2>
        <div className={h.section3}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img src={icon1} alt="" />
            <h3 className={h.titulo}>Compromiso</h3> <br></br>
            <p className={h.parrafo}>
              Somos conscientes de la importancia de cumplir con el desarrollo del trabajo en el tiempo estipulado. Ponemos al
              máximo nuestras capacidades para sacar adelante la tarea encomendada.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img src={icon2} alt="" />
            <h3 className={h.titulo}>
              Llevamos tu negocio a internet <br></br> con cero estres
            </h3>
            <p className={h.parrafo}>
              Nuestros planes de Diseño web se adaptan a todas las necesidades y presupuestos. Tenemos el sitio que tu proyecto
              esta necesitando: Landing pages, Sitios corporativos y Tiendas Online para que puedas vender en línea las 24/7, los
              365 días del año.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img src={icon3} alt="" />
            <h3 className={h.titulo}>Vocacion</h3> <br></br>
            <p className={h.parrafo}>
              Estamos encantados con nuestro trabajo. Dividir para vencer es toda una filosofía de vida y eso es lo que hacemos
              cada día para resolver problemas o construir proyectos.{' '}
            </p>
          </motion.div>
        </div>
      </section>

      <div>
        <section className={h.banner}>Banner</section>
      </div>
    </motion.div>
  );
}
