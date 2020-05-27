"use strict";

var _require = require('express'),
    Router = _require.Router;

var asyncHandler = require('express-async-handler');

var router = new Router();

var Article = require('../services/article');

var ensuareLogIn = require('../middlewares/requireLogedIn');

router.use(ensuareLogIn);
router.get('/', asyncHandler(function _callee(req, res) {
  var article;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Article.findAll({}));

        case 2:
          article = _context.sent;
          res.render('news', {
            article: article
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})); // router.get('/:id/done', asyncHandler(async function(req, res) {
//     const { id } = req.params;
//     const todos = await Todo.findById(id);
//     if (todos && todos.userId === req.currentUser.id) {
//         await todos.markAsDone();
//     }
//     res.redirect('/todo');
// }));
// router.post('/', asyncHandler(async function(req, res) {
//     const name = req.body.nametodo;
//     if (name) {
//         await Todo.add(name, req.currentUser.id);
//         res.redirect('/todo');
//     }
// }));

module.exports = router;