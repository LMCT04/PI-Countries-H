const  axios  = require('axios');
const { Country } = require('./src/db');


const cleared = (api) => {
    return api.map(country => {            
        return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.continents ? country.continents[0] : 'Continent not found',
            capital: country.capital ? country.capital[0] : 'Capital not found',
            subregion: country.subregion ? country.subregion : 'Subregion not found',
            area: country.area,
            population: country.population,}
})
}

const loadingCountries = async () => {
    const api = (await axios.get('https://restcountries.com/v3.1/all')).data
    const clear = cleared(api)
    const getApi = await Country.bulkCreate(clear)
    console.log(getApi)
    return getApi
}

module.exports = {loadingCountries};