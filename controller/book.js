var express = require('express'),
    router = express.Router(),
    log = require('../config/passport.js');

var page = {
  title: "Library Assistant"
}

// CRUD

// CREATE
//sets submit pagee
router.get('/Add', function(req,res){
  res.render('Book/add', {
      title: 'Submit a Book'
  });
});

//saves new books
router.post('/Add', function (req, res){

});



// RETRIEVE
//retrieves documents and sets index

router.get('/', function(req,res){

});


/* REMOVING IN NEXT UPDATE */
router.get('/API/Book/:isbn', function(req,res){
 
});

// RETRIEVE 1
router.get('/Details/:id', function(req,res){

});


// UPDATE
// PARAMETERS / QUERIES ALWAYS LAST IN URL
// INDUSTRY STANDARD
router.get('/Edit/:id', function(req,res){

});

// MISSING PAGE COUNT PREVIOUS FORMS

router.post('/Edit', function(req,res){


 
});

router.get('/index', function(req,res){
  res.render('./_index');
});

router.post('/DeleteBooks', function (req,res){
  
});




module.exports = router;