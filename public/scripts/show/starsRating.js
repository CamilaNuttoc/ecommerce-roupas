$(document).ready(function(){

  var stored = 0;
  var arrStars = $('[class^="star"]');

  //Quando hover em estrela
  $('.container-stars > [class*="star"]').hover(function(){

    //Pega número da estrela em hover e arr de estrelas
    var classe = $(this).attr('class').toString();
    var numStars = Number(classe.substr(4, 1));

    //Zera estrelas preenchidas
    $(arrStars).css('opacity', 0);
    
    //Preenche estrela em hover e anteriores
    for(var i=0; i<numStars; i++){
      $(arrStars[i]).css('opacity', 1);
    }

  });

  //Quando sai de estrela
  $('.avaliacao-user-online').mouseout(function() {

    /* Verifica se já há um 
       número de estrelas escolhido */
    var startAt = 0;
    if(stored !== 0){
      startAt = stored;
    }

    //Preenche todas estrelas
    $(arrStars).css('opacity', 1);

    //Zera estrelas para chegar a número salvo
    for(var i=startAt; i<=5; i++){
      $(arrStars[i]).css('opacity', 0);
    }

  });

  //Salva número de estrelas
  $('[class^="star"]').click(function() {

    //Inicializa counter
    var counter = 0;

    //Soma a counter a cada estrela preenchida
    for(var i=0; i<arrStars.length; i++){
      if($('.star'+(i+1)).css('opacity') == 1){
          counter++;
        }
    }

    //Salva valor de counter em stored
    stored = counter;

  });

});