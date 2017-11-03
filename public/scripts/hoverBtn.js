$(document).ready(function(){
	$('.thumbnail').hover(function(){
		$(this).find('.comprarBtn').addClass('btn-warning');
	}, function(){
		$(this).find('.comprarBtn').removeClass('btn-warning');
	});
});