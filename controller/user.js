var passport = require('passport'),
    express = require('express'),
    router = express.Router(),
    flash = require('connect-flash');
    //U = require('../utilities.js');


// LOGIN BEGINS
router.get('/Login', function(req, res) {
   res.render('User/logIn', { message: req.flash('loginMessage') });
});


router.post('/Login', passport.authenticate('local-login', {
    successRedirect : '/Checkout', // redirect to the secure profile section
    failureRedirect : '/User/Signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
// LOGIN ENDS




router.get('/Signup', function(req, res) {
   res.render('User/signUp', { message: req.flash('signupMessage') });
});


router.post('/Signup', passport.authenticate('local-signup', {
    successRedirect : '/User/Signup', // redirect to the secure profile section
    failureRedirect : '/User/Login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));



router.get('/Profile',U.isLoggedIn, isLoggedIn, function(req, res) {
    res.render('User/profile', {
        user : req.user // get the user out of session and pass to template
    });
});




function isLoggedIn(req, res, next) {

   // if user is authenticated in the session, carry on
   if (req.isAuthenticated())
       return next();

   // if they aren't redirect them to the home page
   res.redirect('/');
}




module.exports = router;