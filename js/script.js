$(document).ready(function()  {
	$('.header__burger').click(function(event)  {
		$('body').toggleClass('lock');	
	});  
});

$(window).scroll(function(){
	$('.header').toggleClass('background', $(this).scrollTop() > 0);
});





function ibg(){

	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
	
	ibg();


