// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var orm 			= require ("../config/orm.js");


// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/api/', function(req, res){

			var data =  orm.listBurgers(function(data){
				res.json(data); });


	});

	// If a user sends data to add a new character...
	app.post('/api/new', function(req, res){

		// Take the request...
		var burger = req.body;

		// Then send it to the ORM to "save" into the DB.
		orm.addBurger(burger, function(data){
		});

	})
}
