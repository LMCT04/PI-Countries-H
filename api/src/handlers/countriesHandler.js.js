const { allCountries, countryByName, countryById } = require('../controllers/countriesController')

const getCountries = async (req, res) => {
    const {name} = req.query;
    try {
        const countries = await allCountries()
        if(name){
            const result = await countryByName(name)
            if(result.length) {
                return res.status(200).json(result)
            }
            return res.status(400).json(`${name} not exist`)
        }
        return res.status(200).json(countries)
        //const name = req.query;
        //const result = name ? await countryByName(name) : res.status(400).send(`${name} not exist`);
        //res.status(200).json(result)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const getById = async (req, res) => {
    try {
        const idCountry = req.params.idCountry;
        const country = idCountry ? await countryById(idCountry) : await allCountries();
        res.status(200).json(country)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getCountries,
    getById,
}

