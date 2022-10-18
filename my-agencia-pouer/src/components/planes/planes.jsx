import React from 'react';
import s from "./planes.module.css";
import arrowsLine from "../../icons/arrows-line.svg";
import blog from "../../icons/blog.svg";
import cloud from "../../icons/cloud.svg";
import email from "../../icons/email.svg";
import lock from "../../icons/lock.svg";
import pen from "../../icons/pen-fountain.svg";
import watch from "../../icons/watch-later.svg";
import world from "../../icons/world-line.svg";

import economica from "../../icons/Devices-bro2.svg"
import basico from "../../icons/Hand-coding-bro2.svg"
import tienda from "../../icons/Website-Creator-bro2.svg"

import { Link } from "react-router-dom";


export default function Planes() {

    const data = [{ img: world, titulo: "Dominio", texto: "Te ayudamos a elegir y comprar el dominio que mejor se adapta a tu proyecto." },
    { img: cloud, titulo: "Hosting", texto: "Creamos y configuramos los correos corporativos que necesites, por ejemplo: hola@tunegocio.com.ar" },
    { img: lock, titulo: "SSL", texto: "Certificamos tu sitio como seguro para que tus clientes naveguen tranquilos ¡Gratis por un año!" },
    { img: pen, titulo: "Contenido de calidad", texto: "Nuestro equipo de profesionales se encargará de todo, imágenes, videos, fotos, mapas y formularios." },
    { img: arrowsLine, titulo: "Modificaciones", texto: "Cambiar una imagen o texto, agregar o quitar una pagina luego de la entrega. No hay problema, lo pedís y listo." },
    { img: watch, titulo: "Optimizacion", texto: "Nuestras páginas cumplen con las buenas practicas favoreciendo una mejor indexación en las búsquedas." },
    { img: email, titulo: "Correos", texto: "Tu negocio se destacará con una ficha en los resultados cuando te busquen en Google o Google Maps." },
    { img: blog, titulo: "Blog", texto: "Llevá adelante el blog de tu sitio y posicionate como todo un experto. Te capacitamos con tutoriales y soporte." }]

    const planes = [{ img: economica, titulo: "Economica", texto: "Diseño web económico para emprendedores y PyMEs", btn: "Ver mas", id: "economico" },
    { img: basico, titulo: "Basica", texto: "Diseño web para profesionales y para empresas", btn: "Ver mas", id: "basico" },
    { img: tienda, titulo: "Tienda online", texto: "Diseño web ecommerce: Vendé online las 24hs del día", btn: "Ver mas", id: "tienda" }]

    return (
        <>
            <section className={s.sectionPlanes}>
                <h1 className={s.sectionTitulo}>Hoy más que nunca un sitio web es fundamental para cualquier empresa, comercio o profesional</h1>
                <p className={s.sectionText}>
                Empeza hoy mismo tu pagina web y mantenete en linea las 24hs <br></br> los 365 dias del año de la forma mas
                segura y rapida, <br></br>haciendo de tu proyecto lo mas eficiente con nuestros servicios.
                </p>
                <h1 className={s.sectionSubtitulo}>Te ofrecemos un paquete integral de soluciones</h1>
            </section>

            <section className={s.sectionIcons}>
                {data.map((e) => {
                    return (
                        <div className={s.divIcons}>
                            <img src={e.img} className={s.icons} />
                            <h1 className={s.tituloIcons}>{e.titulo}</h1>
                            <p className={s.textoIcons}>{e.texto}</p>
                        </div>
                    )
                })}
            </section>

            <section className={s.sectionCardsPlanes}>
                <h1 className={s.tituloCardsPlanes}>¿Que Pagina web necesitas?</h1>
                <div className={s.generalDivCards}>
                    {planes.map((e) => {
                        return (
                            <div className={s.cards}>
                                <img src={e.img} className={s.imgCards} />
                                <h1 className={s.tituloCards}>{e.titulo}</h1>
                                <p className={s.textoCards}>{e.texto}</p>
                                <Link to={`/detallesPlanes?${e.id}`} className={s.link}><button className={s.btnCards}>{e.btn}</button></Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className={s.sectionAsesorarme}>
                <h1 className={s.titleAsesorarme}>Si no encuentras lo pagina que se adapte a tus <br /> necesidades no dudes en consultarnos</h1>
                <hr className={s.hrAsesorarme} />
                <Link to={'/contacto'}>
                <button className={s.btnAsesorarme} l >Asesorarme</button>
                </Link>
            </section>
        </>
    )
}