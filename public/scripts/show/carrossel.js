//Para evitar problemas em coordenada x
$(window).resize(function() {
  $('.carrossel').css('transform', 'translateX(0)');   
});

//Mostra itens a direita 
function move(btn){

  var value = 0;

  //Verifica posição atual
  var pos = $('.carrossel').css('transform').split(',')[4];

  //Verifica se deve avançar ou voltar
  if($(btn).attr('class').toString() === 'btnCtrlNext'){

    //Determina novo posicionamento
    if(pos == 0){
      value = -102;
    }else if(pos < 0 && pos > -1200){
      value = -203;
    }else{
      if($(document).width() < 1200 && pos > -2400){
        value = -304;
      }else{
        value = 0;
      }
    }

  }else{

    //Determina novo posicionamento
    if(pos < 0 && pos > -1200){
      value = 0;
    }else if(pos < -1200 && pos > -2400){
      value = -102;
    }else if(pos < -2400 && pos > -3200){
      value = -203;
    }else{
      if($(document).width() < 1200){
        value = -304;
      }else{
        value = -203;
      }
    }
  }

  //Aplica novo positionamento
  $('.carrossel').css('transform', 'translateX('+value+'%)');       

}