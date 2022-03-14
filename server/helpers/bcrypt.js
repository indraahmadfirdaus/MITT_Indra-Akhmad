const bcrypt = require("bcrypt");
const salt = 10;
const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password) => {
  return bcrypt.compareSync(password, salt);
};

module.exports = {
  hashPassword,
  comparePassword,
};
