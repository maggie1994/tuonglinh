$(document).ready(function(){

	//Animation for Begin
	$('.img-tomato').css({'transform':'translateY(0%)', 'transition-delay':'0.5s'});
	$('.img-left').css({'transform':'translateX(40px)', 'transition-delay':'0.5s'});
	$('.img-knif').css({'transform':'translateX(40px) translateY(0%)', 'transition-delay':'0.5s'});
	$('.img-carrot').css({'transform':'translateY(30px)', 'transition-delay':'0.5s'});
	$('.img-right').css({'transform':'translateX(0%) translateY(0%)', 'transition-delay':'0.5s'});
	$('.img-pea1').css({'opacity':'1', 'transition-delay':'1.5s'});
	$('.img-pea').css({'opacity':'1', 'transition-delay':'1.5s'});
	$('.header').css({'transform':'translateY(0%)', 'transition-delay':'1.5s'});

	var num_title = $('.title h1 span').size();
	var delay_title = 2.5;
	for(var i = 1; i <= num_title; i++){
		delay_title = delay_title + 0.1;
		$('.title h1 span:nth-child(' + i + ')').css({'opacity':'1', 'transform':'translateX(0px)', 'transition-delay': delay_title + 's'});
	}
	delay_title = delay_title + 0.5;
	$('.title h2').css({'opacity':'1', 'transform':'scale(1)', 'transition-delay': delay_title + 's'});


	//Animation for Scroll
	var menu_active = $('#home');
	$(window).scroll(function(){
		if ($(this).scrollTop() > $('.bg-header').height() - 50) {
	    	$('.header').css('animation','header_fixed 0.5s forwards');
	      	$('.header').addClass('header-scroll');
	  	}
	  	else{
	  		$('.header').css({'animation':'header_static 0.5s forwards', 'transition':'0s', 'transition-delay':'0s'});
	      	$('.header').removeClass('header-scroll');
	  	}
	  	if($(this).scrollTop() <= $('.bg-header').height()){
	  		menu_active.removeClass('active');
			menu_active = $('#home');
			menu_active.addClass('active');
	  	}
		if ($(this).scrollTop() > $('.about-us-section').offset().top - 100){
			menu_active.removeClass('active');
			menu_active = $('#about');
			menu_active.addClass('active');

			// $('.img-group').css({'opacity':'1', 'transform':'translateY(0%)'});
			// $('.about-us-section h3').css({'transform':'scale(1)', 'transition-delay': '1s'});
			// $('.about-us-section h5').css({'opacity':'1', 'transform':'translateY(0px)', 'transition-delay': '1.6s'});
			// $('.list-circle li').css({'opacity':'1', 'transition-delay': '1.8s'});
			// $('.about-us-section p').css({'opacity':'1', 'transition-delay': '2s'});
			// $('.about-us-section .btn-general').css({'opacity':'1', 'transform':'translateY(0%)', 'transition-delay': '2.5s'});
		}
		if ($(this).scrollTop() > $('.service-section').offset().top - 100){
			menu_active.removeClass('active');
			menu_active = $('#service');
			menu_active.addClass('active');
		}
		if ($(this).scrollTop() > $('.menu').offset().top - 100){
			menu_active.removeClass('active');
			menu_active = $('#menu');
			menu_active.addClass('active');

			$('.menu-element:nth-child(1)').css({'transform':'translateX(0px)'});
			$('.menu-element:nth-child(2)').css({'opacity':'1', 'transform':'translateY(0px)'});
			$('.menu-element:nth-child(3)').css({'opacity':'1', 'transform':'translateY(0px)'});
			$('.menu-element:nth-child(4)').css({'transform':'translateX(0px)'});
			// $('.menu-content .btn-general').css({'opacity':'1', 'transform':'translateY(0%)', 'transition-delay': '1s'});
		}
	});


	//Scroll Menu Header
	
	$('.menu-header li').click(function(event) {
		menu_active.removeClass('active');
		var index = $(this).attr('id');
		menu_active = $(this);
		menu_active.addClass('active');

		var scroll_menu = 0;
		if(index === 'home'){
			$('html, body').animate({scrollTop : 0},1500);
		}
		if(index === 'service'){
			scroll_menu = $('.service-section').offset().top - 20;
			$('html, body').animate({scrollTop : scroll_menu},1500);
		}
		if(index === 'about'){
			scroll_menu = $('.about-us-section').offset().top - 20;
			$('html, body').animate({scrollTop : scroll_menu},1500);
		}
		if(index === 'menu'){
			scroll_menu = $('.menu').offset().top - 20;
			$('html, body').animate({scrollTop : scroll_menu},1500);
		}
		if(index === 'contact'){
			scroll_menu = $('.footer').offset().top - 20;
			$('html, body').animate({scrollTop : scroll_menu},1500);
		}
	});
});
