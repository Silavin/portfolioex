require("dotenv").config({ path: "../.env" });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user/user");

const isInProduction = process.env.WORK_STATUS === "production";
if (isInProduction === false) {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );
}
mongoose.connection.on("connected", function() {
  //eslint-disable-next-line
  console.log("Mongoose default connection open to " + process.env.MONGODB_URI);
});
mongoose.connection.on("error", function(err) {
  //eslint-disable-next-line
  console.log("Mongoose default connection error: " + err);
});
mongoose.connection.on("disconnected", function() {
  //eslint-disable-next-line
  console.log("Mongoose default connection disconnected");
});

app.use(express.json());

//eslint-disable-next-line
app.post("/", async function(req, res, next) {
  const user = new User();
  user.username = req.body.username;

  await user.save();
  res.json({ message: "Hello" });
});

module.exports = app;
