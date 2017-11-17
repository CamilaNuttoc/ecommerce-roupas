$(document).ready(function(){

 var width = ($(window).width()+17);
 if(width > 768 && width < 992){
   $('#searchBtn').show();
 }
  $(window).resize(function(){
    var width = ($(window).width()+17);
    if(width > 992 || width < 768){
       $('#search-form').css({'display': ''});
       $('#search').css({'width': ''});
       $('.categorias').css({'display': ''});
       $('#searchBtn').hide();
       $('#cancelBtn').hide();
       $('#searchBtn').parent().css('width', 'auto');
    }else{
      if(!($('#search').is(':visible'))){
         $('#searchBtn').show();
       }
    }
  });
  $('#searchBtn').on('click', function(){
    $('.categorias').hide();
    $('#search-form').show();
    $('#search').css({'width': '340px'});
    $('#searchBtn').hide();
    $('#cancelBtn').show();
    $(this).parent().css('width', '450px');
  });
  $('#cancelBtn').on('click', function(){
    $('.categorias').show();
    $('#search-form').hide();
    $('#search').css({'width': ''});
    $('#searchBtn').show();
    $('#cancelBtn').hide();
    $(this).parent().css('width', 'auto');
  });
});