/*============================================
; Title: rivas -assignment 2.3 authControll.js
; Author: Richard Krasso
; Date: 27 July 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates Controllers API's
==============================================
*/
var User = require('../models/user');
// Register a new user on POST
exports.user_register = function(req, res) {
 res.send('NOT IMPLEMENTED: User registration POST');
};
// Verify token on GET
exports.user_token = function(req, res) {
 res.send('NOT IMPLEMENTED: User token lookup GET');
};
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

//registers a new user on POST
exports.user_register = function(req, res) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  var newUser = new user({
    username: req.body.username,
    psssword: hashedPassword,
    email: req.body.email
});

User.add(newUser, (err, user) => {
  if (err)
    return res.status(500).send('There was a problem registering the user.');
  var token = jwt.sign({ id: user._id}, config.web.secret, {
      expiresIn: 86400 //24hrs
  });
  res.status(200).send({ auth: true, token: token });

    });

  };
//verifies token on GET
exports.user_token = function(req, res) {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided'});

  jwt.verify(token, config.web.secret, function(err,decoded) {
    if (err) return res.status(500).send({auth: false, message:'Failed to authenitcate token'});

    User.getById(decoded.id, function(err, user) {
      if (err) return res.status(500).send('There was a problem finding the user');

      if (!user) return res.status(404).send('No user found');

      res.status(200).send(user);

    });
  });
};
