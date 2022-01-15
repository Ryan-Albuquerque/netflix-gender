const util = require('../utils');
const service = require('./service');

const validator = {};

const create = (req, res, next) => {
  const gender = req.body;

  if (!gender.name) {
    return res.status(400).json({
      message: 'Gender name is not defined',
    });
  }
  if (!gender.description) {
    return res.status(400).json({
      message: 'Gender description is not defined',
    });
  }
  next();
};

const remove = (req, res, next) => {
  const { id } = req.params;

  if (!id || !util.isValidMongoId(id) || !service.isValidGender(id)) {
    return res.status(400).json({ message: 'Invalid Id' });
  }
  next();
};

const update = async (req, res, next) => {
  const { id } = req.params;

  if (!id || !util.isValidMongoId(id) || !(await service.isValidGender(id))) {
    return res.status(400).json({ message: 'Invalid Id' });
  }

  next();
};

validator.create = create;
validator.remove = remove;
validator.update = update;

module.exports = validator;
