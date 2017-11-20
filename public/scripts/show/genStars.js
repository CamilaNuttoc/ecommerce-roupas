//Gera nota média de item
function genStars(length, num, users){

  var dataStars = '';

  //Calcula quantos ícones de estrela cheia mostrar
  for(var i=0; i< length; i++){
    dataStars += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
  }

  //Calcula quantos ícones de estrela vazia mostrar
  var emptyStars = 5-length;
  for(var i=0; i<emptyStars; i++){
    dataStars += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
  }

  //Se forem notas dos usuários...
  if(num != -1){
  	$('.avaliacao-user'+num).html(dataStars);

  //Se for nota média do item...
  }else{
    dataStars += '<span style="font-size: 20px;">('+users+')</span>';
  	$('.avaliacao-item').html(dataStars);
  }

}