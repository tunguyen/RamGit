'use strict';

// Module dependencies.
var application_root = __dirname,
	express = require( 'express' ), //Web framework
	http = require( 'http'),
	path = require( 'path' ); //Utilities for dealing with file paths
	// mongoose = require( 'mongoose' ); //MongoDB integration

//Create server
var app = module.exports = express();
app.set('view engine', 'hjs');
// //Connect to database
// mongoose.connect( 'mongodb://localhost/properties' );

// //Schemas
// var PropertySchema = new mongoose.Schema({
// 	id: String,
// 	name: String,
// 	releaseDate: Date,
// 	contactInformation: [{
// 		address: {
// 			line1: String,
// 			line2: String,
// 			line3: String,
// 			city: String,
// 			stateProvince: String,
// 			postalCode: String,
// 			country: String
// 		},
// 		phones: [ String ]
// 	}],
// 	descriptions: [{
// 		type: {type: String},
// 		text: String
// 	}]
// });

// //Models
// var Property = mongoose.model( 'Property', PropertySchema );

// Configure server
app.configure( function() {
	//parses request body and populates request.body
	app.use( express.bodyParser() );

	//checks request.body for HTTP method overrides
	app.use( express.methodOverride() );

	//perform route lookup based on url and HTTP method
	app.use( app.router );

	//Where to serve static content
	app.use( express.static( path.join( application_root, 'public') ) );

	//Show all errors in development
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes
var routes = require('./routes');

//Start server
var port = 3000;
app.listen( port, function() {
	console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});






