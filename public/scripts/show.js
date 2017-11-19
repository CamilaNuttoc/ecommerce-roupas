$('.after-item1 .content > div').slice(0, 1).clone().appendTo('.content2');

$('.preview img').click(function(){
	var novaImg = $(this).attr('src');
	$('.main span img').attr('src', novaImg);
});
$(document).ready(function(){
  	$('.main span').zoom();
})
var avaliacoes = 0;
var users = 0;
avaliacoes = $('[class*="avaliacao-user"] .glyphicon-star').length-5;
users = $('[class*="avaliacao-user"]').length-1;
var length = Math.round(avaliacoes/users);
genStars(length, -1, users);

$(document).on('click', 'a[href^="#avaliacao"]', function (e) {
  e.preventDefault();
	$('html, body').animate({
	  scrollTop: $($.attr(this, 'href')).offset().top
	}, 800);
});

var dropUser = $('#dropdown-user');

$('#abreLogin').click(function(e){
	e.stopPropagation();
	$('.icons:first-of-type > a').attr('aria-expanded', true);
	$('.icons:first-of-type').addClass('open');
	dropUser.hide();
	dropUser.slideDown();
});