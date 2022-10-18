import React, { useEffect, useCallback } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios"

export default function MercadoPago() {
    const FORM_ID = "payment-form"
    const id = useLocation().search.substring(1)

    const obtenerPreference = async function () {
        const res = await axios.post(`/mercadopago/pay/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(res)
        if (res.data.global) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
            script.setAttribute("data-preference-id", res.data.global);
            const form = document.getElementById(FORM_ID);
            form.appendChild(script);
        }
    }

    useEffect(() => {
        obtenerPreference()
    }, [])

    return (
        <>
            <form id={FORM_ID} method="GET" />
        </>
    )
}