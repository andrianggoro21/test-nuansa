const express = require("express");
const router = express.Router();

const { createUserController, findUserController } = require("../controllers/userController");



router.post("/", createUserController);
router.get("/:id", findUserController);


module.exports = router;
