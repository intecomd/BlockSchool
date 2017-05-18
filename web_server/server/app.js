var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');


var index = require('./routes/index');
var auth = require('./routes/auth');
var charge = require('./routes/charge');

var app = express();


// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_xOAbR4gWgrFR4NqlJ79vMW9u");


var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri);

// view engine setup
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');
app.set('view engine', 'hbs');
app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

// TODO: remove this after development is done
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// load passport strategies
app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
var localUpdateStrategy = require('./passport/update_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
passport.use('local-update', localUpdateStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth_checker');


app.use('/', index);
app.use('/charge', charge);
app.use('/auth', auth);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send('404 Not Found');
});

/*app.use('/buy', function(req, res) {
  res.render('buy', {
  });
}); */



module.exports = app;
