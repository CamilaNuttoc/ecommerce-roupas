//Controla status de coração de favorito
function favStatus(btn){

  //Encontra 
  var icone = $(btn).find('.glyphicon');
  var texto = $(btn).find('.favText');

  //Se não estiver favoritado...
  if(icone.hasClass('glyphicon-heart-empty')){
    icone.removeClass('glyphicon-heart-empty');
    icone.addClass('glyphicon-heart');
    texto.fadeIn(0).animate({bottom: '35px'}).fadeOut();
    return;
  }
  
  ///Se estiver favoritado, desfavorita.
  icone.addClass('glyphicon-heart-empty');
  icone.removeClass('glyphicon-heart');
  texto.css({bottom: '25px'});

}