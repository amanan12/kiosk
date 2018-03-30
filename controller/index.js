var express = require('express'),
    router = express(),
    request = require('request');

router.get('/', function(req, res){
   res.render("index", { title: "Welcome to Franklin K. Lane Kiosk" });
});


router.get('/About', function(req, res){
    res.render('about', { title: "About Us"});
});


router.get('/Contact', function(req, res){
    res.render('contact', { title: "Contact Us" });
});

module.exports = router;
