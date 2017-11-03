var express = require("express"),
	app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.listen(8080, 'localhost', function(){
	console.log("I'm working, yay!");
});