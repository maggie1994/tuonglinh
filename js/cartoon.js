$('document').ready(function() {

	//Position Movies
	var navbar = window.matchMedia('screen and (max-width: 986px)');
	var navbar_768 = window.matchMedia('screen and (max-width: 768px)');
	var navbar_480 = window.matchMedia('screen and (max-width: 480px)');
	var navbar_380 = window.matchMedia('screen and (max-width: 380px)');
	var left = 0;
	var top = 0;
	var left_element = 300;
	var top_element = 200;
	var dv = 'px';
	var num_movies = 3;
	if(navbar.matches){
		left_element = 43;
		top_element = 200;
		dv = '%';
	}
	if(navbar_768.matches){
		left_element = 55;
		top_element = 205;
		dv = '%';
		num_movies = 2;
	}
	if(navbar_480.matches){
		left_element = 0;
		top_element = 230;
		dv = '%';
		num_movies = 1;
	}
	if(navbar_380.matches){
		left_element = 0;
		top_element = 210;
		dv = '%';
		num_movies = 1;
	}
	for(var i = 1; i <= $('.movie-element').size(); i++){
		$('.movie-element:nth-of-type(' + i + ')').css({'left': left + dv,'top': top + 'px'});
		if(i % num_movies === 0){
			left = 0;
			top = top + top_element;
		}
		else{
			left = left + left_element;
			top = top;
		}
	}

	var menu_active = $('#all');

	//Animation Movies
	$('#all').click(function(event) {
		menu_active.removeClass('active');
		menu_active = $('#all');
		menu_active.addClass('active');
		$('.movie-element').removeClass('movie-hidden');
		left = 0;
		top = 0;
		var num = 1;
		for(var i = 1; i <= $('.movie-element').size(); i++){
			$('.movie-element:nth-of-type(' + i + ')').css({'left': left + dv,'top': top + 'px'});
			if(i % num_movies === 0){
				left = 0;
				top = top + top_element;
			}
			else{
				left = left + left_element;
				top = top;
			}
		}
	});
	$('#disney').click(function(event) {
		menu_active.removeClass('active');
		menu_active = $('#disney');
		menu_active.addClass('active');
		$('.anime').addClass('movie-hidden');
		$('.other').addClass('movie-hidden');
		$('.disney').removeClass('movie-hidden');
		left = 0;
		top = 0;
		var num = 1;
		for(var i = 1; i <= $('.movie-element').size(); i++){
			var id = $('.movie-element:nth-of-type(' + i + ')').attr('id');
			if(id === 'disney'){
				$('.movie-element:nth-of-type(' + i + ')').css({'left': left + dv,'top': top + 'px'});
				if(num % num_movies === 0){
					left = 0;
					top = top + top_element;
					num = num + 1;
				}
				else{
					left = left + left_element;
					top = top;
					num = num + 1;
				}
			}
			else{
				left = left;
				top = top;
				num = num;
			}
		}
	});
	$('#anime').click(function(event) {
		menu_active.removeClass('active');
		menu_active = $('#anime');
		menu_active.addClass('active');
		$('.disney').addClass('movie-hidden');
		$('.other').addClass('movie-hidden');
		$('.anime').removeClass('movie-hidden');
		left = 0;
		top = 0;
		var num = 1;
		for(var i = 1; i <= $('.movie-element').size(); i++){
			var id = $('.movie-element:nth-of-type(' + i + ')').attr('id');
			if(id === 'anime'){
				$('.movie-element:nth-of-type(' + i + ')').css({'left': left + dv,'top': top + 'px'});
				if(num % num_movies === 0){
					left = 0;
					top = top + top_element;
					num = num + 1;
				}
				else{
					left = left + left_element;
					top = top;
					num = num + 1;
				}
			}
			else{
				left = left;
				top = top;
				num = num;
			}
		}
	});
	$('#other').click(function(event) {
		menu_active.removeClass('active');
		menu_active = $('#other');
		menu_active.addClass('active');
		$('.disney').addClass('movie-hidden');
		$('.anime').addClass('movie-hidden');
		$('.other').removeClass('movie-hidden');
		left = 0;
		top = 0;
		var num = 1;
		for(var i = 1; i <= $('.movie-element').size(); i++){
			var id = $('.movie-element:nth-of-type(' + i + ')').attr('id');
			if(id === 'other'){
				$('.movie-element:nth-of-type(' + i + ')').css({'left': left + 'px','top': top + 'px'});
				if(num % 3 === 0){
					left = 0;
					top = top + top_element;
					num = num + 1;
				}
				else{
					left = left + left_element;
					top = top;
					num = num + 1;
				}
			}
			else{
				left = left;
				top = top;
				num = num;
			}
		}
	});

	//Animation Slider Auto
	var slider_stt = 1;
	var slider = function(){
	    $('.slider .slider-element:nth-child(' + slider_stt + ') .img-slider').css({'animation':'img_slider 1s forwards','opacity':'1'});
	    $('.slider .slider-element:nth-child(' + slider_stt + ') .img-title').css({'animation':'info 1s forwards','animation-delay':'0.4s','opacity':'1'});
	    $('.slider .slider-element:nth-child(' + slider_stt + ') p').css({'animation':'img_slider 1s forwards','animation-delay':'0.8s','opacity':'1'});
	    $('.slider .slider-element:nth-child(' + slider_stt + ') button').css({'animation':'info 1s forwards','animation-delay':'1.2s','opacity':'1'});
		if(slider_stt <= 3){
			slider_stt = slider_stt + 1;
		}
		else{
			slider_stt = 1;
		}
		$('.slider .slider-element:nth-child(' + slider_stt + ') .img-slider').css({'animation':'img_slider_01 1s forwards','animation-delay':'1.8s','opacity':'0'});
	    $('.slider .slider-element:nth-child(' + slider_stt + ') .img-title').css({'animation':'info_01 1s forwards','animation-delay':'2.0s','opacity':'0'});
	    $('.slider .slider-element:nth-child(' + slider_stt + ') p').css({'animation':'img_slider_01 1s forwards','animation-delay':'2.2s','opacity':'0'});
	    $('.slider .slider-element:nth-child(' + slider_stt + ') button').css({'animation':'info_01 1s forwards','animation-delay':'2.4s','opacity':'0'});
		// setInterval(slider, 6000);
	};
	setInterval(slider, 10000);


	//Animation Icon Bar
	$('.icon-bar').click(function(event) {
		$('.icon-bar').toggleClass('icon-bar-active');
		$('.line-1').toggleClass('line-1-active');
		$('.line-2').toggleClass('line-2-active');
		$('.line-3').toggleClass('line-3-active');
		$('.header').toggleClass('header-mobile-active');

	});
});

