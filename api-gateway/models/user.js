/*============================================
; Title: rivas -assignment 2.3 user.js
; Author: Richard Krasso
; Date: 27 July 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates Mongoose Models
==============================================
*/
/**
 Fields username, password, and email
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
username: {type: String, required: true},
password: {type: String, required: true},
email: {type: String, required: true}
});


const User = module.exports = mongoose.model('User', userSchema);

/**
 Database queries
 */

 // user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

//getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
  var query = {email: e};
  user.findOne(query, callback);
};
