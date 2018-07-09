const express = require('express');
const router = express.Router();
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// Increment Id
var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

// Increment Event
var updateEventId = function(req, res, next) {
  if (!req.body.eventId) {
    event++;
    req.body.eventId = eventId + '';
  }
  next();
};

// Register
router.get('/register', function (req, res) {
	res.render('register');
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

// Register User
router.post('/register', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('register', {
			errors: errors
		});
	}
	else {
		//checking for email and username are already taken
		User.findOne({ username: {
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			User.findOne({ email: {
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.render('register', {
						user: user,
						mail: mail
					});
				}
				else {
					var newUser = new User({
						name: name,
						email: email,
						username: username,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('/users/login');
				}
			});
		});
	}
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.getUserById(id, (err, user) => {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', (req, res) => {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

app.post('/users', updateId, (req, res) => {
  var user = req.body;

  users.push(user);

  res.json(user);
});

app.post('/events', updateEventId, (req, res) => {
  var event = req.body;

  events.push(event);

  res.json(event);
});

app.get('/users', (req, res) => {
    res.render(users)
})

app.get('/events', (req, res) => {
    res.render(events)
})

app.delete('/events:id', (req, res) => {
   res.status(200);
})

app.delete('/users:id', (req, res) => {
   res.status(200);
})

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
