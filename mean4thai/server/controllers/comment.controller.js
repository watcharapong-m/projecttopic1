const bcrypt = require('bcrypt');
const Joi = require('joi');
const Comment = require('../models/comment.model');

const commentSchema = Joi.object({
  id: Joi.string().required(),
  place_name: Joi.string().required(),
  name: Joi.string().required(),
  message: Joi.string().required(),
})


module.exports = {
  insert,
  get,
  getAll,
  search,
}

async function insert(comment) {
  comment = await Joi.validate(comment, commentSchema, { abortEarly: false });
  return await new Comment(comment).save();
}

async function get(_id) {
  return await Comment.find({_id: _id});
}

async function getAll() {
  return await Comment.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Comment.find(query);
}
