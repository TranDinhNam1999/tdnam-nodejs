const User = require('../services/users');

module.exports = function index(req, res) {
    console.log(req.user);
    res.render('index');
};