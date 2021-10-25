const PostMessage = require("../model/posts");
const mongoose = require("mongoose");
const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post Found with that ID");

  // THIS NEEDS TO PASS BOTH _ID AND THE UPDATED POST  whichjis coming from the body
  // the new: true is so we can recieve the updated version of the post
  // when testing this at first the data was still not changing aeven after updating it
  // so when sending this back for update we need to send over the ID because in the DB each post has
  // its own id
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    // the below is what we are sending back
    { ...post, _id },
    {
      new: true,
    }
  );
  // console.log(updatedPost);
  res.json(updatedPost);
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post Found with that ID");

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Successfully deleted" });
};
const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post Found with that ID");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );
  res.json(updatedPost);
};
module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
