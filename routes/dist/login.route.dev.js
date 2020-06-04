"use strict";

var _require = require('express'),
    Router = _require.Router;

var asyncHandler = require('express-async-handler');

var User = require('../services/users');

var passport = require('../middlewares/passport');

var router = new Router();
router.get('/', function getLogin(req, res) {
  res.render('login');
});
router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));
router.get('/:id/:tooken', asyncHandler(function _callee(req, res) {
  var _req$params, id, tooken, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$params = req.params, id = _req$params.id, tooken = _req$params.tooken;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findUserById(id));

        case 3:
          user = _context.sent;

          if (user && user.tooken === tooken) {
            user.tooken == null;
            user.save();
            req.session.userId = user.id;
          }

          res.redirect('/');

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}));
module.exports = router;