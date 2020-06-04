"use strict";

var passport = require('passport');

var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../services/users');

var Bluebird = require('bluebird');

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  User.findOne({
    where: {
      email: email
    }
  }).then(function (user) {
    console.log("Username: " + user); // console.log(passpord);

    if (!user || !User.verifyPassword(password, user.password)) {
      return false;
    }

    return user;
  }).asCallback(done);
}));
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID || '2752121475067022',
  clientSecret: process.env.FACEBOOK_APP_SECRET || '8c2e31f920cdfdfbea2028dfb5c183c5',
  callbackURL: process.env.FACEBOOK_CALL_BACK || 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'emails', 'displayName']
}, function (accessToken, refreshToken, profile, done) {
  User.findOne({
    where: {
      email: profile.emails[0].value,
      facebookId: profile.id
    }
  }).then(function _callee(found) {
    var user;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!found) {
              _context.next = 3;
              break;
            }

            found.facebookAccessToken = accessToken;
            return _context.abrupt("return", found);

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(User.create({
              email: profile.emails[0].value,
              displayName: profile.displayName,
              facebookId: profile.id,
              facebookAccessToken: accessToken
            }));

          case 5:
            user = _context.sent;
            return _context.abrupt("return", user);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }).asCallback(done);
}));
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findByPk(id).asCallback(done);
});
module.exports = passport;