const { User } = require("../models");
const { UserProfile } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class UserController {
  static async register(req, res, next) {
    try {
      const created = await User.create({
        username: req.body.username,
        password: req.body.password,
      });

      res
        .status(201)
        .json({ data: created, status: "success", message: "user created" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: { username: req.body.username },
      });
      if (user && comparePassword(req.body.password, user.password)) {
        const tokenPayload = {};
        tokenPayload["id"] = user.id;
        tokenPayload["username"] = user.username;

        const access_token = generateToken(tokenPayload);

        res.status(200).json({
          data: { access_token },
          status: "success",
          message: "success login",
        });
      } else {
        throw {
          status: 400,
          message: "Wrong username or password",
        };
      }
    } catch (error) {
      next(error);
    }
  }

  static async updateProfile(req, res, next) {
    try {
      const found = await UserProfile.findOne({
        where: { userId: req.loggedUser.id },
      });

      let user;

      if (!found) {
        user = user = await UserProfile.create({
          name: req.body.name,
          address: req.body.address,
          bod: req.body.bod,
          email: req.body.email,
          userId: req.loggedUser.id,
        });
      } else {
        user = await UserProfile.update(
          {
            name: req.body.name,
            address: req.body.address,
            bod: req.body.bod,
            email: req.body.email,
          },
          {
            where: { userId: req.loggedUser.id },
            returning: true,
          }
        );
      }

      res.status(200).json({
        message: "success update profile",
        status: "success",
      });
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {}
}

module.exports = UserController;
