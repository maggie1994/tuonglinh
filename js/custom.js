$(document).ready(function() {
	//Menu
	var menu_active = $('.navi .menu-active');
	var index = 1;
	$('.navi li').click(function(event) {
		menu_active.removeClass('menu-active');
		if($(this).index() + 1 > index){
            $('.content > div:nth-child(' + index + ')').css('animation','left_before 0.5s forwards');
            index = $(this).index() + 1;
            $('.content > div:nth-child(' + index + ')').css('animation','left_after 0.5s forwards');
        }
        if($(this).index() + 1 < index){
            $('.content > div:nth-child(' + index + ')').css('animation','right_before 0.5s forwards');
            index = $(this).index() + 1;
            $('.content > div:nth-child(' + index + ')').css('animation','right_after 0.5s forwards');
        }
        if(index === 1){
        	$('header').css({'background':'transparent'});
		 	$('footer .info li').css({'color':'#c0c0c0', 'opacity': '1'});
        }
        if(index === 2){
        	$('header').css({'background':'#000'});
        	$('footer .info li').css({'color':'#a0a0a0', 'opacity':'1'});
        }
        if(index === 3){
        	$('header').css({'background':'transparent'});
        	$('footer .info li').css({'opacity':'0'});
        }
		menu_active = $(this);
		menu_active.addClass('menu-active');
	});


	var carousel = $("#carousel").flipster({
        style: 'carousel',
        spacing: -0.5,
        nav: true,
        buttons:   true,
    });
});