const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const router = new Router();
const Todo = require('../services/todos');

router.get('/', asyncHandler(async function(req, res) {
    const todos = await Todo.findAllNotDone(req.user.id);
    res.render('todo', { todos });
}));

router.get('/:id/done', asyncHandler(async function(req, res) {
    const { id } = req.params;
    const todos = await Todo.findById(id);
    if (todos && todos.userId === req.currentUser.id) {
        await todos.markAsDone();
    }
    res.redirect('/todo');
}));

router.post('/', asyncHandler(async function(req, res) {
    const name = req.body.nametodo;
    if (name) {
        await Todo.add(name, req.user.id);
        res.redirect('/todo');
    }
}));

module.exports = router;