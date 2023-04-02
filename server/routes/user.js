const UserController = require("../controller/userController");
const authentication = require("../middleware/authentication");

const router = require("express").Router();

router.post("/register", authentication, UserController.register);
router.post("/login", UserController.login);

module.exports = router;
