const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user: String
});

module.exports = mongoose.model("User", UserSchema);
