var mongoose = require("mongoose"),
	Item = require("./models/item.js"),
	express = require("express"),
	app = express();

mongoose.connect("mongodb://localhost/ecommerce");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	Item.find({}, function(err, itens){
		if(err){
			console.log(err);
		}else{
			res.render("home", {itens: itens});
		}
	});
});
// for (var i=0; i<12; i++){
// 	var imagem = 'https://ph-cdn4.ecosweb.com.br/Web/posthaus/foto/moda-feminina/vestidos/vestido-floral-com-detalhe-transparente_180831_600_1.jpg';
// 	var titulo = 'Vestido estampado preto';
// 	var precoOriginal = 'R$49,90';
// 	var precoPromocao = 'R$29,90';
// 	var data = [{imagem, titulo, precoOriginal, precoPromocao}];
// 	Item.create(data, function(err, item){
// 	  if(err){
// 	    console.log(err)
// 	  } else {
// 	    console.log("criou item");
// 	  }
// 	});
// }
app.listen(8080, 'localhost', function(){
	console.log("I'm working, yay!");
});