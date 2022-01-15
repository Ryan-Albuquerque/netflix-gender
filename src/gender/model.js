const mongoose = require('mongoose');

const genderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Gender = mongoose.model('Request', genderSchema);

module.exports = Gender;
