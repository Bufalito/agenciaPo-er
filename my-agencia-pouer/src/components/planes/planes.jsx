import React from 'react';
import s from "./planes.module.css";

export default function Planes() {
    return (
        <>
            <section className={s.sectionPlanes}>
                <h1 className={s.sectionTitulo}>Hoy más que nunca un sitio web<br/> es fundamental par cualquier empresa,<br/> comercio o profesional</h1>
                <p className={s.sectionText}>
                    Empecemos hoy tu pagina web y mantené abierto tu negocio las 24 hs. los 365 días del año.<br />
                    Pagálo HOY hasta en 3 cuotas sin interés con  dominio .com.ar, Hosting y Certificado SSL (web segura) por un año totalmente bonificado.
                </p>
            </section>

        </>
    )
}