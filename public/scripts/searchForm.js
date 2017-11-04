$(document).ready(function(){
 var width = ($(window).width()+17);
 if(width > 768 && width < 935){
   $('#searchBtn').show();
 }
  $(window).resize(function(){
    var width = ($(window).width()+17);
    if(width > 935 || width < 768){
       $('#search-form').css({'display': ''});
       $('#search').css({'width': ''});
       $('.categorias').css({'display': ''});
       $('#searchBtn').hide();
    }else{
      if(!($('#search').is(':visible'))){
         $('#searchBtn').show();
       }
    }
  });
  $('#searchBtn').on('click', function(){
     if(!($('#search-form').is(':visible'))){
       $('.categorias').hide();
       $('#search-form').show();
       $('#search').css({'width': '380px'});
       $('#searchBtn').hide();
     }else{
       $('#search-form').css({'display': ''});
       $('#search').css({'width': ''});
       $('.categorias').css({'display': ''});
       $('#searchBtn').show();
     }
  });
});