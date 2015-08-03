// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var nodemailer = require("nodemailer");

// email =========================
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "trippinwithjamie@gmail.com",
		pass: "trip1345pin"
	},
});

var buildMessage = function(name, email, phone, text) {
	var query = "Name: " + name + "\n" +
				"Email: " + email + "\n" +
				"Phone: " + phone + "\n" +
				"Message: " + text + "\n";
	return query;
}

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

app.get('/send', function(req, res) {
	var mailOptions={
		to : "trippinwithjamie@gmail.com",
		subject : "Travel Inquiry from " + req.query.name,
		text : buildMessage(req.query.name, req.query.email, req.query.phone, req.query.message)
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
			res.status(500).send('Error sending the message');
		} else {
			console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
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
	console.log("Handling a 404 error");
	if(err.status !== 404) {
		return next();
	}
	res.send(err.message || '** no unicorns here **');
});

// listen (start app with node server.js) ======================================
var portNumber = 80;
app.listen(portNumber);
console.log("App listening on port " + portNumber);
