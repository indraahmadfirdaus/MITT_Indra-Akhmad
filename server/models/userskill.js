"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserSkill.belongsTo(models.User, { foreignKey: "userId" });
      UserSkill.belongsTo(models.Skill, { foreignKey: "skillId" });
      UserSkill.belongsTo(models.SkillLevel, { foreignKey: "skillLevelId" });
    }
  }
  UserSkill.init(
    {
      userId: DataTypes.INTEGER,
      username: DataTypes.STRING,
      skillId: DataTypes.INTEGER,
      skillLevelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserSkill",
    }
  );
  return UserSkill;
};
