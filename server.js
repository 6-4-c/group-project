// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
//new imports
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const morgan = require('morgan');
const mongoose =  require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */

// MONGODB
var db = mongoose.connection;
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// MLAB Connection
<<<<<<< HEAD
var mongodbUri = 'mongodb://admin:adminADMIN123@ds251210.mlab.com:51210/eventplanner';
=======
<<<<<<< HEAD
var mongodbUri = 'mongodb://admin:adminADMIN123@ds251210.mlab.com:51210/eventplanner';
=======
// var mongodbUri = 'mongodb://admin:adminADMIN123@ds251210.mlab.com:51210/eventplanner';
>>>>>>> master
>>>>>>> master

//ALT Connections Strings
// mongodb://admin:adminAdmin123@ds251210.mlab.com:51210/eventplanner

// heroku config:set PROD_MONGODB=mongodb://admin:adminAdmin123:port1,host2:port2/eventplanner
// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds259620.mlab.com:59620/heroku_jphl9jvl');

//mongodb-atlas
// mongo "mongodb+srv://cluster0-xqlx4.mongodb.net/test" --username admin

//test connection to mlab
// nc -w 3 -v ds251210.mlab.com 51210

// LOCALHOST connection
<<<<<<< HEAD
// var mongodbUri = 'mongodb://localhost/users';
=======
<<<<<<< HEAD
// var mongodbUri = 'mongodb://localhost/users';
=======
var mongodbUri = 'mongodb://localhost/users';
>>>>>>> master
>>>>>>> master

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () => {
  // Wait for the database connection to establish, then start the app.
});

var routes = require('./routes/index');
var users = require('./routes/users');

app.use(express.static(path.join(__dirname, 'client/build')));

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
<<<<<<< HEAD
  errorFormatter: (param, msg, value) => {
=======
<<<<<<< HEAD
  errorFormatter: (param, msg, value) => {
=======
  errorFormatter: function(param, msg, value) {
>>>>>>> master
>>>>>>> master
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect flash
app.use(flash());

// use morgan to log requests to the console
app.use(morgan('dev'));

//ROUTES
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });
// app.get('/', (req, res) => {
//     var html = ReactDOMServer.renderToString(
//         React.createElement(Component)
//     )
//     res.send(html);
// });
// app.get('/names', (req, res) => {
//     res.render(names)
// });
// app.get('/success', (req, res, next) => {
//     res.render('success');
// });
// app.get('/login', passport.authenticate('local', {
//       successRedirect: '/profile',
//       failureRedirect: '/login',
//   })
// );
// app.get('/profile',
//   function(req, res){
//   res.render('profile', { user: req.session.passport.user });
// });
// //     res.render('login');
// // });
// app.get('/signup',(req, res, next) => {
//     res.render('signup');
// });
// app.post('/names', (req, res, next) => {
//     res.json(names);
// });
//
// app.use((req, res) => {
//   res.status(404);
//   res.render('404 Not found');
// });

// app.post('/register', urlencodedParser, (req, res) =>{
// app.post('/register', (req, res) =>{
//   User.create({
//     firstName: req.body.firstname,
//     lastName: req.body.lastname,
//     username: req.body.username,
//     password: req.body.password
//   });
//   res.render('signupsuccess');
// });

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err);
  }
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
