const { Router } = require("express");
const pago = require("../controllers/preferencias")
const { mercadopago } = require('../mercadoPago')

const router = Router();
router.post("/pay/:id", function (req, res) {
    const preference = pago(req.params.id)
    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                global: response.body.id,
            })
        })
        .catch(function (err) {
            console.log(err);
        })
});

module.exports = router