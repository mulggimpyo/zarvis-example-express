var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Z.A.R.V.I.S. example' });

  while(true){
    res.render('index',{ title: 'ShutDown!!'});
  }

});

module.exports = router;
