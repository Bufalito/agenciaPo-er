import React from "react";
import s from "./previewPay.module.css";

export default function PreviewPay() {

    const data = {
        economico: {
            titulo: "Sitio Web Economico | 1° cuota",
            description: "Hoy más que nunca un sitio web es fundamental par cualquier empresa, comercio o profesional. Empecemos hoy tu Sitio Web Basic de PACK y mantené abierto tu negocio las 24 hs. del día, los 365 días del año.",
            subDescription: "Obtené un sitio web economico y pagalo hasta en 3 cuotas sin interés con dominio.com.ar, Hosting y Certificado SSL (web segura) por un año totalmente bonificado.",
            sections: [
                { caracteristicas: "Home page + 1 sección de contacto." },
                { caracteristicas: "Slidershow (3 banners principales)." },
                { caracteristicas: "Formularios de contacto." },
                { caracteristicas: "Links a RRSS, WhatsApp y Maps." },
                { caracteristicas: "Chat bot automático que simula el comportamiento humano." }
            ],
            precioLista: "42.399"
        },

        basico: {
            titulo: "Sitio Web Basico | 1° cuota",
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
            titulo: "Tienda online | 1° cuota",
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
    return (
        <>
            <h1>ESTO ES PREVIEW PAY</h1>
        </>
    )
}