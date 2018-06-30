const express = require('express');
const router = express.Router();
// const app = express();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

// app.use(function(err, req, res, next) {
//   if (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = router;
