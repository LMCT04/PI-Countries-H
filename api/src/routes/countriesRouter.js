const {Router} = require("express")
const { getCountries, getById } = require('../handlers/countriesHandler.js')
const countryRouter = Router();



countryRouter.get('/', getCountries)
countryRouter.get('/:idCountry', getById)


module.exports = countryRouter;