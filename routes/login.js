const express = require("express");
const router= express.Router();
const loginControllers=require("../controllers/login")


router.post("/login",loginControllers.loginController);

module.exports = router;