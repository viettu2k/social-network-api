const express = require("express");
const {
    getPost,
    createPost,
    postByUser,
    postById,
    isPoster,
    updatePost,
    deletePost,
    photo,
    singlePost,
    like,
    unlike,
} = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/posts", getPost);

// linke & unlike
router.put("/post/like", requireSignin, like);
router.put("/post/unlike", requireSignin, unlike);

router.post(
    "/post/new/:userId",
    requireSignin,
    createPost,
    createPostValidator
);
router.get("/posts/by/:userId", requireSignin, postByUser);
router.get("/post/:postId", singlePost);
router.put("/post/:postId", requireSignin, isPoster, updatePost);
router.delete("/post/:postId", requireSignin, isPoster, deletePost);

// get photo from DB
router.get("/post/photo/:postId", photo);

// any route conatining: userId, our app will first excute userById()
router.param("userId", userById);

// any route conatining: postId, our app will first excute postById()
router.param("postId", postById);

module.exports = router;