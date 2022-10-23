import React, { useState, useEffect } from 'react';
import s from './Nav.module.css';
import { Link } from 'react-router-dom';
import hamburguesa from '../../icons/hamburguesa.svg';
import contactoNavMobile from "../../icons/contactoNavMobile.svg";
import nosotrosNavMobile from "../../icons/nosotrosNavMob.svg";
import planesNavMobile from "../../icons/planesNavMob.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function handleOpenClose() {
    document.getElementById('section').classList.toggle(s.close);
  }

  useEffect(() => {
    open === false && document.getElementById('section').classList.toggle(s.close);
  }, [open]);

  return (
    <div className={s.navContainer}>
      <div>
        <Link to={'/'} className={s.Link}>
          {' '}
          <h1 className={s.logo}>POÜER</h1>
        </Link>
      </div>
      <button onClick={() => handleOpenClose()} className={s.btnOpen}>
        <img src={hamburguesa} alt="hamburguesa" />
      </button>
      <div id="section" className={s.sections}>
        <button onClick={() => handleOpenClose()}>X</button>
        <Link to={'/planes'} className={s.Link}>
          {' '}
          <img src={planesNavMobile} alt="planes" />
          <h2>Planes</h2>
        </Link>
        <Link to={'/nosotros'} className={s.Link}>
          {' '}
          <img src={nosotrosNavMobile} alt="nosotros" />
          <h2>Nosotros</h2>
        </Link>
        <Link to={'contacto'} className={s.Link}>
          {' '}
          <img src={contactoNavMobile} alt="contacto" />
          <h2>Contacto</h2>
        </Link>
      </div>
    </div>
  );
}
