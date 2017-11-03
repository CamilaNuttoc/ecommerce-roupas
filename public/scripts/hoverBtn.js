$(document).ready(function(){
	$('.thumbnail').hover(function(){
		$(this).find('.comprarBtn').toggleClass('btn-warning');
	});
});