"use strict";

var _require = require('express'),
    Router = _require.Router;

var asyncHandler = require('express-async-handler');

var router = new Router();

var User = require('../services/users');

router.get('/', function getLogin(req, res) {
  res.render('login');
});
router.post('/', asyncHandler(function postLogin(req, res) {
  var user, checkPassword;
  return regeneratorRuntime.async(function postLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findUserByEmail(req.body.email));

        case 2:
          user = _context.sent;
          checkPassword = User.verifyPassword(req.body.password, user.password);

          if (!(!user || !checkPassword)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.render('login'));

        case 6:
          req.session.userId = user.id;
          res.redirect('/');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}));
module.exports = router;