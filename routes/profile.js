const { Router } = require('express');
const upload = require('../middlewares/upload');
const router = new Router();

router.get('/', function profile(req, res) {
    res.render('profile');
});

router.post('/', upload.single('avatar'), function(req, res, next) {
    console.log(req.file);
    res.render('profile');
});

module.exports = router;