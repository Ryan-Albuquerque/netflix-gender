const model = require('./model');

const service = {};

const listGenders = async () => {
  const result = await model.find({});
  return result;
};
const createGender = async (gender) => {
  const created = await model.create(gender);
  return created;
};
const removeGender = async (genderId) => {
  const removed = await model.findOneAndDelete(genderId);
  return removed;
};
const updateGender = async (id, genderUpdate) => {
  const updated = await model.findByIdAndUpdate(id, genderUpdate, {
    new: true,
  });
  return updated;
};
const findGender = async (id) => {
  const finded = await model.findById(id);
  return finded;
};

const isValidGender = async (id) => {
  const gender = await model.findById(id);
  return Boolean(gender);
};

service.listGenders = listGenders;
service.createGender = createGender;
service.removeGender = removeGender;
service.updateGender = updateGender;
service.isValidGender = isValidGender;
service.findGender = findGender;

module.exports = service;
