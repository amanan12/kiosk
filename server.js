var express = require('express'),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    settings = require("./configuration.js")("production"),
    port = settings.port,
    methodOverride = require("method-override"),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/client'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vdn.api+json' }));
app.use(methodOverride());


//ROUTES
app.use('/', require('./controller/index'));

 /*RENDERS IN CONTROLLER/INDEX
app.use('/Index', function(req, res){
  
  res.render("index");
});
*/

app.use('/Library', function(req, res){
  
  res.render("library", { title: "Library" });
});

app.use('/Checkout/Add', function(req, res){
  
  res.render("Checkout/add", {title: "Checkout Cart"});
});

app.use('/Checkout/Cart', function(req, res){
  
  res.render("Checkout/cart");
});

app.use('/Checkout/checkout', function(req, res){
  
  res.render("Checkout/checkout");
});

app.use('/User/Login', function(req, res){
  
  res.render("User/login", {title: "Login"});
});

app.use('/Add', function(req, res){
  
  res.render("Book/add", { title: "Add New Book"});
});
/*

  TESTING ONE AT A TIMES
app.use('/User', require('./controller/user'));
app.use('/Checkout', require('./controller/checkout'));

app.use('/Book', require('./controller/book'));

// GENERAL LISTING OF ALL BOOKS
app.use('/Library', require('./controller/library'));

// API FOR JSON / DATA ONLY!
//app.use('/API', require('./controller/api.js'));
*/

// ADMINISTRATION SECTION
// app.use('/Admin', require('./controller/admin'));

app.listen(port, function(){
  console.log("Chat server listening at " + port);
});
