const jwt = require("jsonwebtoken");
const sec = "anysechere";

const generateToken = (payload) => {
  return jwt.sign(payload, sec);
};

const verifyToken = (token) => {
  return jwt.verify(token, sign);
};

module.exports = {
  generateToken,
  verifyToken,
};
