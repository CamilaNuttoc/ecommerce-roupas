var mongoose = require("mongoose"),
	Item = require("./models/item.js"),
	Comentario = require("./models/comentario.js"),
	bodyParser = require("body-parser"),
	express = require("express"),
	app = express();

mongoose.connect("mongodb://localhost/ecommerce");
app.use(bodyParser.urlencoded({extended: true}));
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

app.get("/:id", function(req, res){
	Item.findById(req.params.id).populate("comentarios").exec(function(err, item){
		if(err){
			console.log(err);
		}else{
			res.render("show", {item: item})
		}
	});
});

//Cria itens
// for (var i=0; i<12; i++){
// 	var imagem = 'https://ph-cdn4.ecosweb.com.br/Web/posthaus/foto/moda-feminina/vestidos/vestido-floral-com-detalhe-transparente_180831_600_1.jpg';
// 	var titulo = 'Vestido estampado preto';
// 	var precoOriginal = 'R$49,90';
// 	var precoPromocao = 'R$29,90';
// 	var data = [{imagem, titulo, precoOriginal, precoPromocao}];
// 	Item.create(data, function(err, item){
// 	  	if(err){
// 	    	console.log(err);
// 	  	} else {
// 	    	console.log('criou item');
// 	  	}
// 	});
// }

//Cria comentários com avaliações random
// Item.find({}, function(err, itens){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		itens.forEach(function(item){
// 			var commentstest = [];
// 			for(var j=0; j<4; j++){
// 				var autor = 'Nome de usuário';
// 				var avaliacao = Math.floor((Math.random() * 5) + 1);
//     			var texto = 'Comentário demonstrando satisfação ou insatisfação!Curabitur congue faucibus magna quis ullamcorper. Vivamus eget nisl eu elit maximus tempus a quis eros. Suspendisse neque felis, ultrices et turpis ut, suscipit sagittis augue. Sed ac turpis dignissim, pharetra tellus nec, suscipit eros. Aliquam vitae massa risus. Cras at massa nec dolor posuere facilisis. Nunc facilisis ante quis consequat ultricies. Fusce finibus varius lacinia. Aliquam consectetur egestas nunc eget aliquam.';
//     			var comentario = {autor: autor, avaliacao: avaliacao, texto: texto};
//     			commentstest.push(comentario);
//     		}
//     			for(var i=0; i<commentstest.length; i++){
// 				Comentario.create(commentstest[i], function(err, comentarioCriado){
//     			    if(err){
//     			        console.log(err);
//     			    } else {
//     			    	console.log(comentarioCriado);
//     			      	item.comentarios.push(comentarioCriado);
//     			      	console.log(item.comentarios)
//     			   		item.save();
// 				     }
//     			});
// 				}
// 		});
// 	}
// });

app.listen(8080, 'localhost', function(){
	console.log("I'm working, yay!");
});