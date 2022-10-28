import React from 'react';
import s from './planes.module.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TIPOS_DE_PLANES, PLANES_DATA } from '../../templates/planesItems';

import moreInfo from "../../icons/moreInfo.svg"

export default function Planes() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className={s.sectionPlanes}>
        <h1 className={s.sectionTitulo}>
          Hoy más que nunca un sitio web es fundamental para cualquier empresa, comercio o profesional.
        </h1>
        <p className={s.sectionText}>
          Empeza hoy mismo tu pagina web y mantenete en linea las 24hs <br></br>
          los 365 dias del año de la forma mas segura y rapida, <br></br>
          haciendo de tu proyecto lo mas eficiente con nuestros servicios.
        </p>
        <h1 className={s.sectionSubtitulo}>Te ofrecemos un paquete integral de soluciones.</h1>
      </section>

      <section className={s.sectionIcons}>
        {PLANES_DATA.map((e) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={s.divIcons}
            >
              <img src={e.img} className={s.icons} />
              <h1 className={s.tituloIcons}>{e.titulo}</h1>
              <p className={s.textoIcons}>
                {e.texto}
                {e.explicacion && <div tooltip={e.explicacion}> <img src={moreInfo} alt="mas info" /></div>}
              </p>


            </motion.div>
          );
        })}
      </section>

      <section className={s.sectionCardsPlanes}>
        <h1 className={s.tituloCardsPlanes}>¿Que Pagina web necesitas?</h1>
        <div className={s.generalDivCards}>
          {TIPOS_DE_PLANES.map((e) => {
            return (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className={s.cards}>
                <img src={e.img} className={s.imgCards} />
                <h1 className={s.tituloCards}>{e.titulo}</h1>
                <p className={s.textoCards}>{e.texto}</p>
                <Link to={`/detallesPlanes?${e.id}`} className={s.link}>
                  <button className={s.btnCards}>{e.btn}</button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={s.sectionAsesorarme}
      >
        <h1 className={s.titleAsesorarme}>
          Si no encuentras lo pagina que se adapte a tus <br /> necesidades no dudes en consultarnos
        </h1>
        <hr className={s.hrAsesorarme} />
        <Link to={'/contacto'}>
          <button className={s.btnAsesorarme} l>
            Asesorarme
          </button>
        </Link>
      </motion.section>
    </motion.div>
  );
}
