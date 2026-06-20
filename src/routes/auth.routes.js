const express = require("express")
const authController = require("../controllers/auth.controller")

const authRouter = express.Router()

/*** ANOTHER WAY BY DESTRUCTUREING THE EXPRESS ROUTER FOR ABOVE TWO LINES ( both are correct)
 * const {Router} = require('express')
 *  const authRouter = Router()  */
// 

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
console.log(authController);
authRouter.post("/register", authController.registerUserController)


/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */

authRouter.post("/login", authController.loginUserController)

module.exports = authRouter