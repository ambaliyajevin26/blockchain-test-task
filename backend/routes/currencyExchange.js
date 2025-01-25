const express = require('express');
const router = express.Router();
const {ROLE} = require("../config/constant");
const AuthMiddleware = require('../middlewares/Authentication');

//------------ Importing Controllers ------------//
const currencyExchangeController = require('../controllers/currencyExchangeController')

router.get('/convert', AuthMiddleware(ROLE.CUSTOMER),currencyExchangeController.fetchExchangeRate);

module.exports = router;