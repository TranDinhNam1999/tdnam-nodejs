const passport = require('../middlewares/passport');

module.exports = function logout(req, res) {
    req.logout();
    res.redirect('/');
}