const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

const allCountries = async () => {
    const countries = await Country.findAll({
        include: {
            model: Activity,
            as: 'activities',
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    })
    return countries
}

const countryByName = async (name) => {
    const searchingName = await Country.findAll({
        where:{
            name: {
                [Op.iLike]:`%${name}%` 
            }
        },
        include: {
            model: Activity,
            as: 'activities',
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    })
    return searchingName
}

const countryById = async (idCountry) => {
    const country = await Country.findByPk(idCountry, {
        include: {
            model: Activity,
            as: 'activities',
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    })
    return country
}


module.exports = {
    allCountries,
    countryByName,
    countryById,
}

