const User = require("../models/user/user");
const status = require("http-status");

async function registerNewUser(req, res) {
  const user = new User();

  user.username = req.body.username;
  user.fullname = req.body.fullname;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  await user.save();
  return res.status(status.OK).json({
    username: user.username,
    fullname: user.fullname,
    email: user.email
  });
}

async function authenticateUser(req, res) {
  const { username, email, password } = req.body;

  let user;
  if (username) {
    user = await User.findOne({ username: username });
  } else {
    if (email) {
      user = await User.findOne({ email: email });
    }
  }

  if (!user || !user.validPassword(password)) {
    return res.status(status.UNAUTHORIZED).json({
      error: { message: "Login is invalid" }
    });
  }

  const token = user.generateJWT();
  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: true
  });

  return res.status(status.OK).json({
    username: username,
    email: email
  });
}

async function deleteUser(req, res) {
  const { username, email, password } = req.body;

  let user;
  if (username) {
    user = await User.findOneAndDelete({ username: username });
  } else {
    if (email) {
      user = await User.findOneAndDelete({ email: email });
    }
  }
  if (!user || !user.validPassword(password)) {
    return res.status(status.UNAUTHORIZED).json({
      error: { message: "Login is invalid" }
    });
  }
  return res
    .status(status.OK)
    .json({ message: "User has been successfully deleted" });
}

module.exports = { registerNewUser, authenticateUser, deleteUser };
