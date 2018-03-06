var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var user = require("../module/user")

router.get('/list', function(req, res, next) {
  user.find({}, function(err, data) {
        res.json(data)
  })
});

module.exports = router;
