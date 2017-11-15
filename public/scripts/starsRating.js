$(document).ready(function(){
  var stored = 0;
  $('.container-stars > [class*="star"]').hover(function(){
    var classe = $(this).attr('class').toString();
    var numStars = Number(classe.substr(4, 1));
    var arrStars = $('[class^="star"]');
    $(arrStars).css('opacity', 0);
    for(var i=0; i<numStars; i++){
      $(arrStars[i]).css('opacity', 1).addClass( "scale" );
    }
  });
  $('.avaliacao-user-online').mouseout(function() {
    var arrStars = $('[class^="star"]');
    var startAt = 0;
    if(stored !== 0){
      startAt = stored;
    }
    $(arrStars).css('opacity', 1);
    for(var i=startAt; i<=5; i++){
      $(arrStars[i]).css('opacity', 0);
    }
  });
  $('[class^="star"]').click(function() {
    var counter = 0;
    var estrelas = $('[class^="star"]');
    for(var i=0; i<estrelas.length; i++){
    if($('.star'+(i+1)).css('opacity') == 1){
        counter++;
      }
    }
    stored = counter;
  });
});