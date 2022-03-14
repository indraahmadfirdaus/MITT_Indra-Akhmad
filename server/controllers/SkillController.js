const { Skill } = require("../models");

class SkillController {
  static async getSkills(req, res, next) {
    try {
      const skills = await Skill.findAll();
      res.status(200).json({
        data: skills,
        status: "success",
        message: "success find all skills",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getSkillById(req, res, next) {
    try {
      const skills = await Skill.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json({
        data: skills,
        status: "success",
        message: "success find skill by id",
      });
    } catch (error) {
      next(error);
    }
  }

  static async createSkill(req, res, next) {
    try {
      const skills = await Skill.create({
        skillName: req.body.skillName,
      });
      res.status(201).json({
        data: skills,
        status: "success",
        message: "success create skill",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateSkill(req, res, next) {
    try {
      const skills = await Skill.update(
        {
          skillName: req.body.skillName,
        },
        {
          where: { id: req.params.id },
          returning: true,
        }
      );
      res.status(200).json({
        // data: skills[1][0],
        status: "success",
        message: "success update skill",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteSkill(req, res, next) {
    try {
      const skills = await Skill.destroy({
        where: { id: req.params.id },
        returning: true,
      });
      res.status(200).json({
        data: skills,
        status: "success",
        message: "success delete skill",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SkillController;
