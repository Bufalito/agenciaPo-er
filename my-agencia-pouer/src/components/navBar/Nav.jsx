import React from 'react'
import s from './Nav.module.css'

export default function navBar() {
  return (
    <div className={s.navContainer} >
        <div>
           <h1 className={s.logo}>POÜER</h1>
        </div>
        <div className={s.sections}>
            <h2>Planes</h2>
            <h2>Nosotros</h2>
            <h2>Contacto</h2>
         </div>

    </div>
  )
}
