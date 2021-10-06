const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  displayName: String,
  username: String,
  verified: Boolean,
  text: String,
  avatar: String,
  image: String,
});

module.exports = mongoose.model("Post", PostSchema);
