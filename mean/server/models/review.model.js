const mongoose = require('mongoose');

const RvieweSchema = new mongoose.Schema({
  place_name: {
    type: String,
    required: true,
  },
  place: {
    type: [
      {
        text: {
          type: String,
          required: true,
        },
        person_name: {
          type: String,
          required: true,
        },
      }
    ],
    required: true,
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('Review', RvieweSchema);

