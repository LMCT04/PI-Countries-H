const { createdActivity, allActivities } = require('../controllers/activitiesController')

const getActivities = async (req, res) => {
    try {
        const activities = await allActivities();
        if(!activities.length){
            throw Error('No activities created')
        } else {
            res.status(200).json(activities)
        } 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postCreatedActivities = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body;
        if(name && difficulty && duration && season && countries) {
            const newActivity = await createdActivity(
                name,
                difficulty,
                duration,
                season,
                countries,
            );
            res.status(200).json('Activity created')
        } else {
            return res.status(400).json('Missing Data')
        }
    } catch (error){
    next(error)
    }
}

module.exports = {
    getActivities,
    postCreatedActivities,
}