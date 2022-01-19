const route = require('express').Router();
const validator = require('./validator');
const controller = require('./controller');

route.get('/genders', controller.list);
route.get('/gender/:id', validator.isValidId, controller.getOne); // TO DO: return gender info by id
route.post('/gender', validator.create, controller.create);
route.delete('/gender/:id', validator.isValidId, controller.remove);
route.patch('/gender/:id', validator.isValidId, controller.update);

module.exports = route;
