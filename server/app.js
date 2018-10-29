require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const isNotInProduction = !process.env.WORK_STATUS === "production";

if (isNotInProduction) {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true
    }
  );
}

app.post("/", function(req, res, next) {
  res.send(req.body);
});

module.exports = app;
