const service = require('./service');

const controller = {};

const list = async (req, res, next) => {
  try {
    const genders = await service.listGenders();
    return res.json({ genders });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const gender = req.body;
    const created = await service.createGender(gender);
    return res.status(201).json({ created });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await service.removeGender(id);
    return res.status(202).json({ removed });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genderBody = req.body;
    const updated = await service.updateGender(id, genderBody);
    return res.status(200).json({ updated });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gender = await service.findGender(id);
    return res.status(200).json({ gender });
  } catch (error) {
    next(error);
  }
};

controller.list = list;
controller.create = create;
controller.remove = remove;
controller.update = update;
controller.getOne = getOne;

module.exports = controller;
