import React from 'react';
import s from './detallePlanes.module.css';
import { useLocation } from 'react-router-dom';
import Modal from '../previewPay/previewPay';
import { motion } from 'framer-motion';
import { DETALLES_DE_PLANES } from '../../templates/caracteristicasPlanes';

export default function DetallePlanes() {
  const location = useLocation().search.substring(1);

  function handleOpenModal() {
    document.getElementById('modal').classList.toggle(s.modalInActive);
  }

  function handleCloseModal() {
    document.getElementById('modal').classList.toggle(s.modalInActive);
  }

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className={s.container}>
      <section className={s.sectionTitulo}>
        <h1>{DETALLES_DE_PLANES[location].titulo}</h1>
        <p>{DETALLES_DE_PLANES[location].description}</p>
      </section>

      <section className={s.sectionDescriptions}>
        <h2>{DETALLES_DE_PLANES[location].subDescription}</h2>
        <div className={s.generalDivDesc}>
          {DETALLES_DE_PLANES[location].sections.map((e) => {
            return (
              <div className={s.divDesc}>
                <span>
                  <h3>{e.tituloSection}</h3>
                  <img src={e.icon} alt="icon" />
                </span>
                <p>{e.descriptionSection}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={s.detallesEspecificos}>
        <h2>Detalles del Plan</h2>
        <p>
          Hoy más que nunca un sitio web es fundamental par cualquier empresa, comercio o profesional. <br></br>
          Empecemos hoy tu Sitio Web y mantené abierto tu negocio las 24 hs. del día, los 365 días del año. <br></br>
          <br></br>
          Obtené tu {DETALLES_DE_PLANES[location].titulo} que incluye: <br></br>
          <br></br>
        </p>

        {DETALLES_DE_PLANES[location].carac.map((e) => {
          return (
            <span>
              - {e.caracteristicas}
              <br />
            </span>
          );
        })}
      </section>
      <section className={s.containerBanner}>
        <div className={s.banner}>
          <p>AHORRA UN 20%</p>
        </div>
        <div className={s.banner2}>
          <p className={s.pLista}>
            Precio de lista <span>${DETALLES_DE_PLANES[location].precioLista}</span>
          </p>
          <p className={s.totalDescuento}>
            Total con descuento
            <br />$
            {Number(DETALLES_DE_PLANES[location].precioLista) -
              ((Number(DETALLES_DE_PLANES[location].precioLista) * 20) / 100).toFixed(3)}
          </p>
        </div>
      </section>

      <div className={s.divSup}>
        <button className={s.btnConsultar} onClick={() => handleOpenModal()}>
          Comprar
        </button>
      </div>

      <div id="modal" className={s.modalInDetalle}>
        <Modal acc={handleCloseModal} />
      </div>
    </motion.div>
  );
}
