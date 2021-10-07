const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", (req, res) => {
  try {
    const data = req.body;
    const newPost = new Post(data);
    newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
