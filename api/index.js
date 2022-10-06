const { Router } = require('express');
const router = Router();
const app = require('./app');

app.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
});

module.exports = router;