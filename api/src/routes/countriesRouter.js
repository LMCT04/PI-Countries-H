const {Router} = require("express")
const countryRouter = Router();
const { getCountries, getById } = require('../handlers/countriesHandler.js')



countryRouter.get('/', getCountries)
countryRouter.get('/:idCountry', getById)


module.exports = countryRouter;