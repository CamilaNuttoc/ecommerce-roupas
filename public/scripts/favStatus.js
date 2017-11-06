function favStatus(btn){
  var icone = $(btn).find('.glyphicon');
  var texto = $(btn).find('.favText');
  if(icone.hasClass('glyphicon-heart-empty')){
    icone.removeClass('glyphicon-heart-empty');
    icone.addClass('glyphicon-heart');
    texto.fadeIn(0);
    texto.animate({bottom: '35px'});
    texto.fadeOut();
  }else{
    icone.addClass('glyphicon-heart-empty');
    icone.removeClass('glyphicon-heart');
    texto.css({bottom: '25px'});
  }
}