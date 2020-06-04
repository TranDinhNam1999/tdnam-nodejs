"use strict";

var passport = require('passport');

var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID || '2752121475067022',
  clientSecret: process.env.FACEBOOK_APP_SECRET || '8c2e31f920cdfdfbea2028dfb5c183c5',
  callbackURL: "".concat(process.env.BASE_URL, "/auth/facebook/callback") || 'http://localhost:3000/auth/facebook/callback'
}, function (accessToken, refreshToken, profile, done) {
  // User.findOrCreate(..., function(err, user) {
  //     if (err) { return done(err); }
  //     done(null, user);
  // });
  console.log('access token:', accessToken);
  console.log('profile:', profile);
  done();
}));
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (id, done) {
  User.findUserById(id).then(function (user) {
    done(null, user.id);
  })["catch"](done);
});
module.exports = passport;