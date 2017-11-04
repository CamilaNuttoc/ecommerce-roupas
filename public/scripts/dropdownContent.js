$(document).ready(function(){
  var arrFeminino = [
    '<ul><li><a href="#">Blusas</a></li><li><a href="#">Vestidos</a></li><li><a href="#">Calças</a></li><li><a href="#">Praia</a></li><li><a href="#">Camisas</a></li><li><a href="#">Casacos</a></li><li><a href="#">Coletes</a></li><li><a href="#">Macacões</a></li><li><a href="#">Pijamas</a></li><li><a href="#">Regatas</a></li><li><a href="#">Saias</a></li><li><a href="#">Shorts</a></li></ul>', 
    '<ul><li><a href="#">Carteiras</a></li><li><a href="#">Bijoux</a></li><li><a href="#">Bolsas</a></li><li><a href="#">Cintos</a></li><li><a href="#">Chapéus</a></li><li><a href="#">Óculos</a></li><li><a href="#">Relógios</a></li></ul>',
    '<ul><li><a href="#">Sapatilhas</a></li><li><a href="#">Tênis</a></li><li><a href="#">Botas</a></li><li><a href="#">Chinelas</a></li><li><a href="#">Salto Alto</a></li></ul>', 
    '<ul><li><a href="#">Veja todos</a></li></ul>'
  ];
  var arrMasculino = [
    '<ul><li><a href="#">Camisetas</a></li><li><a href="#">Polos</a></li><li><a href="#">Calças</a></li><li><a href="#">Bermudas</a></li><li><a href="#">Camisas</a></li><li><a href="#">Casacos</a></li><li><a href="#">Pijamas</a></li><li><a href="#">Regatas</a></li><li><a href="#">Sungas</a></li></ul>', 
    '<ul><li><a href="#">Bonés</a></li><li><a href="#">Carteiras</a></li><li><a href="#">Cintos</a></li><li><a href="#">Gorros</a></li><li><a href="#">Relógios</a></li><li><a href="#">Óculos</a></li><li><a href="#">Cachecóis</a></li><li><a href="#">Chapéus</a></li></ul>',
    '<ul><li><a href="#">Tênis</a></li><li><a href="#">Chinelos</a></li><li><a href="#">Sapatos</a></li></ul>', 
    '<ul><li><a href="#">Veja todos</a></li></ul>'
  ];
  var arrInfantil = [
    '<ul><li><a href="#">Bermudas</a></li><li><a href="#">Camisetas</a></li><li><a href="#">Camisas</a></li><li><a href="#">Polos</a></li></ul>', 
    '<ul><li><a href="#">Calças</a></li><li><a href="#">Camisetas</a></li><li><a href="#">Casacos</a></li><li><a href="#">Vestidos</a></li><li><a href="#">Saias</a></li><li><a href="#">Shorts</a></li></ul>'
  ];

  $('.dropdown-menu').click(function(e) {
    e.stopPropagation();
  });

  $('#dropdown-feminino .main-bloco li:first-of-type').css({'background': '#aaa'});
  $('.sub-bloco-feminino').html(arrFeminino[0]);
  $('#dropdown-masculino .main-bloco li:first-of-type').css({'background': '#aaa'});
  $('.sub-bloco-masculino').html(arrMasculino[0]);
  $('#dropdown-infantil .main-bloco li:first-of-type').css({'background': '#aaa'});
  $('.sub-bloco-infantil').html(arrInfantil[0]);

  $('#dropdown-feminino .main-bloco li').click(function(){
    $('#dropdown-feminino .main-bloco li').css({'background': ''});
    $(this).css({'background': '#aaa'});
    if($(this).text() == 'Roupas'){
      $('.sub-bloco-feminino').html(arrFeminino[0]);
    }else if($(this).text() == 'Acessórios'){
      $('.sub-bloco-feminino').html(arrFeminino[1]);
    }else if($(this).text() == 'Calçados'){
      $('.sub-bloco-feminino').html(arrFeminino[2]);
    }else if($(this).text() == 'Íntimas'){
      $('.sub-bloco-feminino').html(arrFeminino[3]);
    }
  });

  $('#dropdown-masculino .main-bloco li').click(function(){
    $('#dropdown-masculino .main-bloco li').css({'background': ''});
    $(this).css({'background': '#aaa'});
    if($(this).text() == 'Roupas'){
      $('.sub-bloco-masculino').html(arrMasculino[0]);
    }else if($(this).text() == 'Acessórios'){
      $('.sub-bloco-masculino').html(arrMasculino[1]);
    }else if($(this).text() == 'Calçados'){
      $('.sub-bloco-masculino').html(arrMasculino[2]);
    }else if($(this).text() == 'Íntimas'){
      $('.sub-bloco-masculino').html(arrMasculino[3]);
    }
  });
  
  $('#dropdown-infantil .main-bloco li').click(function(){
    $('#dropdown-infantil .main-bloco li').css({'background': ''});
    $(this).css({'background': '#aaa'});
    if($(this).text() == 'Meninos'){
      $('.sub-bloco-infantil').html(arrInfantil[0]);
    }else if($(this).text() == 'Meninas'){
      $('.sub-bloco-infantil').html(arrInfantil[1]);
    }
  });
});