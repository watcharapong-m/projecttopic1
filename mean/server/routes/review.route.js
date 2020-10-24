const express = require('express');
const asyncHandler = require('express-async-handler');
const reviewCtrl = require('../controllers/review.controller');

const router = express.Router();
module.exports = router;

router.route('/').post(asyncHandler(insert));
router.route('/get/:sid(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));

async function insert(req, res) {
  let reviewCtrl = await reviewCtrl.insert(req.body);
  res.json(reviewCtrl);
}

async function get(req, res) {
  let all_review = await reviewCtrl.get(req.params['sid']);
  res.json(all_review);
}

async function getAll(req, res) {
  let all_review = await reviewCtrl.getAll();
  res.json(all_review);
}

async function search(req, res) {
  let result = await reviewCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}
