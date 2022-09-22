import React from 'react'
import s from './Nav.module.css'
import { Link } from 'react-router-dom';


export default function navBar() {
  return (
    <div className={s.navContainer} >
        <div>
          <Link to={'/'} className={s.Link} > <h1 className={s.logo}>POÜER</h1></Link>
        </div>
        <div className={s.sections}>
          
          <Link to={'/planes'} className={s.Link} > <h2>Planes</h2></Link>  
          <Link to={'/nosotros'} className={s.Link} > <h2>Nosotros</h2></Link>
          <Link to={'contacto'} className={s.Link} > <h2>Contacto</h2></Link>

         </div>

    </div>
  )
}
