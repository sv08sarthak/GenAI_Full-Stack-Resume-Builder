const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

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



/**
 * @route logout
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 */

authRouter.get("/logout", authController.logoutUserController)



/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private //this access will be protected
 */


authRouter.get("/get-me",authMiddleware.authUser, authController.getMeController)


module.exports = authRouter