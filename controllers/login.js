const token= require('jsonwebtoken');
const Constant = require("../constant/constant");

const loginController = function(req,res){
    console.log("User Login");
    const loginData=req.body;
    if(loginData.username && loginData.password){
        console.log("Login data received =>", loginData);
        const jwtToken = token.sign(loginData,Constant.SecKey);
        return res.status(200).send({"token":jwtToken});
    }
    else{
        return res.status(400).send({message:"Please enter valid details"});
    }
};

module.exports = {loginController};