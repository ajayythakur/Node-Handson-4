const express=require("express");
const bodyParser= require("body-parser");
const Constant=require("./constant/constant");
const login = require("./routes/login");
const register=require("./routes/register");

const server=express();

server.use(bodyParser.json());
server.use(login);
server.use(register);

server.listen(Constant.Port,()=>{
    console.log("Server is listening to Port 3001")
})

