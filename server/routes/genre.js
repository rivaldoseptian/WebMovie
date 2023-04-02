const Controller = require("../controller/controller");
const authentication = require("../middleware/authentication");

const router = require("express").Router();

router.get("/fetchgenre", authentication, Controller.showGenre);
router.post("/create", authentication, Controller.createGenre);
router.delete("/delete/:genreId", authentication, Controller.deleteGenre);

module.exports = router;
