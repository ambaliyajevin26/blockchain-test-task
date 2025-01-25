const { NotFoundError, ValidationError, BadRequestError } = require('../utils/errors')
const CurrencyExchangeServices = require('../services/currencyExchangeServices')

exports.fetchExchangeRate = async (req, res) => {
    const {baseCurrency, targetCurrencies} = req.body;
    if (!baseCurrency || !targetCurrencies) 
        throw new BadRequestError('Please provide all required query parameters: baseCurrency, targetCurrency.');
    
    /* We can give validation that which customer use this endpoint by below check
    * const user = await User.findOne({email: req.email})
    * if(!user) throw new NotFoundError(User not found.')
    */

    const currencyExchangePayload = {
         baseCurrency,
         targetCurrencies
    }
    const conversionRate = await CurrencyExchangeServices.getExchangeRate(currencyExchangePayload)
	res.status(200).json(conversionRate)
}
