/*============================================
; Title: rivas -assignment 2.3 api-catalog.js
; Author: Richard Krasso
; Date: 13 July 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates routes
==============================================
*/

//API Routes
var express = require ('express');
var checkToken = require('../check-token');
var router = express.Router();
var auth_controller = require('../controllers/authController');


//POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

//allow user login requests
router.post('/auth/login', auth_controller.user_login);

//allow user logout requests
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;
