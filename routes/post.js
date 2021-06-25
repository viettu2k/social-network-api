const express = require("express");
const { getPost, createPost, postByUser } = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/", getPost);
router.post(
  "/post/new/:userId",
  requireSignin,
  createPost,
  createPostValidator
);
router.get("/posts/by/:userId", requireSignin, postByUser);

// any route conatining: userId, our app will first excute userById()
router.param("userId", userById);

module.exports = router;
