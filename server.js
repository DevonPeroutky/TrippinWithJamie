// server.js
var stringHelpers = require('./utilities/stringHelpers.js');
var cassandraHelpers = require('./utilities/cassandraHelpers.js');
var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser')
const cassandra = require('cassandra-driver');

// ---------------------------
// Initialize Server
// ---------------------------
var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ---------------------------
// API 
// ---------------------------
app.post('/api/v1/addLink/:link_id/', (req, res) => {
	var board_id = req.params.board_id;
	var feature_id = req.params.feature_id;
	console.log("Board_id: " + board_id, "feature_id:" + feature_id);

	//Connect to the cluster
	const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'dev'});
	const query = stringHelpers.parse("UPDATE election SET votes = votes + 1 WHERE feature_id = ? AND board_id = ?");

	client.execute(query, [feature_id, board_id], { prepare: true }, function (err, result) {
		console.log("Connected to Cassandra. Executing query: %s", query);
		if(!err) { 
			res.status(200).send("INSERT successful");
		} else {
			console.log(err);
			res.status(500).send(["Error"]);			
		}
		client.shutdown();
	});
});

app.get('/api/v1/links/', (req, res) => {
	//Connect to the cluster
	const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'dev'});
	const query = stringHelpers.parse("SELECT * FROM boards");

	// Read users and print to console
	client.execute(query, function (err, result) {
		if(!err) {
			console.log("Connected to Cassandra. Executing query: %s", query);	
			if ( result.rows.length > 0 ) {
				console.log(result.rows);
				res.status(200).send(result.rows);
			} else {
				console.log("No results");
				res.status(404).send(["Sorry"]);
			}
		} else {
			console.log(err);
			res.status(500).send(["Error"]);
		}
		client.shutdown();
	});
});

app.get('/', function (req, res) {
  res.send('Hello World!\n');
})

app.get('*', function(req, res) {
  console.log("DID NOT CATCH");
  res.status(404).send(["WHAT ARE YOU TRYING TO DO??!?!?!?"]);
});

// ---------------------------
// Run the Server
// ---------------------------
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), function() {
  console.log('Production Express server running at localhost:' + app.get('port'));
});
