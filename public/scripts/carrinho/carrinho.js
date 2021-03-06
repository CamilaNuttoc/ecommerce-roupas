// Declara arrays de valores
var originalVal = [];
var promocaoVal = [];

//Inicializa
function init(){

  /* Preenche variáveis de acordo com
   número de itens no carrinho */
  var length = $('[class*="item-"]').length;
  for(var i=0; i<length; i++){
    originalVal.push(Number($('.original-cons'+i).text().substring(2).replace("R$", '').replace(",", ".")));
    promocaoVal.push(Number($('.promocao-cons'+i).text().substring(2).replace("R$", '').replace(",", ".")));
  }

  //Gera total de acordo com arrays
  mudaTotal();

}

//Muda total da compra quando solicitado
function mudaTotal(){

  var totalPromo = 0;
  var economia = 0;
  var totalOrig = 0;
  var totalParcl = 0;


  //Percorre arr de valores
  for(var i=0; i<originalVal.length; i++){

    //Se valor não estiver vazio...
    if(originalVal[i] !== ''){
      totalPromo += promocaoVal[i];
      totalOrig += originalVal[i];
    }
  }

  economia = totalOrig - totalPromo;
  totalParcl = totalPromo/5;

  //Mostra mudanças ao usuário
  $('.economia').text('Você está economizando R$'+economia.toFixed(2).toString().replace(".", ",")+'!');
  $('.preco-total').text('R$'+totalPromo.toFixed(2).toString().replace(".", ","));
  $('.total-parcelado').text('Em até 5x de R$'+totalParcl.toFixed(2).toString().replace(".", ","));

}

/* Reinicializa valor de variáveis
   para impedir acúmulo */
function reset(num){

    originalVal[num] = Number($('.original-cons'+num).text().substring(2).replace("R$", '').replace(",", "."));
    promocaoVal[num] = Number($('.promocao-cons'+num).text().substring(2).replace("R$", '').replace(",", "."));
    return [originalVal[num], promocaoVal[num]];

}

//Quando jQuery estiver pronto
$(document).ready(function(){

  var length = $('[class*="item-"]').length;

  //Caso quantidade mude
  $("select").change( function(){

    //Seleciona item para ser alterado
    var selElem = $(this).attr('name');

    for(var i=0; i<length; i++){
        //Se for o item de quantidade alterada, então...
      if(selElem == ('quantidade'+i)){
        var quantidade =  Number($('[name="'+selElem+'"] option:selected').val());
        
        //Reinicializa valores
        var valores = reset(i);

        //Redefine novos valores
        original = valores[0] * quantidade;
        promocao = valores[1] * quantidade;

        var originalElem = Number(original.toFixed(2));
        originalVal[i] = originalElem;
        var promocaoElem = Number(promocao.toFixed(2));
        promocaoVal[i] = promocaoElem;

        //Mostra mudanças ao usuário
        $('.original-temp'+i).text('R$'+originalElem.toFixed(2).toString().replace(".", ","));
        $('.promocao-temp'+i).text('R$'+promocaoElem.toFixed(2).toString().replace(".", ","));
        mudaTotal();
      }
    }

  });

  var storedvalue;

  //Deleta item
  $('.trash').click(function(){

    //Determina item a ser deletado
    var index = $(this).val();

    //Retira item dos arrays e mantém espaço
    originalVal.splice(index, 1, '');
    promocaoVal.splice(index, 1, '');

    
    //Remove item
    var item = $('[class*="item-'+index+'"]');
     $(item).slideUp(500, function() {
      $(this).remove();

      //Se ainda houver itens...
      if($('.row-carrinho').length){
        mudaTotal();

      //Caso o carrinho esteja vazio...
      }else{
        $('.row-carrinho-bottom').hide();
        $('.row-titulos').hide();
        $('.row-carrinho-vazio').show();
      }

    });

  });

  //Ao receber input em CEP...
  $("#cep").on('input', function () {

    /* Caso valor máximo de input
       tenha sido atingindo, muda 
       focus para próximo input */
    if($(this).val().length == $(this).attr('maxlength')) {
        $(this).next("input").focus();
    }

  });

  //Mostra form de cupom
  $(".cupom").on('click', function () {

    /* Caso valor máximo de input
       tenha sido atingindo, muda 
       focus para próximo input */
    $('.cupom + form').slideToggle();

  });
  
});