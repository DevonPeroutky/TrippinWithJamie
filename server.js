// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================
console.log(__dirname);
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users

// Angular Route  ==================================
app.get('/', function(req, res) {
    res.sendfile('app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// Error Handling  ==================================
app.get('*', function(req, res, next) {
	console.log("404 error!");
	var err = new Error();
	err.status = 404;
	next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
	console.log("USE");
	if(err.status !== 404) {
		return next();
	}
	res.send(err.message || '** no unicorns here **');
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");