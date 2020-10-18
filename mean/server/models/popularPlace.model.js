const mongoose = require('mongoose');

const PoppularPlaceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('PopularPlace', PoppularPlaceSchema);

