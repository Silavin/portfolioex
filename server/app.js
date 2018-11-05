require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const User = require("./models/user/user");
const userRouter = require("./routes/user_api");
const portfolioArticleRouter = require("./routes/portfolio_article_api");
const path = require("path");

const staticFiles = express.static(path.join(__dirname, "../client/build"));
const isInProduction = process.env.WORK_STATUS === "production";

if (isInProduction) {
  app.use(staticFiles);
}

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/portfolio-article", portfolioArticleRouter);
//eslint-disable-next-line
app.post("/", async function(req, res, next) {
  const user = new User();
  user.username = req.body.username;

  await user.save();
  res.json({ message: "Hello" });
});
//eslint-disable-next-line
app.use("/", function(err, req, res, next) {
  res.status(500).json({ message: "An error has occured." });
});

module.exports = app;
