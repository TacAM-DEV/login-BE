var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Could you be more specific please?');
});

router.get('/signup', function(req, res, next) {
    res.send('Signup');
});

router.get('/signin', function(req, res, next) {
    res.send('Signin');
});

module.exports = router;
