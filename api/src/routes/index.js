const { Router } = require('express');
// Importar todos los routers;
const activityRouter = require('./activitiesRouter');
const countryRouter = require('./countriesRouter');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
router.use('/countries', countryRouter)
router.use('/activities', activityRouter)
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
