const { Router } = require('express');
const router = Router();
const mercadopago = require('./preferencias');
router.use('/mercadopago', mercadopago);
module.exports = router;