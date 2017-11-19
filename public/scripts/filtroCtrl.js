$(document).ready(function(){

  /* Quando clica no "+/-" ou no 
     título da opção de filtro */
  $('.toggleFiltro').click(function(){

    //Mostra/esconde opções daquele filtro
    $(this).parent().find('.openClose').toggle();

    //Muda "+" ou "-"
    var symbol = $(this).parent().find('.expand');
    if(symbol.text() == "-"){
      symbol.text('+');
      return
    }
    symbol.text('-');

  });

  /* Ao clicar em botão para 
    abrir filtros em mobile */
  $('.filtroBtn').click(function(){

    //Mostra/esconde filtros
    $('.hidden-filtro').slideToggle().toggleClass('shown-filtro');

    //Muda texto do botão
    if($(this).text() == 'Filtrar'){
      $(this).text('Cancelar');
      return
    }
    $(this).text('Filtrar');

  });

  //Ao clicar em botão de aplicar filtros  
  $('.filtrarBtn').click(function(){

    //Fecha área de filtro em caso de mobile
    if(($(window).width()) < 768){
      $('.hidden-filtro').slideToggle();
      $('.hidden-filtro').toggleClass('shown-filtro');
      $('.filtroBtn').text('Filtrar');
    }

  });

  //Caso width da janela seja alterada
  $(window).resize(function() {

    //Caso não seja mobile
    if($(document).width() >= 768){
      $('.hidden-filtro').removeClass('shown-filtro');
      $('.hidden-filtro').css('display', 'block');
      return;
    }
    //Caso seja mobile
    $('.filtroBtn').text('Filtrar');
    $('.hidden-filtro').toggleClass('shown-filtro');
    $('.hidden-filtro').css('display', 'none');

  });

});