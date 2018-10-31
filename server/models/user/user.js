const mongoose = require("mongoose");
const crypto = require("crypto");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../../utils/jwt");

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
  },
  passwordSalt: {
    type: String,
    required: [true, "field passwordSalt is requied to be filled"],
    unique: true
  },
  passwordHash: {
    type: String,
    required: [true, "field passwordHash is requied to be filled"],
    unique: true
  }
});

function generateSalt() {
  return crypto.randomBytes(16).toString("hex");
}
function hashPassword(password, salt) {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex");
}
UserSchema.methods.setPassword = function(password) {
  this.passwordSalt = generateSalt();
  this.passwordHash = hashPassword(password, this.passwordSalt);
};
UserSchema.methods.validPassword = function(password) {
  return this.passwordHash === hashPassword(password, this.passwordSalt);
};

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 1);

  return jwt.sign(
    {
      userid: this._id,
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      exp: parseInt(exp.getTime() / 1000)
    },
    secret
  );
};
UserSchema.methods.verifyJWT = function(token) {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (err) {
    return false;
  }
};

UserSchema.plugin(uniqueValidator, {
  message: "the following fields must be unique"
});

module.exports = mongoose.model("User", UserSchema);
