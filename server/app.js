require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const User = require("./models/user/user");
const userRouter = require("./routes/user_api");
const portfolioArticleRouter = require("./routes/portfolio_article_api");

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

module.exports = app;
