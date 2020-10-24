const bcrypt = require('bcrypt');
const Joi = require('joi');
const Review = require('../models/review.model');

const reviewSchema = Joi.object({
  place_name: Joi.string().required(),
  place: [
    {
      text: Joi.string().required(),
      person_name: Joi.string().required(),
    }
  ]
})


module.exports = {
  insert,
  get,
  getAll,
  search,
}

async function insert(review) {
  student = await Joi.validate(review, reviewSchema, { abortEarly: false });
  return await new Province(review).save();
}

async function get(_id) {
  return await Review.find({_id: _id});
}

async function getAll() {
  return await Review.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Review.find(query);
}
