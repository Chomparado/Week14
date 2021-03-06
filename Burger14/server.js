var express 	= require('express');
var bodyParser 	= require('body-parser');
var methodOverride = require('method-override')

var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require("./views/routes/api-routes.js")(app)
require("./views/routes/html-routes.js")(app)

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})