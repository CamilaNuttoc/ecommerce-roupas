//Para evitar problemas em x
$( window ).resize(function() {
  $('.carrossel').css('transform', 'translateX(0)');   
});

function next(){
  var pos = $('.carrossel').css('transform').split(',')[4];
  var value = 0;
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
  $('.carrossel').css('transform', 'translateX('+value+'%)');         
}
function previous(){
  var pos = $('.carrossel').css('transform').split(',')[4];
  var value = 0;
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
  $('.carrossel').css('transform', 'translateX('+value+'%)');
}