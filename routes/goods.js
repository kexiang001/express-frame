var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.json({goods:"222"});
});

module.exports = router;