var mongoose = require ("mongoose");

var comentarioSchema = new mongoose.Schema({
	autor: String,
	avaliacao: String,
	texto: String
});

module.exports = mongoose.model("Comentario", comentarioSchema);