var express = require('express');
var router = express.Router();
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_xOAbR4gWgrFR4NqlJ79vMW9u");


router.post('/', function(req, res) {
  // Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
  var token = request.body.stripeToken;
  // Charge the user's card:
  var charge = stripe.charges.create({
    amount: 96000,
    currency: "usd",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
        console.log("CARD DECLINED");
        res.send('error')
      }
      else {
          console.log("CARD ACCEPTED");
          res.send('ok')
      }
  });
  res.redirect('/login');
});

module.exports = router;
