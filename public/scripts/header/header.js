$(document).ready(function(){

// =============================== DROPDOWN =============================== //

  //Conteúdo de cada submenu
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
 
  genDropdown();

  //Gera conteúdo do submenu
  function genDropdown(){

    //Percorre categorias
    var arrMenus = ['Feminino', 'Masculino', 'Infantil'];
    for(var i=0; i<arrMenus.length; i++){
  
      //Determina conteúdo de cada categoria
      if(arrMenus[i] == 'Feminino'){
        arrTemp = [0, 1, 2];
        arr = arrFeminino;
      }else if(arrMenus[i] == 'Masculino'){
        arrTemp = [3, 4, 5];
        arr = arrMasculino;
      }else if(arrMenus[i] == 'Infantil'){
        arrTemp = [6, 7];
        arr = arrInfantil;
      }

      //Gera submenus
      for(var j=0; j<arrTemp.length; j++){
        $('.sub-menu-2:eq('+arrTemp[j]+')').html(arr[j]);
      }
  
    }

  }

  //Controla visibilidade de submenus
  $('.dropdown').on('click', function(){
    if($(this).find('.sub-menu-1').css('display') !== 'none'){
      $(this).find('.sub-menu-1').hide();
      return;
    }
      $('.dropdown-menu').hide();
      $(this).find('.sub-menu-1').slideDown();
  });

  //Controla visibilidade de submenus
  $('.sub-menu-1-item').on('click', function(e){
    e.stopPropagation();
    if($(this).find('.sub-menu-2').css('display') !== 'none'){
      $(this).find('.sub-menu-2').hide();
      return;
    }
    $(this).find('.sub-menu-2').animate({width: 'toggle'}, 200, function() {
      $('.sub-menu-2').hide();
      $(this).show();
    });
  });

  $('html').click(function() {
    if(!$('.sub-menu-1 li, .sub-menu-2 li, .dropdown a').is(":focus")){
      $('.dropdown-menu').hide();
    }
  });
  
});