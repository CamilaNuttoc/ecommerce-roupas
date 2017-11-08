var mongoose = require ("mongoose");

var itemSchema = new mongoose.Schema({
	imagem: String,
	titulo: String,
	precoOriginal: String,
	precoPromocao: String
});

module.exports = mongoose.model("Item", itemSchema);