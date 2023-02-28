const { Activity, Country } = require('../db');
const {Op} = require('sequelize');

const createdActivity = async ( name, difficulty, duration, season) => {
    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })

    countries.forEach(async (id) => {
        const country = await Country.findOne({
            where: {id: {[Op.iLike]: `%${id}%`}}
        })
        await country?.addActivity(activity)
    })

    return res.send(activity)
}

const allActivities = async () => {
    return await Activity.findAll();
}

module.exports = {
    createdActivity,
    allActivities
}