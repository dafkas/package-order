const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');

const authController = require('../controllers/authController');

router.get('/', catchErrors(authController.packageOrderPage));

router.get('/success', (req, res) => {
    res.send('Email successfully send!');
})

router.post('/createOrder', catchErrors(authController.createAccount));

module.exports = router;
