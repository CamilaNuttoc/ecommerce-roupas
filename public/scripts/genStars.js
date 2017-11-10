function genStars(length, num, users){
  var dataStars = '';
  for(var i=0; i< length; i++){
    dataStars += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
  }
  var emptyStars = 5-length;
  for(var i=0; i<emptyStars; i++){
    dataStars += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
  }
  if(num != -1){
  	$('.avaliacao-user'+num).html(dataStars);
  }else{
    dataStars += '<span style="font-size: 20px;">('+users+')</span>';
  	$('.avaliacao-item').html(dataStars);
  }
}