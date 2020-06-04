const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../services/users');
const passport = require('../middlewares/passport');
const router = new Router();


router.get('/', function getLogin(req, res) {
    res.render('login');
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
}));

router.get('/:id/:tooken', asyncHandler(async function(req, res) {
    const { id, tooken } = req.params;
    const user = await User.findUserById(id);
    if (user && user.tooken === tooken) {
        user.tooken == null;
        user.save();
        req.session.userId = user.id;
    }
    res.redirect('/');
}));

module.exports = router;