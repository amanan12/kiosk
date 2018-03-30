var express = require('express'),
    router = express.Router(),
    moment = require('moment'),
    U = require('../utilities.js');


//TEST ROUTE???
router.get('/index', function(req,res){
  res.render('_index');
});



// STUDENT LOGIN VIA SCAN OR STUDENTID
router.get('/', U.isLoggedIn, function(req,res){
  
});


// router.get('/cart', U.isLoggedIn, function(req,res){
router.get('/Cart', function(req,res){
    res.render('Checkout/Cart', {user: req.user });
});

router.post('/Checkout', U.isLoggedIn, function (req, res){
 
});

router.post('/DeleteCheckouts', function (req,res){
  
});



router.post('/ReturnBook', function(req,res){
  
router.get('/logout', function(req, res) {
   req.logout();
   res.redirect('/user/signup');
});

});


module.exports = router;