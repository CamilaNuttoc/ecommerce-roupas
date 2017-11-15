$(document).ready(function(){
  if($(document).width() >= 768){
    $('.hidden-filtro').css('display', 'block');
  }
  $( window ).resize(function() {
    if($(document).width() >= 768){
      $('.hidden-filtro').css('display', 'block');
      $('.hidden-filtro').removeClass('shown-filtro');
      $('.row-categoria h3').css('text-align', 'left');
    }else{
      $('.hidden-filtro').css('display', 'none');
      $('.filtroBtn').text('Filtrar');
    }
  });
  $('.toggleFiltro').click(function(){
    $(this).parent().find('.openClose').toggle();
    var symbol = $(this).parent().find('.expand');
    if(symbol.text() == "-"){
      symbol.text('+');
    }else{
      symbol.text('-');
    }
  });
  $('.filtroBtn').click(function(){
    if($(this).text() == 'Filtrar'){
      $(this).text('Cancelar');
    }else{
      $(this).text('Filtrar');
      $(this).blur();
    }
    $('.row-categoria h3').css('text-align', 'center');
    $('.hidden-filtro').toggleClass('shown-filtro');
    $('.hidden-filtro').slideToggle();
  });
  $('.filtrarBtn').click(function(){
    if(($(window).width()) < 768){
      $('.hidden-filtro').slideToggle();
      $('.hidden-filtro').toggleClass('shown-filtro');
      $('.filtroBtn').text('Filtrar');
    }
    
  });
});