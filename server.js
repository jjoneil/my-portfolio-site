//____dependencies_______
//_______________________

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
}));

//____middleware_________
//_______________________

app.get("/", function(req, res){
	res.sendFile(__dirname + "/main.html")
});

//____handle errors_______
//________________________

app.use(function(req, res, next){
	console.log(err);
	res.status(404);
	res.send("404 File Not Found");
});

app.use(function(err, req, res, next){
	console.log(err);
	res.status(500);
	res.send("500 Internal Server Error");
});

app.listen(8080, function(){
	console.log("Server runnin'");
});

//__________________________