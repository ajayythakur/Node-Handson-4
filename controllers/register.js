const bcrypt = require("bcrypt");
const token = require("jsonwebtoken");
const Constant =require("../constant/constant");

const registerController= function(req,res){
    console.log("User Register");
    const userDetails = req.body;
    console.log("User Details Received =>", userDetails);
    const password = userDetails.password;
    const salt=10;

    bcrypt.genSalt(salt,function(err,salt){
        if(err){
            console.log(err);
        }
        else{
            bcrypt.hash(password,salt,function(err,hashedPassword){
                if(err){
                    console.log(err);

                }
                else{
                    console.log("User is successfully registered");
                    res.send({"hashedPassword": hashedPassword})
                }
            })

        }
    })
};

module.exports = {registerController};