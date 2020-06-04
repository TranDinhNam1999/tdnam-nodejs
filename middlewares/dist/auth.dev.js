"use strict";

var User = require('../services/users');

var asyncHandler = require('express-async-handler');

module.exports = asyncHandler(function auth(req, res, next) {
  return regeneratorRuntime.async(function auth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.locals.user = req.user;
          next();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});