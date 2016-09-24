$(document).ready(function(){

	$('.down').click(function(event) {
		$('html, body').animate({scrollTop : 600},800);
	});

	//Animation Air Balloon
	$('.group-air-balloon img:nth-child(1)').css({'-webkit-animation-delay':'0','animation-delay': '0s','-moz-animation': '0s'});
	$('.group-air-balloon img:nth-child(2)').css({'-webkit-animation-delay':'80s','animation-delay': '80s','-moz-animation': '80s'});
	$('.group-air-balloon img:nth-child(3)').css({'animation-delay': '90s','-webkit-animation-delay':'90s'});
	$('.group-air-balloon img:nth-child(4)').css({'animation-delay': '10s','-webkit-animation-delay':'10s'});
	$('.group-air-balloon img:nth-child(5)').css({'animation-delay': '40s','-webkit-animation-delay':'40s'});

	//Animation Heart
	$('.group-heart img:nth-child(1)').css({'animation-delay': '0s','-webkit-animation-delay':'0'});
	$('.group-heart img:nth-child(2)').css({'animation-delay': '2.2s','-webkit-animation-delay':'2.2s'});
	$('.group-heart img:nth-child(3)').css({'animation-delay': '0.7s','-webkit-animation-delay':'0.7s'});
	$('.group-heart img:nth-child(4)').css({'animation-delay': '4s','-webkit-animation-delay':'4s'});
	$('.group-heart img:nth-child(5)').css({'animation-delay': '1.3s','-webkit-animation-delay':'1.3s'});
	$('.group-heart img:nth-child(6)').css({'animation-delay': '3.2s','-webkit-animation-delay':'3.2s'});

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

	//Animation Demo
	var count = 2;
	var position = 0;
	var with_demo = $('.demo-flex .demo-element').size() * 265;
	$('.btn-left').click(function(event) {
		$('.demo-element:nth-child(' + count + ')').removeClass('active');
		position = position - 265;
		if(position >= 0){
			$('.demo-flex').css({'transform':'translateX(-' + position + 'px'});
			count = count - 1;
			$('.demo-element:nth-child(' + count + ')').addClass('active');
		}
		else{
			position = 0;
			count = 2;
			$('.demo-element:nth-child(2)').addClass('active');
		}
	});
	$('.btn-right').click(function(event) {
		$('.demo-element:nth-child(' + count + ')').removeClass('active');
		position = position + 265;
		if(position < with_demo){
			$('.demo-flex').css({'transform':'translateX(-' + position + 'px'});
			count = count + 1;
			$('.demo-element:nth-child(' + count + ')').addClass('active');
		}
		else{
			position = with_demo;
			count = count + 1;
		}
	});


	//Animation Ferris
	var delay_rotation = 0;
	for(var i = 1; i <= 16; i++){
		$('.rotation-' + i).css({'animation-delay': delay_rotation + 's'});
		delay_rotation = delay_rotation + 0.94;
	}

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