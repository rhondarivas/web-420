/*============================================
; Title: rivas -assignment1.4
; Author: Richard Krasso
; Date: 7 July 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates api's
===========================================
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var indexRouter = require('./routes/index');

var app = express();

//database connection
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1-992kq.mongodb.net/api-gateway', {
  promiseLibrary: require('bluebird')
  }).then(()=>console.log('connection successful'))
  .catch((err)=>console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
