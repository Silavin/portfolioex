const express = require("express");
const router = express.Router();
const handleAsyncError = require("express-async-wrap");
const {
  registerNewUser,
  authenticateUser,
  deleteUser
} = require("../route-handler/user_api_rh");

router.post("/signup", handleAsyncError(registerNewUser));
//eslint-disable-next-line
router.use("/signup", (err, req, res, next) => {
  res.send(err.errors);
});

router.post("/login", handleAsyncError(authenticateUser));
//eslint-disable-next-line
router.use("/login", (err, req, res, next) => {
  res.send(err.errors);
});

router.delete("/delete", handleAsyncError(deleteUser));
//eslint-disable-next-line
router.use("/delete", (err, req, res, next) => {
  res.status(200).send({ message: "failed" });
});

module.exports = router;
