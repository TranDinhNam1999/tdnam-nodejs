"use strict";

var passport = require('../middlewares/passport');

module.exports = function logout(req, res) {
  req.logout();
  res.redirect('/');
};