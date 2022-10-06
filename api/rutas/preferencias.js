const { Router } = require("express");
const pago = require("../controllers/preferencias")
const { mercadopago } = require('../mercadoPago')


const aux = {
    site_id: 'MLA',
    items: [
        {
            id: 'economico',
            category_id: 'Desarrollo Web',
            currency_id: 'ARS',
            description: 'economico',
            quantity: 1,
            unit_price: '33.919',
            title: 'Sitio Web Economico'
        }
    ]
}

const router = Router();
router.post("/pay/:id", function (req, res) {
    const preference = pago(req.params.id)
    mercadopago.preferences.create(preference)
        .then(function (response) {
            console.log(response);
            res.json({
                global: response.body.id,
            })
        })
        .catch(function (err) {
            console.log(err);
        })
});

module.exports = router