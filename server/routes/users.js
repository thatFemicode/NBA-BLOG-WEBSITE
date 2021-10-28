const express = require("express");
const router = express.Router();
const { signin, signup } = require("../controller/user");

router.post("/signin", signin);
router.post("/signup", signup);
module.exports = router;
