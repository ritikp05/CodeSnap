const {registerContoller,loginController} = require("../controllers/user.controller");
const express=require("express")
const router=express.Router();
router.post("/register",registerContoller)
router.post("/login",loginController)

module.exports=router;
