var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/admin/login', { title: 'Login',layout: false });
});

router.get('/dashboard', function(req, res, next) {
    res.render('pages/admin/dashboard', { 
        title: 'Dashboard',
        layout: './layouts/admin/master-layout' 
    });
});

module.exports = router;
