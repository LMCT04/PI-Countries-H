const {Router} = require("express")
const { getActivitiesHandler, createActivityHandler} = require('../handlers/activitiesHandler')
const activityRouter = Router();


activityRouter.get('/', getActivitiesHandler )
activityRouter.post('/', createActivityHandler )

module.exports = activityRouter;