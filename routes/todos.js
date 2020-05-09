const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const router = new Router();
const Todo = require('../services/todos');
const ensuareLogIn = require('../middlewares/requireLogedIn');

router.use(ensuareLogIn);

router.get('/', asyncHandler(async function(req, res) {
    const todos = await Todo.findAllNotDone(req.currentUser.id);
    res.render('todo2', { todos });
}));

router.get('/:id/done', asyncHandler(async function(req, res) {
    const { id } = req.params;
    const todos = await Todo.findById(id);
    if (todos && todos.userId === req.currentUser.id) {
        await todos.markAsDone();
    }
    res.redirect('/todo2');
}));


module.exports = router;