<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
// const express = require('express');
// const router = express.Router();
// const app = express();
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
//
// //ROUTES
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
// app.use(function(err, req, res, next) {
//   if (err) {
//     res.status(500).send(err);
//   }
// });
<<<<<<< HEAD
=======
=======
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//ROUTES
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.get('/', (req, res) => {
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    )
    res.send(html);
});
app.get('/names', (req, res) => {
    res.render(names)
});
app.get('/success', (req, res, next) => {
    res.render('success');
});
app.get('/login', passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login',
  })
);
app.get('/profile',
  function(req, res){
  res.render('profile', { user: req.session.passport.user });
});
//     res.render('login');
// });
app.get('/signup',(req, res, next) => {
    res.render('signup');
});
app.post('/names', (req, res, next) => {
    res.json(names);
});
>>>>>>> master
>>>>>>> master
