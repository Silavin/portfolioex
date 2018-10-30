const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "field username is requied to be filled"],
    unique: true
  },
  fullname: {
    type: String,
    required: [true, "field fullname is requied to be filled"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "field email is requied to be filled"],
    unique: true
  }
});

UserSchema.plugin(uniqueValidator, {
  message: "the following fields must be unique"
});

module.exports = mongoose.model("User", UserSchema);
