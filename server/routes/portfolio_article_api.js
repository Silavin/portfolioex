const express = require("express");
const router = express.Router();
const handleAsyncError = require("express-async-wrap");
const {
  displayArticle,
  postArticle,
  editArticle,
  deleteArticle
} = require("../route-handler/portfolio_article_api_rh");

router.get("/display", handleAsyncError(displayArticle));
//eslint-disable-next-line
router.use("/display", (err, req, res, next) => {
  res.send(err.errors);
});

router.post("/create", handleAsyncError(postArticle));
//eslint-disable-next-line
router.use("/create", (err, req, res, next) => {
  res.send(err.errors);
});

router.put("/edit", handleAsyncError(editArticle));
//eslint-disable-next-line
router.use("/edit", (err, req, res, next) => {
  res.status(200).send({ message: "failed" });
});

router.delete("/delete", handleAsyncError(deleteArticle));
//eslint-disable-next-line
router.use("/delete", (err, req, res, next) => {
  res.status(200).send({ message: "failed" });
});

module.exports = router;
