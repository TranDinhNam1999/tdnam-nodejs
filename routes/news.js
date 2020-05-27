const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const router = new Router();
const Article = require('../services/article');
const ensuareLogIn = require('../middlewares/requireLogedIn');

router.use(ensuareLogIn);

router.get('/', asyncHandler(async function(req, res) {
    const article = await Article.findAll({});
    res.render('news', { article });
}));

// router.get('/:id/done', asyncHandler(async function(req, res) {
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