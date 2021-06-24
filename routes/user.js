const express = require("express");
const { userById, allUsers } = require("../controllers/user");

const router = express.Router();

router.get("/users", allUsers);

// any route conatining: userId, our app will first excute userById()
router.param("userId", userById);

module.exports = router;