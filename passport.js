const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const sessions = require('express-session');

app.use(session ({secret: 'anything'}));

app.use(passport.initialize());
app.use(passport.sessions());
app.use(express.sessions());

passport.serializeUser(function(user, done) {
  done(null, {
      ID: user["ID"],
      username: user["username"]
  }
);
  console.log(user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});

//Local Strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// Google OAuth
// var app = express();
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//
// passport.use(new GoogleStrategy({
//         clientID: '668041538604-ippc98du4hrm5t1nngrgm4hb64gluan4.apps.googleusercontent.com',
//         clientSecret: 'OkIOKGcdJjQTL7PTOiw5_KHL',
//         callbackURL: '',
//         function(req, accessToken, refreshToken, profile, done){
//             done(null, profile);
//         }
// }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = passport;
