const {
    createActivity,
    allAct,
  } = require("../controllers/activitiesController");

const getActivitiesHandler = async (req, res) => {
    try {
      const allActivities = await allAct();
      if (!allActivities.length ) {
        throw Error("No activities created");
      } else {
        res.status(200).json(allActivities);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const createActivityHandler = async (req, res) => {
    try {
      const {countries, name, difficulty, duration, season } = req.body;
      if (!name || !difficulty || !season) throw Error("Data missing");

      else {
        const newActivity = await createActivity(
          countries,
          name,
          difficulty,
          duration,
          season
        );
        res.status(200).json(newActivity);
        //res.status(200).json("Activity created successfully");
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getActivitiesHandler,
    createActivityHandler,
  };