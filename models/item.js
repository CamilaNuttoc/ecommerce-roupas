var mongoose = require ("mongoose");

var itemSchema = new mongoose.Schema({
	imagem: String,
	titulo: String,
	precoOriginal: Number,
	precoPromocao: Number,
	comentarios: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comentario"
      }
   ]
});

module.exports = mongoose.model("Item", itemSchema);