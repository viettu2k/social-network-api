const express = require("express");
const { getPost, createPost } = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/", requireSignin, getPost);
router.post("/post", createPostValidator, createPost);

// any route conatining: userId, our app will first excute userById()
router.param("userId", userById);

module.exports = router;
