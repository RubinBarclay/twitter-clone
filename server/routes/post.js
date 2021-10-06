const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.post("/", (req, res) => {
  try {
    const data = req.body;
    const newPost = new Post(data);
    newPost.save();

    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
