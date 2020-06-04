"use strict";

var _require = require('express'),
    Router = _require.Router;

var asyncHandler = require('express-async-handler');

var router = new Router();

var Todo = require('../services/todos');

router.get('/', asyncHandler(function _callee(req, res) {
  var todos;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Todo.findAllNotDone(req.user.id));

        case 2:
          todos = _context.sent;
          res.render('todo', {
            todos: todos
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}));
router.get('/:id/done', asyncHandler(function _callee2(req, res) {
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

          if (!(todos && todos.userId === req.currentUser.id)) {
            _context2.next = 7;
            break;
          }

          _context2.next = 7;
          return regeneratorRuntime.awrap(todos.markAsDone());

        case 7:
          res.redirect('/todo');

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}));
router.post('/', asyncHandler(function _callee3(req, res) {
  var name;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          name = req.body.nametodo;

          if (!name) {
            _context3.next = 5;
            break;
          }

          _context3.next = 4;
          return regeneratorRuntime.awrap(Todo.add(name, req.user.id));

        case 4:
          res.redirect('/todo');

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}));
module.exports = router;