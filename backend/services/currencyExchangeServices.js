/**
* Currency Exchange Service Module
* 
* This module provides services for Exchange currency 
* 
* Functions:
* 
* 1. getCurrencyExchange(currencyExchangePayload)
*    - Retrieves a currency exchange details.
**/
const axios = require("axios");
const { BadRequestError } = require('../utils/errors');
const {CURRENCY_EXCHANGE_API_KEY} = require("../config/key")


exports.getExchangeRate = async (currencyExchangePayload) => {
    try {    
    const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest`, {
        params: {
            apikey: CURRENCY_EXCHANGE_API_KEY,
            currencies: currencyExchangePayload.targetCurrencies,
            base_currency: currencyExchangePayload.baseCurrency
        },
      });

      return response.data.data;
    } catch (error) {
        console.error("Error fetching exchange rate:", error.message);
        throw new BadRequestError("Unable to fetch exchange rate.");
    } 
}
