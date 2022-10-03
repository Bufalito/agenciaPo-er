import React from 'react'
import s from "./detallePlanes.module.css"
import { useLocation } from "react-router-dom";
import Modal from "../previewPay/previewPay"


export default function DetallePlanes() {
    const location = useLocation().search.substring(1)
    const data = {
        economico: {
            titulo: "Sitio Web Economico",
            description: "El paquete de Diseño Web Económico es recomendable para pequeños emprendedores que quieran tener una presentación digital.",
            subDescription: "Esta compuesta por 1 pagina, con secciones dentro:",
            sections: [
                { tituloSection: "Portada", descriptionSection: "Sección principal del sitio web, destinada como forma de presentación del negocio." },
                { tituloSection: "Contacto", descriptionSection: "Sección para que los clientes conozcan todos los medios de contacto disponibles." },
                { tituloSection: "Servicios", descriptionSection: "Sección destinada a indicar qué servicios se ofrecen, con detalle de los mismos." },
                { tituloSection: "Quienes somos", descriptionSection: "Sección para mostrar información sobre quienes son, qué hacen, por qué lo hacen, etc." }
            ],
            carac: [
                { caracteristicas: "Home page + 3 secciones internas(servicios, contacto, quienes somos)." },
                { caracteristicas: "Slidershow (3 banners principales)." },
                { caracteristicas: "Formularios de contacto." },
                { caracteristicas: "Links a RRSS, WhatsApp y Maps." },
                { caracteristicas: "Chat bot automático que simula el comportamiento humano." }
            ],
            precioLista: "42.399"
        },

        basico: {
            titulo: "Sitio Web Basico",
            description: "El paquete es recomendable para emprendedores y/o PyMEs que busquen digitalizar su negocio, con una opción básica y económica.",
            subDescription: "Está compuesto por 4 paginas:",
            sections: [
                { tituloSection: "Inicio / Home", descriptionSection: "Sección principal del sitio web, destinada como forma de presentación del negocio." },
                { tituloSection: "Servicios / Productos", descriptionSection: "Sección destinada a indicar los servicios/productos que se ofrecen, con detalle de los mismos." },
                { tituloSection: "Quienes Somos", descriptionSection: "Sección para mostrar información sobre vos, tu PyME, o empresa." },
                { tituloSection: "Contacto", descriptionSection: "Sección para que los clientes conozcan todos los medios de contacto disponibles." }
            ],
            carac: [
                { caracteristicas: "Home page + 4 Secciones internas." },
                { caracteristicas: "Slidershow (3 banners principales)." },
                { caracteristicas: "Formularios de contacto." },
                { caracteristicas: "Links a RRSS, WhatsApp y Maps." },
                { caracteristicas: "Chat bot automático que simula el comportamiento humano." }
            ],
            precioLista: "90.275"
        },

        tienda: {
            titulo: "Tienda Online",
            description: "El paquete es recomendable para comercios y emprendedores que quieran tener mayores ventas online, autogestionando sus productos.",
            subDescription: "Está compuesto por 4 paginas:",
            sections: [
                { tituloSection: "Inicio / Home", descriptionSection: "Sección principal del sitio web, destinada como forma de presentación del negocio." },
                { tituloSection: "Servicios / Productos", descriptionSection: "Sección destinada a indicar los servicios/productos que se ofrecen, con detalle de los mismos." },
                { tituloSection: "Quienes Somos", descriptionSection: "Sección para mostrar información sobre vos, tu PyME, o empresa." },
                { tituloSection: "Contacto", descriptionSection: "Sección para que los clientes conozcan todos los medios de contacto disponibles." }
            ],
            carac: [
                { caracteristicas: "Home page + 4 Secciones internas." },
                { caracteristicas: "Slidershow (3 banners principales)." },
                { caracteristicas: " Formularios de contacto." },
                { caracteristicas: " Links a redes sociales y Google Maps." },
                { caracteristicas: "Carga inicial de hasta 75 productos." },
                { caracteristicas: "Integración con métodos de pago." },
                { caracteristicas: "Integración con métodos de envío." },
                { caracteristicas: " Tutorial para carga de productos." },
                { caracteristicas: "Botón de WhatsApp." },
                { caracteristicas: "Chat bot automático." },
            ],
            precioLista: "109.580"
        }
    }

    function handleOpenModal() {
        document.getElementById("modal").classList.toggle(s.modalInActive)
    }

    function handleCloseModal() {
        document.getElementById("modal").classList.toggle(s.modalInActive)
    }


    return (
        <>
            <section className={s.sectionTitulo}>
                <h1>{data[location].titulo}</h1>
                <p>{data[location].description}</p>
            </section>

            <section className={s.sectionDescriptions}>
                <h2>{data[location].subDescription}</h2>
                <div className={s.generalDivDesc}>
                    {data[location].sections.map((e) => {
                        return (
                            <div className={s.divDesc}>
                                <h3>{e.tituloSection}</h3>
                                <p>{e.descriptionSection}</p>
                            </div>
                        )
                    })}
                </div>
            </section>


            <section className={s.detallesEspecificos}>
                <h2>Detalles  del Plan</h2>
                <p>
                    Hoy más que nunca un sitio web es fundamental par cualquier empresa, comercio o profesional. <br></br>
                    Empecemos hoy tu Sitio Web y mantené abierto tu negocio las 24 hs. del día, los 365 días del año. <br></br>
                    <br></br>
                    Obtené tu {data[location].titulo} que incluye: <br></br>
                    <br></br>
                </p>

                {data[location].carac.map((e) => {
                    return (
                        <span>- {e.caracteristicas}<br /></span>
                    )
                })}
            </section>
            <section className={s.containerBanner}>
                <div className={s.banner}>
                    <p>AHORRA UN 20%</p>
                </div>
                <div className={s.banner2}>
                    <p className={s.pLista}>Precio de lista <span>${data[location].precioLista}</span></p>
                    <p className={s.totalDescuento}>Total con descuento<br />${Number(data[location].precioLista) - ((Number(data[location].precioLista) * 20) / 100).toFixed(3)}</p>

                </div>
            </section>

            <div className={s.divSup}>
                <button className={s.btnConsultar} onClick={() => handleOpenModal()}>Comprar</button>
            </div>

            <div id="modal" className={s.modalInDetalle}><Modal acc={handleCloseModal} /></div>
        </>
    )
}