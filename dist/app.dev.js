"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cookieSession = require('cookie-session');

var passport = require('./middlewares/passport');

var db = require('./services/db');

var User = require('./services/users');

var app = express();
var port = process.env.PORT || 3000;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }

  return next();
}

app.use(cookieSession({
  name: 'session',
  keys: ['123'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(require('./middlewares/auth'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/login'
}));
app.use('/profile', isLoggedIn, require('./routes/profile'));
app.use('/todo', isLoggedIn, require('./routes/todos'));
app.use('/news', isLoggedIn, require('./routes/news'));
app.get('/testlogin', function (req, res) {
  res.render('testlogin');
});
app.use('/login', checkNotAuthenticated, require('./routes/login.route'));
app.use('/register', checkNotAuthenticated, require('./routes/register'));
app.get('/logout', require('./routes/logout'));
app.use(express["static"]('public'));
app.get('/', require('./routes/index'));
db.sync().then(function () {
  app.listen(port, function (req, res) {
    console.log("server action on port: " + port);
  });
})["catch"](function (err) {
  console.error(err);
});