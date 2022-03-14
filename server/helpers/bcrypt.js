const bcrypt = require("bcrypt");
const salt = 10;
const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, password_db) => {
  return bcrypt.compareSync(password, password_db);
};

module.exports = {
  hashPassword,
  comparePassword,
};
