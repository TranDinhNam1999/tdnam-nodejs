"use strict";

var _require = require('express'),
    Router = _require.Router;

var asyncHandler = require('express-async-handler');

var router = new Router();

var Todo = require('../services/todo');

router.get('/todo2', asyncHandler(function _callee(req, res) {
  var todos;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Todo.findAllNotDone());

        case 2:
          todos = _context.sent;
          res.render('todo2', {
            todos: todos
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}));
router.get('/todo2/:id/done', asyncHandler(function _callee2(req, res) {
  var id, todos;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Todo.findById(id));

        case 3:
          todos = _context2.sent;

          if (!todos) {
            _context2.next = 7;
            break;
          }

          _context2.next = 7;
          return regeneratorRuntime.awrap(todos.markAsDone());

        case 7:
          res.redirect('/todo2');

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}));
module.exports = router;