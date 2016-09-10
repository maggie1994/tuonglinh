$(document).ready(function(){
	$('.down').click(function(event) {
		$('html, body').animate({scrollTop : 600},800);
	});

	//Animation Air Balloon
	$('.group-air-balloon img:nth-child(1)').css({'animation-delay': '0s'});
	$('.group-air-balloon img:nth-child(2)').css({'animation-delay': '80s'});
	$('.group-air-balloon img:nth-child(3)').css({'animation-delay': '70s'});
	$('.group-air-balloon img:nth-child(4)').css({'animation-delay': '10s'});
	$('.group-air-balloon img:nth-child(5)').css({'animation-delay': '40s'});

	//Animation Heart
	$('.group-heart img:nth-child(1)').css({'animation-delay': '0s'});
	$('.group-heart img:nth-child(2)').css({'animation-delay': '2.2s'});
	$('.group-heart img:nth-child(3)').css({'animation-delay': '0.7s'});
	$('.group-heart img:nth-child(4)').css({'animation-delay': '4s'});
	$('.group-heart img:nth-child(5)').css({'animation-delay': '1.3s'});
	$('.group-heart img:nth-child(6)').css({'animation-delay': '3.2s'});

	//Popup Demo
	$('.demo').click(function(event) {
		$('.portfolio-section').css('display','block');
	});
	$('.portfolio-content').click(function(event) {
		event.stopPropagation();
	});
	$('.portfolio-section').click(function(event) {
		$('.portfolio-section').css('display','none');
	});

	//Animation Scroll
	$(window).scroll(function(){
		if($(this).scrollTop() > 150){
			var delay_title = 0;
			for(var i = 1; i <= 5; i++){
				var span_title = $('.intro:nth-child(' + i + ') span').size();
				for(var j = 1; j <= span_title; j++){
					delay_title = delay_title + 0.25;
					$('.intro:nth-child(' + i + ') span:nth-child(' + j + ')').css({'transform':'scale(1)', 'transition-delay': delay_title + 's'});
				}
			}
			delay_title = delay_title + 0.5;
			$('.text-intro').css({'opacity':'1','transform':'translateY(0)','transition-delay': delay_title + 's'});
		}

		//Animation My Skill
		if($(this).scrollTop() > 600){
			$('.html h6').css({'transform':'translateY(0px)','opacity':'1'});
			$('.css h6').css({'transform':'translateY(0px)','opacity':'1','transition-delay':'0.3s'});
			$('.jquery h6').css({'transform':'translateY(0px)','opacity':'1','transition-delay':'0.6s'});
			$('.pts h6').css({'transform':'translateY(0px)','opacity':'1','transition-delay':'0.9s'});

			var delay_skill = 0.9;
			var right = 170;
			for(var i = 2; i <= $('.html img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.html img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 35;
			}
			var right = 170;
			for(var i = 2; i <= $('.css img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.css img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 35;
			}
			var right = 175;
			for(var i = 2; i <= $('.jquery img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.jquery img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 35;
			}
			var right = 170;
			for(var i = 2; i <= $('.pts img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.pts img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 35;
			}
		}

		//Animation History
		if($(this).scrollTop() > 1000){
			$('.education .icon-location .location').css({'opacity': '1'});
			$('.education .info').css({'transform': 'translateX(0)','transition-delay':'0.5s'});
		}
		if($(this).scrollTop() > 1200){
			$('.emotive .icon-location .location').css({'opacity': '1','transition-delay':'1s'});
			$('.emotive .info').css({'transform': 'translateX(0)','transition-delay':'1.5s'});
		}
		if($(this).scrollTop() > 1400){
			$('.goldenowl .icon-location .location').css({'opacity': '1','transition-delay':'2s'});
			$('.goldenowl .info').css({'transform': 'translateX(0)','transition-delay':'2.5s'});
		}

		//Animation Information
		if($(this).scrollTop() > 2000){
			var delay_info = 0;
			for(var i = 2; i <= 4; i++){
				$('.form-info:nth-child(' + i + ')').css({'transform': 'translateX(0)','transition-delay': delay_info + 's'});
				delay_info = delay_info + 0.2;
			}
		}
	});
});