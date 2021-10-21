const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  name: String,
  tags: [String],
  selectedFile: String,
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  likes: {
    // Array of strings
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("PostMessage", postSchema);
