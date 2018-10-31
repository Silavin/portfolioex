const express = require("express");
const router = express.Router();
const handleAsyncError = require("express-async-wrap");
const {
  registerNewUser,
  authenticateUser
} = require("../route-handler/user_api_rh");

router.post("/signup", handleAsyncError(registerNewUser));
//eslint-disable-next-line
router.use("/signup", (err, req, res, next) => {
  res.send(err.errors);
});

router.post("/login", handleAsyncError(authenticateUser));

module.exports = router;
