// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================

var tableName = "burgers";

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	listBurgers: function(callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},


	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	addBurger: function(burger, callback){

		// Creating a routeName so its easy to search. 
		// var routeName = burger.name.replace(/\s+/g, '').toLowerCase();
		// console.log(routeName);

		var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";

		connection.query(s,[burger.name, true], function(err, result) {
            
            callback(result);
            console.log(result)


        });

	}

	// eatBurger: function(burger, callback){
	// 	// After the burger is devoured, it will set the devour property to false
	// 	var s = "UPDATE" + tableName + "SET devoured = false WHERE burger_name = ?";

	// 		connection.query(s,[burger.name], function(err, result) {
            
 //            callback(result);
 //            console.log(result)


 //        });

	// }


};

module.exports = orm;