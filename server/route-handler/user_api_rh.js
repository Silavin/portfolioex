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
  return res.json({
    user: { username: username, email: email, token: token }
  });
}

module.exports = { registerNewUser, authenticateUser };
