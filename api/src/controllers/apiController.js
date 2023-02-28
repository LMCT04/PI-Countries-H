const { axios } = require('axios');
const { Country } = require('../db');




const getApiInfo = async (req, res) => {
    const response = await axios.get('https://restcountries.com/v3.1/all')


    const dataApi =response.data.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            imgFlag: country.flag[1],
            continent: country.continent[0],
            capital: country.capital ? country.capital[0] : '', 
            subregion: country.subregion ? country.subregion : '',
            area: country.area,
            population: country.population
        }
    })
    return dataApi;

}



const loadDataBase = async () => {
    try{
        const countries = await getApiInfo();
        await Country.bulkCreate(countries);
        return countries;
        
    } catch(error){
        return {error: error.message}
    }
}



const loadAllCountries = async (Country) => {
    await loadDataBase(Country)
}


module.exports = {loadAllCountries};