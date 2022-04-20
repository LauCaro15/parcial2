const mongoose = require('mongoose');
const personBillSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
    geo: {
      type: Object,
      required: true,
      lat: { type: Number, required: true },
      long: { type: Number, required: true },
    },
    city: { type: String, required: true },
  },
  pets: {
    type: Object,
    required: true,
    pet_type: { type: Array, required: true },
    pet_info: {
      type: Object,
      required: true,
      name_pet: { type: String, required: true },
      age_pet: { type: Number, required: true },
      breed: { type: String, required: true },
    },
  },
});
module.exports = mongoose.model('PersonBillCollection', personBillSchema);