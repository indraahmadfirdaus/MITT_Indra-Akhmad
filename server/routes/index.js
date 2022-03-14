const router = require("express").Router();
const SkillController = require("../controllers/SkillController");
const SkillLevelController = require("../controllers/SkillLevelController");
const UserController = require("../controllers/UserController");
const UserSkillController = require("../controllers/UserSkillController");

router.get("/", (req, res) => {
  res.send("connected");
});

// Skill
router.route("/api/skills").get(SkillController.getSkills);
router
  .route("/api/skills/:id")
  .get(SkillController.getSkillById)
  .post(SkillController.createSkill)
  .put(SkillController.updateSkill)
  .delete(SkillController.deleteSkill);

// Skill Level
router.route("/api/skillLevels").get(SkillLevelController.getSkillLevels);
router
  .route("/api/skillLevels/:id")
  .get(SkillLevelController.getSkillLevelById)
  .post(SkillLevelController.createSkillLevel)
  .put(SkillLevelController.updateSkillLevel)
  .delete(SkillLevelController.deleteSkillLevel);

// User
router.route("/api/register").post(UserController.register);
router.route("/api/login").post(UserController.login);
router.route("/api/update-profile").put(UserController.updateProfile);
router.route("/api/logout").delete(UserController.logout);

// UserSkillController - with auth
router
  .route("/api/user-skill")
  .get(UserSkillController.getUserSkill)
  .post(UserSkillController.createUserSkill)
  .put(UserSkillController.updateUserSkill)
  .delete(UserSkillController.deleteUserSkill);

module.exports = router;
