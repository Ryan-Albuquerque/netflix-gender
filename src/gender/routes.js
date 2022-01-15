const route = require('express').Router();
const validator = require('./validator');
const controller = require('./controller');

const routes = () => {
  route.get('/genders', controller.list);
  // route.get('/gender/:name', validator.getByName, controller.getByName); // TO DO: return all movies of a gender by gender name
  // route.get('/gender/:id', validator.getOne, controller.getOne); // TO DO: return gender info by id
  route.post('/gender', validator.create, controller.create);
  route.delete('/gender/:id', validator.remove, controller.remove);
  route.patch('/gender/:id', validator.update, controller.update);
};

module.exports = routes;
