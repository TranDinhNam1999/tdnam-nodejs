const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');
const Email = require('../services/email');
const User = require('../services/users');


const router = new Router();

router.get('/', function getLogin(req, res) {
    res.render('register');
});

router.post('/', [
    body('email')
    .isEmail()
    .normalizeEmail(),
    // .custom(async function(email) {
    //     const found = User.findUserByEmail(email);
    //     if (found) {
    //         throw Error('User exists');
    //     }
    //     return true;
    // }),
    body('displayName')
    .trim()
    .notEmpty(),
    body('password')
    .isLength({ min: 6 }),
], asyncHandler(async function postLogin(req, res) {
    const error = validationResult(req);
    console.log(error);
    if (!error.isEmpty()) {
        return res.status(422).render('register', { error: error.array() });
    }
    //
    const user = await User.create({
        email: req.body.email,
        displayName: req.body.displayName,
        password: User.hashPassword(req.body.password),
        tooken: crypto.randomBytes(3).toString('hex').toUpperCase(),
    });
    await Email.send(user.email, 'Ma Kich Hoat Tai Khoan', `${process.env.BASE_URL}/login/${user.id}/${user.tooken}`);
    res.redirect('/');
}));

module.exports = router;