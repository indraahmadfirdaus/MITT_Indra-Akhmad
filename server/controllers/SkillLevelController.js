const { SkillLevel } = require("../models");

class SkillLevelController {
  static async getSkillLevels(req, res, next) {
    try {
      const skills = await SkillLevel.findAll();
      res.status(200).json({
        data: skills,
        status: "success",
        message: "success find all skill Levels",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getSkillLevelById(req, res, next) {
    try {
      const skills = await SkillLevel.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json({
        data: skills,
        status: "success",
        message: "success find skill level by id",
      });
    } catch (error) {
      next(error);
    }
  }

  static async createSkillLevel(req, res, next) {
    try {
      const skills = await SkillLevel.create({
        skillLevelName: req.body.skillLevelName,
      });
      res.status(201).json({
        data: skills,
        status: "success",
        message: "success create skill level",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateSkillLevel(req, res, next) {
    try {
      const skills = await SkillLevel.update(
        {
          skillLevelName: req.body.skillLevelName,
        },
        {
          where: { id: req.params.id },
          returning: true,
        }
      );
      res.status(200).json({
        data: skills[1][0],
        status: "success",
        message: "success update skill level",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteSkillLevel(req, res, next) {
    try {
      const skills = await SkillLevel.destroy({
        where: { id: req.params.id },
      });
      res.status(201).json({
        data: skills,
        status: "success",
        message: "success delete skill level",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SkillLevelController;
