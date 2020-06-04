const User = require('../services/users');
const asyncHandler = require('express-async-handler');

module.exports = asyncHandler(async function auth(req, res, next) {
    res.locals.user = req.user;
    next();
});