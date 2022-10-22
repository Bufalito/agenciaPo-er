import React from 'react' 
import s from './aprobado.module.css';
import imgCheck from '../../images/pagorealizado.svg'

export default function aprobado() {
  return (
    <>
        <div className={s.containerDiv}>
            <h1>
            Su compra ha sido realizada
            </h1>
            <p>
            Pronto nos contactaremos con usted para <br></br> 
            acordar los detalles de su plan adquirido. <br></br>
            Ante cualquier duda o consulta contactarse a: <br></br> 
            <b>agencypouer@gmail.com</b> 
            </p>
            <img src={imgCheck} alt=""  width="400px"/>


        </div>
        </>




  )
}
