const { UserSkill } = require("../models/index");
class UserSkillController {
  static async createUserSkill(req, res, next) {
    try {
      const userSkill = await UserSkill.create({
        userId: req.loggedUser.id,
        username: req.loggedUser.username,
        skillId: req.body.skillId,
        skillLevelId: req.body.skillLevelId,
      });

      res.status(201).json({
        data: userSkill,
        status: "success",
        message: "success create user skill",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateUserSkill(req, res, next) {
    try {
      const userSkill = await UserSkill.update(
        {
          skillId: req.body.skillId,
          skillLevelId: req.body.skillLevelId,
        },
        { where: { id: req.params.id }, returning: true }
      );

      res.status(200).json({
        data: userSkill[1][0],
        status: "success",
        message: "success update user skill",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUserSkill(req, res, next) {
    try {
      const userSkill = await UserSkill.destroy({
        where: { id: req.params.id },
        returning: true,
      });

      res.status(200).json({
        status: "success",
        message: "success delete user skill",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUserSkill(req, res, next) {}
}

module.exports = UserSkillController;
