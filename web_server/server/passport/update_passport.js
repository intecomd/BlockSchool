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
  console.log("in update passport");
  const userData = {
    email: email.trim(),
    events: req.body.events
  };
  console.log(userData);

  User.update({email: userData.email}, { $push : {
          events: userData.events
      }},
      done
  );
});
