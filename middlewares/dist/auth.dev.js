"use strict";

var User = require('../services/users');

var asyncHandler = require('express-async-handler');

module.exports = asyncHandler(function auth(req, res, next) {
  var userId, user;
  return regeneratorRuntime.async(function auth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = req.session.userId;
          res.locals.currentUser = null;

          if (userId) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", next());

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findUserById(userId));

        case 6:
          user = _context.sent;

          if (user) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", next());

        case 9:
          req.currentUser = user;
          res.locals.currentUser = user;
          next();

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});