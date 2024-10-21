const express = require("express");
const router = express.Router();
//Post table
const { Posts } = require("../models");

router.get("/", (req, res) => {
  // res.json('New Posting Page');
  const listOfPosts = Posts.findAll();
});
// async to wait for the data to be inserted before the request get  going forward
router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
