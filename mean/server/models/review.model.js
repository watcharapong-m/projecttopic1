const mongoose = require('mongoose');

const RvieweSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  place_name: {
    type: String,
    required: true,
  },
  review: {},
      // type: [
      //   {
      //     name: {
      //       type: String,
      //       required: true,
      //     },
      //     message: {
      //       type: String,
      //       required: true,
      //     },
      //   }
      // ],
      // required: true,
}, {
  versionKey: false
});

module.exports = mongoose.model('Review', RvieweSchema);

