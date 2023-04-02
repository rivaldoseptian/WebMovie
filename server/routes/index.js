const router = require("express").Router();
const user = require("./user");
const movie = require("./movies");
const genre = require("./genre");

router.use("/user", user);
router.use("/movies", movie);
router.use("/genres", genre);

module.exports = router;
