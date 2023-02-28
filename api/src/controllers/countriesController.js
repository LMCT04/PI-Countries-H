const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

const allCountries = async () => {
    return await Country.findAll();
}

const countryByName = async (name) => {
    const searchingName = await Country.findAll({
        where:{
            name: { [Op.iLike]:`%${name}%` }
        }
    })

    if(!searchingName.length) return (`No country named ${name} found`)
    else return searchingName;
}

const countryById = async (idCountry) => {
    const country = await Country.findOne({
        where: {
            id: idCountry.toUpperCase()
        },
        include: [
            {
                model: Activity,
                attributes: ['id'],
                through: { attributes:[]}
            }
        ]
    })
    if(!country) return ('Country not found')
    else return country
}


module.exports = {
    allCountries,
    countryByName,
    countryById,
}

