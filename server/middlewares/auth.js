const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const decoded = verifyToken(req.headers.access_token);
    const user = await User.findOne({ where: { username: decoded.username } });

    if (user) {
      req.loggedUser = decoded;
      next();
    } else {
      throw { status: 401, message: "Unauthenticated" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authentication,
};
