const router = require("express").Router();
const SkillController = require("../controllers/SkillController");
const SkillLevelController = require("../controllers/SkillLevelController");
const UserController = require("../controllers/UserController");
const UserSkillController = require("../controllers/UserSkillController");
const { authentication } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("connected");
});

// Skill
router
  .route("/api/skills")
  .get(SkillController.getSkills)
  .post(SkillController.createSkill);
router
  .route("/api/skills/:id")
  .get(SkillController.getSkillById)
  .put(SkillController.updateSkill)
  .delete(SkillController.deleteSkill);

// Skill Level
router
  .route("/api/skillLevels")
  .get(SkillLevelController.getSkillLevels)
  .post(SkillLevelController.createSkillLevel);

router
  .route("/api/skillLevels/:id")
  .get(SkillLevelController.getSkillLevelById)
  .put(SkillLevelController.updateSkillLevel)
  .delete(SkillLevelController.deleteSkillLevel);

// User
router.route("/api/register").post(UserController.register);
router.route("/api/login").post(UserController.login);
router.route("/api/profile").get(authentication, UserController.getLoggedUser);
router
  .route("/api/update-profile")
  .put(authentication, UserController.updateProfile);
router.route("/api/logout").delete(UserController.logout);

// UserSkillController - with auth
router
  .route("/api/user-skill")
  .get(authentication, UserSkillController.getUserSkill)
  .post(authentication, UserSkillController.createUserSkill);

router
  .route("/api/user-skill/:id")
  .put(authentication, UserSkillController.updateUserSkill)
  .delete(authentication, UserSkillController.deleteUserSkill);

module.exports = router;
