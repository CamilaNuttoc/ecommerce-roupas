$(document).ready(function(){

// ======================= Gera nota média de item ========================= //
	
	/* Reúne parâmetros para 
   	   gerar nota média do item */
	var avaliacoes = 0;
	var users = 0;
	
	avaliacoes = $('[class*="avaliacao-user"] .glyphicon-star').length-5;
	users = $('[class*="avaliacao-user"]').length-1;
	
	//Calcula média
	var length = Math.round(avaliacoes/users);
	
	//Chama função para mostrar média na tela
	genStars(length, -1, users);


/* ================= Copia parte de div 'sugestões' para
   					 				 nova div (mostra mesmo conteúdo 
   					 				 nos dois modos diferentes de display) =================*/

	var sugestoes = $('.carrossel-container .content > div');
	sugestoes.slice(0, 2).clone().appendTo('.content2');


// ======================= Zoom em imagem principal ======================== //
	$('.main span').zoom();


/* ================== Muda imagem principal ao  
   					          selecionar outra da área de preview ================== */

	$('.preview img').click(function(){
		var novaImg = $(this).attr('src');
		$('.main span img').attr('src', novaImg);
	});


/* ===================== Anima scroll para avaliações ====================== */

	$(document).on('click', 'a[href^="#avaliacao"]', function (e) {
	  e.preventDefault();
		$('html, body').animate({
		  scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
	});


/* ====================== Abre formulário de login  ======================== */

	var drop = $('#dropdown-user');
	$('#abreLogin').click(function(e){
		e.stopPropagation();
		$('.icons:first-of-type > a').attr('aria-expanded', true);
		$('.icons:first-of-type').addClass('open');
		drop.hide();
		drop.slideDown();
	});

});