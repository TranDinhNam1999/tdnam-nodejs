"use strict";

var _require = require('express'),
    Router = _require.Router;

var asyncHandler = require('express-async-handler');

var _require2 = require('express-validator'),
    body = _require2.body,
    validationResult = _require2.validationResult;

var crypto = require('crypto');

var Email = require('../services/email');

var User = require('../services/users');

var router = new Router();
router.get('/', function getLogin(req, res) {
  res.render('register');
});
router.post('/', [body('email').isEmail().normalizeEmail(), // .custom(async function(email) {
//     const found = User.findUserByEmail(email);
//     if (found) {
//         throw Error('User exists');
//     }
//     return true;
// }),
body('displayName').trim().notEmpty(), body('password').isLength({
  min: 6
})], asyncHandler(function postLogin(req, res) {
  var error, user;
  return regeneratorRuntime.async(function postLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          error = validationResult(req);
          console.log(error);

          if (error.isEmpty()) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(422).render('register', {
            error: error.array()
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(User.create({
            email: req.body.email,
            displayName: req.body.displayName,
            password: User.hashPassword(req.body.password),
            tooken: crypto.randomBytes(3).toString('hex').toUpperCase()
          }));

        case 6:
          user = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(Email.send(user.email, 'Ma Kich Hoat Tai Khoan', "http://localhost:3000/login/".concat(user.id, "/").concat(user.tooken)));

        case 9:
          res.redirect('/');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}));
module.exports = router;