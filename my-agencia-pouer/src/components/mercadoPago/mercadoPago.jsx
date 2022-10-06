import React ,{useEffect}from 'react';
import s from "./mercadoPago.module.css";

export default function MercadoPago() {
    return (
        <>

            <form id="form-checkout">
                <div id="form-checkout__cardNumber" className={s.container}></div>
                <div id="form-checkout__expirationDate" className={s.container}></div>
                <div id="form-checkout__securityCode" className={s.container}></div>
                <input type="text" id="form-checkout__cardholderName" />
                <select id="form-checkout__issuer"></select>
                <select id="form-checkout__installments"></select>
                <select id="form-checkout__identificationType"></select>
                <input type="text" id="form-checkout__identificationNumber" />
                <input type="email" id="form-checkout__cardholderEmail" />

                <button type="submit" id="form-checkout__submit">Pagar</button>
                <progress value="0" class="progress-bar">Carregando...</progress>
            </form>
        </>
    )
}