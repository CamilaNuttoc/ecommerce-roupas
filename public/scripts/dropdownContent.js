$(document).ready(function(){
  var arrFeminino = [
    '<li><a href="/categoria">Blusas</a></li><li><a href="/categoria">Vestidos</a></li><li><a href="/categoria">Calças</a></li><li><a href="/categoria">Praia</a></li><li><a href="/categoria">Camisas</a></li><li><a href="/categoria">Casacos</a></li><li><a href="/categoria">Coletes</a></li><li><a href="/categoria">Macacões</a></li><li><a href="/categoria">Pijamas</a></li><li><a href="/categoria">Regatas</a></li><li><a href="/categoria">Saias</a></li><li><a href="/categoria">Shorts</a></li>', 
    '<li><a href="/categoria">Carteiras</a></li><li><a href="/categoria">Bijoux</a></li><li><a href="/categoria">Bolsas</a></li><li><a href="/categoria">Cintos</a></li><li><a href="/categoria">Chapéus</a></li><li><a href="/categoria">Óculos</a></li><li><a href="/categoria">Relógios</a></li>',
    '<li><a href="/categoria">Sapatilhas</a></li><li><a href="/categoria">Tênis</a></li><li><a href="/categoria">Botas</a></li><li><a href="/categoria">Chinelas</a></li><li><a href="/categoria">Salto Alto</a></li>', 
  ];
  var arrMasculino = [
    '<li><a href="/categoria">Camisetas</a></li><li><a href="/categoria">Polos</a></li><li><a href="/categoria">Calças</a></li><li><a href="/categoria">Bermudas</a></li><li><a href="/categoria">Camisas</a></li><li><a href="/categoria">Casacos</a></li><li><a href="/categoria">Pijamas</a></li><li><a href="/categoria">Regatas</a></li><li><a href="/categoria">Sungas</a></li>', 
    '<li><a href="/categoria">Bonés</a></li><li><a href="/categoria">Carteiras</a></li><li><a href="/categoria">Cintos</a></li><li><a href="/categoria">Gorros</a></li><li><a href="/categoria">Relógios</a></li><li><a href="/categoria">Óculos</a></li><li><a href="/categoria">Cachecóis</a></li><li><a href="/categoria">Chapéus</a></li>',
    '<li><a href="/categoria">Tênis</a></li><li><a href="/categoria">Chinelos</a></li><li><a href="/categoria">Sapatos</a></li>'
  ];
  var arrInfantil = [
    '<li><a href="/categoria">Bermudas</a></li><li><a href="/categoria">Camisetas</a></li><li><a href="/categoria">Camisas</a></li><li><a href="/categoria">Polos</a></li>', 
    '<li><a href="/categoria">Calças</a></li><li><a href="/categoria">Camisetas</a></li><li><a href="/categoria">Casacos</a></li><li><a href="/categoria">Vestidos</a></li><li><a href="/categoria">Saias</a></li><li><a href="/categoria">Shorts</a></li>'
  ];
 
 function genDropdown(content, arr, submenu){
  if(arr.length > 2){
    arrTemp = [0, 1, 2];
    if(submenu == 'masculino'){
      arrTemp = [3, 4, 5];
    }
    if(content == 'Roupas'){
      $('.sub-menu:eq('+arrTemp[0]+')').html(arr[0]);
    }else if(content == 'Acessórios'){
      $('.sub-menu:eq('+arrTemp[1]+')').html(arr[1]);
    }else if(content == 'Calçados'){
      $('.sub-menu:eq('+arrTemp[2]+')').html(arr[2]);
    }
  }else{
    if(content == 'Meninos'){
      $('.sub-menu:eq(6)').html(arr[0]);
    }else if(content == 'Meninas'){
      $('.sub-menu:eq(7)').html(arr[1]);
    }
  }
 }
  $('#dropdown-feminino .t-sub-menu a').click(function() {
    var content = $(this).contents().text();
    var submenu = 'feminino';
    var arr = arrFeminino;
    genDropdown(content, arr, submenu);
  });

  $('#dropdown-masculino .t-sub-menu a').click(function() {
    var content = $(this).contents().text();
    var arr = arrMasculino;
    var submenu = 'masculino';
    genDropdown(content, arr, submenu);
  });

  $('#dropdown-infantil .t-sub-menu a').click(function() {
    var content = $(this).contents().text();
    var arr = arrInfantil;
    var submenu = '';
    genDropdown(content, arr, submenu);
  });
  $('.t-sub-menu').click(function(e){
    e.stopPropagation();
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $(this).children('ul').html('');
      return;
    }
    $('.t-sub-menu').removeClass('open');
    $(this).addClass('open');
  });
   if($(window).width() < 768){
    $('.t-sub-menu > a > span').removeClass('caret-right');
  }
  $(window).resize(function(){
    if($(window).width() < 768){
      $('.t-sub-menu > a > span').removeClass('caret-right');
    }else{
      $('.t-sub-menu > a > span').addClass('caret-right');
    }
  });
});