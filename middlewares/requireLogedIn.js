module.exports = function requireLogIn(req, res, next) {
    if (!req.currentUser) {
        res.redirect('/');
    } else {
        next();
    }
}