const { Activity, Country } = require("../db");

const createActivity = async (idCountry, name, difficulty, duration, season) => {
const activityCreated = await Activity.create({
    idCountry,
    name,
    difficulty,
    duration,
    season,
});

const searchCountry = await Country.findAll({
    where: { 
        id: idCountry },
});

await activityCreated.addCountry(searchCountry);
return activityCreated;
};

const allAct = async () => {
return await Activity.findAll();
};

module.exports = {
createActivity,
allAct,
};