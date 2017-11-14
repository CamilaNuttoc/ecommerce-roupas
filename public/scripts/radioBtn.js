$(document).ready(function(){
  $('[class*="cores"] .button > span').click(function(){
    var classe = $(this).attr('class').toString();
    var lastChar = classe.substr(classe.length-1);
    $('[class*="cores'+lastChar+'"] .button > span').css('border', '2px solid #eee');
    $(this).css('border', '2px solid #eee');
    if($(this).hasClass('branco'+lastChar)){
      $(this).css('border', '8px solid #ccc');
    }else{
      $(this).css('border', '8px solid #fff');
    }
  });
  $('[class*="tamanhos"] .button > span').click(function(){
    var classe = $(this).attr('class').toString();
    var lastChar = classe.substr(classe.length-1);
    $('[class*="tamanhos'+lastChar+'"] .button > span > span').css('color', '#aaa');
    $('[class*="tamanhos'+lastChar+'"] .button > span').css('background', '#ddd');
    $(this).css('background', '#fff');
    $(this).find('span').css('color', '#000');
  });
});