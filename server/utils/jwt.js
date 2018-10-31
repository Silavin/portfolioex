require("dotenv").config();

function getJWTSigningSecret() {
  const secret = process.env.SECRET;
  if (!secret) {
    throw new Error("Missing secrets to sign JWT token");
  }
  return secret;
}

module.exports = {
  secret: getJWTSigningSecret()
};
