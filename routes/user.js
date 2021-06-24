const express = require("express");
const { userById, allUsers, getUser } = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);

// any route conatining: userId, our app will first excute userById()
router.param("userId", userById);

module.exports = router;