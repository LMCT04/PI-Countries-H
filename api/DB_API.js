const  axios  = require('axios');
const { Country } = require('./src/db');




const ApiInfo = async () => {
        const info = await axios.get('https://restcountries.com/v3.1/all')

        const map  = info.data.map((country) => {
            const countryInfo = {
                id: country.cca3,
                name: country.name.common,
                imgFlag: country.imgFlag[1],
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : 'Capital not found',
                subregion: country.subregion ? country.subregion : 'Subregion not found',
                area: country.area,
                population: country.population,
            }
            return countryInfo
        })
    return map
}

const loadDatabase = async () => {
    try{
        const countries = await Country.findAll();
        if(countries && !countries.length){
            const array = await ApiInfo()
            await Country.bulkCreate(array)
        }
    } catch (error) {
        return {error: error.message}
    }
}

const loadingCountries = async (Country) => {
    await loadDatabase(Country)
}

module.exports = {loadingCountries};