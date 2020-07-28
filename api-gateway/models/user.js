/*============================================
; Title: rivas -assignment 2.3 user.js
; Author: Richard Krasso
; Date: 27 July 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates Mongoose Models
==============================================
*/
// Require statements
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema
let UserSchema = new Schema({
  username: {type: String, required: true },
  password: {type: String, required: true},
  email: {type: String, required: true}
});

// Export the model to make it available publicly.
module.exports = mongoose.model('User', UserSchema);
//user.save is used to add new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
};
// geyByID function
module.exports.getById = (id, callback) => {
  var query = {_id: id};
  UserSchema.findById(query, callback);
;}
