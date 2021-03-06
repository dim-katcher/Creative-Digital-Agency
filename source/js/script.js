$(document).ready(function()  {
	$('.header-box-burger').click(function(event)  {
		$('.header__burger,.header-box__colums--3,.header-box').toggleClass('active');	
		$('.main-screen').toggleClass('lock');	
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


