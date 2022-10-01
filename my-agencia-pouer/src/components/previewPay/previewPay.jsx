import React, { useState } from "react";
import s from "./previewPay.module.css";
import { useLocation } from "react-router-dom"
import mercadoPago from "../../icons/arcticons_mercado-pago.svg"
import { useEffect } from "react";

export default function PreviewPay() {
    const location = useLocation().search.substring(1)
    const data = {
        economico: {
            titulo: "Sitio Web Economico",
            description: "Hoy más que nunca un sitio web es fundamental par cualquier empresa, comercio o profesional. Empecemos hoy tu Sitio Web Basic de PACK y mantené abierto tu negocio las 24 hs. del día, los 365 días del año.",
            subDescription: "Obtené un sitio web economico y pagalo hasta en 3 cuotas sin interés con dominio.com.ar, Hosting y Certificado SSL (web segura) por un año totalmente bonificado.",
            sections: [
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
            description: "Hoy más que nunca un sitio web es fundamental par cualquier empresa, comercio o profesional. Empecemos hoy tu Sitio Web y mantené abierto tu negocio las 24 hs. los 365 días del año.",
            subDescription: "Obtené una página web y pagala hasta en 3 cuotas sin interés con dominio.com.ar, Hosting y Certificado SSL (web segura) por un año totalmente bonificado.",
            sections: [
                { caracteristicas: "Home page + 4 Secciones internas." },
                { caracteristicas: "Slidershow (3 banners principales)." },
                { caracteristicas: "Formularios de contacto." },
                { caracteristicas: "Links a RRSS, WhatsApp y Maps." },
                { caracteristicas: "Chat bot automático que simula el comportamiento humano." }
            ],
            precioLista: "90.275"
        },

        tienda: {
            titulo: "Tienda online",
            description: "Hoy más que nunca un ecommerce es fundamental para cualquier empresa, comercio o profesional​. Adquirí tu sitio sin comisión por venta, gestión de productos, ventas y clientes, control de stock, múltiples medios de pago y pagalo hasta en 3 cuotas sin interés con  dominio .com.ar, hosting y certificado SSL (web segura) por un año totalmente bonificado.",
            subDescription: "",
            sections: [
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

    const [stateCbox1, setstateCbox1] = useState(false)
    const [stateCbox2, setstateCbox2] = useState(false)

    useEffect(() => {
        console.log("stateCbox1", stateCbox1)
        console.log("stateCbox2", stateCbox2)
    }, [stateCbox1, stateCbox2])

    function handleChack(id) {
        /*  id.target.id === "cbox1" ? setstateCbox1(id.target.checked) : console.log("nada")
 
         id.target.id === "cbox2" ? setstateCbox2(id.target.checked) : console.log("nada") */
        if (id.target.id === "cbox1") {
            setstateCbox1(id.target.checked)
            document.getElementById("desplegable1").classList.toggle(s.active)
        } else {
            setstateCbox2(id.target.checked)
        }
    }

    function handleClick(id) {
        id === "1" ? document.getElementById("cbox1").click() : document.getElementById("cbox2").click()
    }

    return (
        <>
            <section className={s.cuerpoModal}>
                <div className={s.modal}>
                    <p className={s.titleModal}>POÜER</p>
                    <form>
                        <label>Nombre Completo *</label>
                        <input />
                        <label>Correo Electronico *</label>
                        <input />
                        <label>Telefono*</label>
                        <input />
                        <label>Localidad/Ciudad *</label>
                        <input />
                    </form>
                    <article>
                        <section>
                            <div>
                                <p className={s.resaltado}>Producto</p>
                                <p>{data[location].titulo}</p>
                                <p>IVA + Impuesto</p>
                                <p className={s.resaltado}>Total</p>
                            </div>
                            <div>
                                <p className={s.resaltado}>Subtotal</p>
                                <p> ${((data[location].precioLista) - (data[location].precioLista * 20) / 100).toFixed(3)}</p>
                                <p>$2.193</p>
                                <p className={s.resaltado}>${(((data[location].precioLista) - (data[location].precioLista * 20) / 100) + 2.193).toFixed(3)} ARS</p>
                            </div>
                        </section>
                        <button className={s.acordion} onClick={() => handleClick("1")}><input type="checkbox" id="cbox1" onChange={(id) => handleChack(id)} /><p>Transferencia Bancaria</p></button>
                        <div id="desplegable1" className={s.desplegable}>
                            <p>
                                Realizá tu pago directamente en nuestra cuenta bancaria.<br />
                                <br />
                                Titular:  el piketa<br />
                                Cuentas en pesos en Banco Santander: 112-361592/0<br />
                                CBU: 0720112388000036159204<br />
                                CUIT: 20-30344074-8<br />
                                <br />
                                Una vez realizado el pago, te pedimos que nos envíes el comprobante por email a pouer@gmail.com detallando importe exacto, fecha del depósito o transferencia así podremos identificarlo y evitar demoras.<br />
                                <br />
                                Importante: Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta.<br />
                            </p>
                        </div>
                        <button className={s.acordion} onClick={() => handleClick("2")}><input type="checkbox" id="cbox2" onChange={(id) => handleChack(id)} /><p>Paga con el medio de pago que prefieras </p> <img src={mercadoPago} /></button>
                    </article>
                </div>

            </section>
        </>
    )
}