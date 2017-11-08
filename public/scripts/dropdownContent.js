$(document).ready(function(){
  var arrFeminino = [
    '<li><a href="#">Blusas</a></li><li><a href="#">Vestidos</a></li><li><a href="#">Calças</a></li><li><a href="#">Praia</a></li><li><a href="#">Camisas</a></li><li><a href="#">Casacos</a></li><li><a href="#">Coletes</a></li><li><a href="#">Macacões</a></li><li><a href="#">Pijamas</a></li><li><a href="#">Regatas</a></li><li><a href="#">Saias</a></li><li><a href="#">Shorts</a></li>', 
    '<li><a href="#">Carteiras</a></li><li><a href="#">Bijoux</a></li><li><a href="#">Bolsas</a></li><li><a href="#">Cintos</a></li><li><a href="#">Chapéus</a></li><li><a href="#">Óculos</a></li><li><a href="#">Relógios</a></li>',
    '<li><a href="#">Sapatilhas</a></li><li><a href="#">Tênis</a></li><li><a href="#">Botas</a></li><li><a href="#">Chinelas</a></li><li><a href="#">Salto Alto</a></li>', 
  ];
  var arrMasculino = [
    '<li><a href="#">Camisetas</a></li><li><a href="#">Polos</a></li><li><a href="#">Calças</a></li><li><a href="#">Bermudas</a></li><li><a href="#">Camisas</a></li><li><a href="#">Casacos</a></li><li><a href="#">Pijamas</a></li><li><a href="#">Regatas</a></li><li><a href="#">Sungas</a></li>', 
    '<li><a href="#">Bonés</a></li><li><a href="#">Carteiras</a></li><li><a href="#">Cintos</a></li><li><a href="#">Gorros</a></li><li><a href="#">Relógios</a></li><li><a href="#">Óculos</a></li><li><a href="#">Cachecóis</a></li><li><a href="#">Chapéus</a></li>',
    '<li><a href="#">Tênis</a></li><li><a href="#">Chinelos</a></li><li><a href="#">Sapatos</a></li>'
  ];
  var arrInfantil = [
    '<li><a href="#">Bermudas</a></li><li><a href="#">Camisetas</a></li><li><a href="#">Camisas</a></li><li><a href="#">Polos</a></li>', 
    '<li><a href="#">Calças</a></li><li><a href="#">Camisetas</a></li><li><a href="#">Casacos</a></li><li><a href="#">Vestidos</a></li><li><a href="#">Saias</a></li><li><a href="#">Shorts</a></li>'
  ];
 
 function genDropdown(submenu, arr){
  if(arr.length > 2){
    if(submenu == 'Roupas'){
      $('.sub-menu').html(arr[0]);
    }else if(submenu == 'Acessórios'){
      $('.sub-menu').html(arr[1]);
    }else if(submenu == 'Calçados'){
      $('.sub-menu').html(arr[2]);
    }
  }else{
    if(submenu == 'Meninos'){
      $('.sub-menu').html(arr[0]);
    }else if(submenu == 'Meninas'){
      $('.sub-menu').html(arr[1]);
    }
  }
 }
  $('#dropdown-feminino .t-sub-menu a').hover(function() {
    var submenu = $(this).contents().text();
    var arr = arrFeminino;
    genDropdown(submenu, arr);
  });

  $('#dropdown-masculino .t-sub-menu a').hover(function() {
    var submenu = $(this).contents().text();
    var arr = arrMasculino;
    genDropdown(submenu, arr);
  });

  $('#dropdown-infantil .t-sub-menu a').hover(function() {
    var submenu = $(this).contents().text();
    var arr = arrInfantil;
    genDropdown(submenu, arr);
  });
});