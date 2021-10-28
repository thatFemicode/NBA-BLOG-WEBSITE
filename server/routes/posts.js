const express = require("express");
const router = express.Router();
const {
  getPosts,
  // getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  commentPost,
} = require("../controller/posts");
const { auth } = require("../middleware/auth");
router.get("/", getPosts);
router.get("/:id", getPost);
// router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/comment", auth, commentPost);

module.exports = router;

// Now you can only update and delete only post that you created
// And also only 1 post can be liked
