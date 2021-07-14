const express = require("express");
const {
    signup,
    signin,
    signout,
    forgotPassword,
    resetPassword,
    socialLogin,
} = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { userSignupValidator, passwordResetValidator } = require("../validator");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// social login
router.post("/social-login", socialLogin);

// any route conatining: userId, our app will first excute userById()
router.param("userId", userById);

module.exports = router;