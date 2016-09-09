var express = require('express');
var babelify = require('babelify');
var browserify = require('browserify-middleware');
var less = require('less-middleware');
var nunjucks = require('nunjucks');
var config = require('./client/config');
var session = require('express-session');
var bodyParser = require('body-parser');
// initialise express
var app = express();

// use nunjucks to process view templates in express
nunjucks.configure('server/templates/views', {
    express: app
});

// less will automatically compile matching requests for .css files
app.use(less('public'));
// public assets are served before any dynamic requests
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: 'mi',
	// genid:function(){
	// 	const d = new Date();
	// 	var m = d.getMinutes().toString();
	// 	m = m.replace(/^(\d){1}$/,'0$1');
    //
	// 	var s = d.getSeconds().toString();
	// 	s = s.replace(/^(\d){1}$/,'0$1');
	// 	return m + s;
	// },
	// cookie: { maxAge: 3000e3 },
}));

// common packages are precompiled on server start and cached
app.get('/js/' + config.common.bundle, browserify(config.common.packages, {
	cache: true,
	precompile: true
}));

// any file in /client/scripts will automatically be browserified,
// excluding common packages.
app.use('/js', browserify('./client/scripts', {
	external: config.common.packages,
	transform: [babelify.configure({
		plugins: ['object-assign']
	})]
}));

/*
	set up any additional server routes (api endpoints, static pages, etc.)
	here before the catch-all route for index.html below.
*/
function restrictFn(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.send("未登录")
	}
}
app.get('/restrict', restrictFn, function(req, res) {
	res.send('<p style="color: #00ff00;">已经登录</p>');
});
var users = {
	tj: { name: 'tj', password: 'tj' },
	zy: { name: 'zy', password: 'zy' },
};
function authenticate(userName, password, fn) {
	console.log('authecticating……');
	if(userName === 'zy' && password === 'zy'){
		return fn(null, users[userName]);
	}else{
		fn(new Error('invalid password'));
	}
}
app.post('/login',function(req, res){
	authenticate(req.body.userName, req.body.password,(err, user) => {
		if(user){
			req.session.regenerate(function(){
				req.session.user = user;
				res.redirect('/restrict');
			});
		}else{
			res.send('server  get not login');
		}
	})
});

app.get('*', function(req, res) {
	// this route will respond to all requests with the contents of your index
	// template. Doing this allows react-router to render the view in the app.
    res.render('index.html');
});

// start the server
var server = app.listen(process.env.PORT || 5000, function() {
	console.log('\nServer ready on port %d\n', server.address().port);
});
