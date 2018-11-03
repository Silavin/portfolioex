const jwt = require("express-jwt");
const { secret } = require("../utils/jwt");

function getTokenFromCookie(req) {
  let token;
  if (req && req.cookies) token = req.cookies["jwt"];
  if (token === undefined) {
    token = null;
  }
  return token;
}

module.exports = {
  required: jwt({
    secret: secret,
    userProperty: "user",
    getToken: getTokenFromCookie
  })
};
