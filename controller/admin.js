var express = require('express'),
    router = express.Router();


router.get('/', function(req, res){

  res.render('Admin/index', {
      title: 'Library Manager'
    });
});

module.exports = router;