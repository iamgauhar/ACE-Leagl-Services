const express = require('express')
const UserRouter = express.Router();
const authorization=require("../middlewares/authorization.middleware");
const controller =require("../controllers/user.controller")
const appointmentController =require("../controllers/appointment.controller.js")
// const passport=require("passport")

UserRouter.post("/signup",controller.createUser);

UserRouter.post("/login",controller.userLogin);
UserRouter.post("/verifyOTP",controller.verifyOTP);
UserRouter.post("/forgotpassword",controller.forgotPassword);
UserRouter.get("/getaUserDataByEmail",controller.getaUserDataByEmail);

// appointment
UserRouter.post("/addAppointment",appointmentController.addAppointment);

module.exports = UserRouter;
