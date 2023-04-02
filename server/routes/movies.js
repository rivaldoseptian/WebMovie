const Controller = require("../controller/controller");
const authentication = require("../middleware/authentication");

const router = require("express").Router();

router.get("/pub/fetchmovie", Controller.fetchMovie);
router.get("/fetchmovie", authentication, Controller.fetchMovie);
router.post("/create", authentication, Controller.createMovie);
router.put("/edit/:movieId", authentication, Controller.editMovie);
router.get("/detail/:movieId", authentication, Controller.detailMovie);
router.delete("/delete/:movieId", authentication, Controller.deleteMovie);
router.get("/pub/detail/:movieId", Controller.detailMovie);

module.exports = router;
