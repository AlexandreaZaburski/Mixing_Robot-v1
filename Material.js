var Mongoose = require('mongoose');

exports.MaterialSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  ingredients: [{
    name: String,
    amount: Number
  }]
});
