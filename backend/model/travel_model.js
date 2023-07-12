const mongoose = require('mongoose');
const Travel = mongoose.model('TravelUser', {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  travel_destination: {
    type: String,
    required: true,
  },
  travel_budget: {
    type: String,
    required: true,
  },
  travel_duration: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    enum: ['User', 'Admin'],
  },
});
module.exports = Travel;
