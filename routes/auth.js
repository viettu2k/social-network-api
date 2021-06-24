const express = require("express");
const { signup, signin, signout } = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
// sign out 
router.get("/signout", signout);

module.exports = router;