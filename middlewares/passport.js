const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../services/users');
const Bluebird = require('bluebird');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        User.findOne({
            where: {
                email,
            }
        }).then(function(user) {
            console.log("Username: " + user);

            // console.log(passpord);
            if (!user || !User.verifyPassword(password, user.password)) {
                return false;
            }
            return user;
        }).asCallback(done);
    }
));

passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID || '2752121475067022',
        clientSecret: process.env.FACEBOOK_APP_SECRET || '8c2e31f920cdfdfbea2028dfb5c183c5',
        callbackURL: process.env.FACEBOOK_CALL_BACK || 'http://localhost:3000/auth/facebook/callback',
        profileFields: ['id', 'emails', 'displayName'],
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({
            where: {
                email: profile.emails[0].value,
                facebookId: profile.id,
            }
        }).then(async function(found) {
            if (found) {
                found.facebookAccessToken = accessToken;
                return found;
            }
            const user = await User.create({
                email: profile.emails[0].value,
                displayName: profile.displayName,
                facebookId: profile.id,
                facebookAccessToken: accessToken,
            });
            return user;
        }).asCallback(done);

    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findByPk(id).asCallback(done);
});

module.exports = passport;