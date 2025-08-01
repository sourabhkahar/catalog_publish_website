var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/user/index', {
    title: 'Home',
    layout: 'layouts/user/master-layout' // views/layouts/user-layout.ejs
  });
});

router.get('/demo', function(req, res, next) {
  res.render('pages/user/catalogdemo', {
    title: 'Demo',
    layout: 'layouts/user/master-layout' // views/layouts/user-layout.ejs
  });
});

module.exports = router;
