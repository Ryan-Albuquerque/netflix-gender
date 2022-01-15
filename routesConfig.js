const route = require('express').Router();

const genderRoutes = require('./src/gender/routes');
const errorHandler = require('./src/middlewares/errorHandler');

route.use(genderRoutes);
route.use(errorHandler);

module.exports = route;
