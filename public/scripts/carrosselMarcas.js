var translated = 0;

//Para evitar bugs
$(window).resize(function() {
  	translated = 0;
  	setTransform(translated);
});

//Se clicou para ver marcas à direita
function moveNext(){
	var width = ($( document ).width())+17; //17 vem da scrollbar
	if(width < 992){ //Varia de acordo com tamanho da tela
		translated -= 68;
		if(translated < -240){
			translated = 0;
		}
	}else{
		translated -= 16;
		if(translated < -48){
			translated = 0;
		}
	}
	setTransform(translated);
}

//Se clicou para ver marcas à esquerda
function movePrev(){
	var width = ($( document ).width())+17; //17 vem da scrollbar
	if(width < 992){ //Varia de acordo com tamanho da tela
		translated += 67;
		if(translated > 10){
			translated = -200;
		}
	}else{
		translated += 16;
		if(translated >0){
			translated = -48;
		}
	}
	setTransform(translated);
}

//Posiciona carrossel no lugar certo
function setTransform(valor){
	$('.carousel-nowrap').css({
	  "-webkit-transform": "translateX("+valor+"%)",
	  "-moz-transform": "translateX("+valor+"%)",
	  "-o-transform": "translateX("+valor+"%)",
	  "transform": "translateX("+valor+"%)",
	  "transition": ".8s"
	});
}