const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../middleware/jwt_middleware");
const handleAsyncError = require("express-async-wrap");
const {
  registerNewUser,
  authenticateUser,
  deleteUser,
  checkUserHasLoggedin,
  logoutUser
} = require("../route-handler/user_api_rh");

router.post("/signup", handleAsyncError(registerNewUser));
//eslint-disable-next-line
// router.use("/signup", (err, req, res, next) => {
//   res.send(err.errors);
// });

router.post("/login", handleAsyncError(authenticateUser));
//eslint-disable-next-line
router.use("/login", (err, req, res, next) => {
  res.status(401).send(err.errors);
});

router.get(
  "/jwt-check",
  jwtMiddleware.required,
  handleAsyncError(checkUserHasLoggedin)
);
//eslint-disable-next-line
router.use("/jwt-check", (err, req, res, next) => {
  res.status(401).send(err.errors);
});

router.post("/logout", jwtMiddleware.required, handleAsyncError(logoutUser));
//eslint-disable-next-line
router.use("/logout", (err, req, res, next) => {
  res.send(err.errors);
});

router.delete("/delete", handleAsyncError(deleteUser));
//eslint-disable-next-line
// router.use("/delete", (err, req, res, next) => {
//   res.status(401).send({ message: "failed" });
// });

module.exports = router;
