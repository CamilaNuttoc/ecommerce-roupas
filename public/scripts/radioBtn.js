$(document).ready(function(){
  $('[class*="cores"] .button > span').click(function(){
    var classe = $(this).attr('class').toString();
    var lastChar = classe.substr(classe.length-1);
    lastChar = Number(lastChar);
    if(!isNaN(lastChar)){
      $('[class*="cores'+lastChar+'"] .button > span').css('border', '2px solid #eee');
    }else{
      $('.cores .button > span').css('border', '2px solid #eee');
    }
    $(this).css('border', '2px solid #eee');
    if($(this).hasClass('branco'+lastChar) || $(this).hasClass('branco')){
      $(this).css('border', '8px solid #ccc');
    }else{
      $(this).css('border', '8px solid #fff');
    }
    
  });
  $('[class*="tamanhos"] .button > span').click(function(){
    var classe = $(this).attr('class').toString();
    var lastChar = classe.substr(classe.length-1);
    lastChar = Number(lastChar);
    if(!isNaN(lastChar)){
      $('[class*="tamanhos'+lastChar+'"] .button > span > span').css('color', '#aaa');
      $('[class*="tamanhos'+lastChar+'"] .button > span').css('background', '#ddd');
    }else{
      $('.tamanhos .button > span > span').css('color', '#aaa');
    $('.tamanhos .button > span').css('background', '#ddd');
    }
    $(this).css('background', '#fff');
    $(this).find('span').css('color', '#000');
  });
});