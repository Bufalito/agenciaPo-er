import React from 'react';
import n from './nosotros.module.css';
import { Link } from 'react-router-dom';
import icono1 from '../../icons/proyectosRealizados.svg';
import icono2 from '../../icons/clientesSatisfechos.svg';
import icono4 from '../../icons/consultas.svg';
import icono3 from '../../icons/calidadEfectividad.svg';
import { motion } from 'framer-motion';

export default function Nosotros() {
  return (
    <>
      <div>
        <div className={n.containerDiv}>
          <motion.section
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={n.tituloN}>
              La mejor agencia <br></br> para el mejor proyecto
            </h1>
            <p className={n.parrafoN}>
              Conformado por un equipo de <br></br>
              desarrolladores, buscamos la mejor <br></br>
              solucion a tu emprendimiento.
            </p>

            <Link to={'/planes'}>
              <button className={n.button1}>Ver Planes</button>
            </Link>
            <Link to={'/contacto'}>
              <button className={n.button2}>Asesorarme</button>
            </Link>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={n.quienes}
        >
          <h1>¿Quienes somos?</h1>
          <p>
            Un grupo de desarrolladores y diseñadores web, <br></br>
            emprendedores como vos, buscamos el mejor resultado a <br></br>
            tu plan con las mejores soluciones tanto creativas y <br></br>
            eficaces siendo capaces de llevar a término tu proyecto <br></br>
            con su respectivo diseño con total precisión.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={n.honores}
        >
          <img src={icono1} alt="" className={n.icon1} />
          <img src={icono2} alt="" className={n.icon2} />
          <img src={icono4} alt="" className={n.icon4} />
          <img src={icono3} alt="" className={n.icon3} />
        </motion.section>
        <div className={n.center}>
          <Link to={'/contacto'}>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={n.buttonFinal}
            >
              Asesorarme
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
