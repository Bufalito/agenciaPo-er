import React from 'react'
import s from "./detallePlanes.module.css"
import { useLocation } from "react-router-dom";

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
            precioLista: "109.580"
        }
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

            <section className={s.sectionPrice}>
                <div className={s.divPrice}>
                    <p className={s.pLista}>Precio de lista <span>${data[location].precioLista}</span></p>
                    <p className={s.pCuotas}>3 cuotas sin interes de <span>${((Number(data[location].precioLista) - ((Number(data[location].precioLista) * 20) / 100)) / 3).toFixed(3)}</span></p>
                </div>
                <div className={s.divPriceDesc}>
                    <div className={s.divDescuento}><p>AHORRA UN 20%</p></div>
                    <p className={s.totalDescuento}>Total con descuento<br />${Number(data[location].precioLista) - ((Number(data[location].precioLista) * 20) / 100).toFixed(3)}</p>
                </div>
            </section>
            <div className={s.divSup}>
                <button className={s.btnConsultar}>Consultar</button>
            </div>
        </>
    )
}