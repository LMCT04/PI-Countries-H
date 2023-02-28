const { allCountries, countryByName, countryById } = require('../controllers/countriesController')


const getCountries = async (req, res) => {
    try {
        const name = req.query;
        const result = name ? await countryByName(name) : await allCountries();
        res.status(200).json(result)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const getById = async (req, res) => {
    try {
        const countryId = req.params.idCountry;
        const country = idCountry ? await countryById(countryId) : await allCountries();
        res.status(200).json(country)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getCountries,
    getById,
}

