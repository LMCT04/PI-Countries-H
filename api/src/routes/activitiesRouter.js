const {Router} = require("express")
const { getActivities, postCreatedActivities} = require('../handlers/activitiesHandler')
const activityRouter = Router();


activityRouter.get('/', getActivities )
activityRouter.post('/', postCreatedActivities )

module.exports = activityRouter;