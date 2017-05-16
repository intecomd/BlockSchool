const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config/config.json');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    events: req.body.events
  };

  User.update({email: userData.email}, { $push : {
          events: userData.events
      }}, {upsert: true}, function ( err ) {
        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
  });
});
