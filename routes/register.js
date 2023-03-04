const express = require("express");
const router= express.Router();
const registerControllers=require("../controllers/register")


router.post("/register",registerControllers.registerController);

module.exports = router;