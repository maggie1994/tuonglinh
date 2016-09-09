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
		if($(this).scrollTop() > 800){
			$('.html h6').css({'transform':'translateY(0px)','opacity':'1'});
			$('.css h6').css({'transform':'translateY(0px)','opacity':'1','transition-delay':'0.3s'});
			$('.jquery h6').css({'transform':'translateY(0px)','opacity':'1','transition-delay':'0.6s'});
			$('.pts h6').css({'transform':'translateY(0px)','opacity':'1','transition-delay':'0.9s'});

			var delay_skill = 0.9;
			var right = 170;
			for(var i = 2; i <= $('.html img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.html img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 40;
			}
			var right = 170;
			for(var i = 2; i <= $('.css img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.css img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 40;
			}
			var right = 175;
			for(var i = 2; i <= $('.jquery img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.jquery img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 40;
			}
			var right = 170;
			for(var i = 2; i <= $('.pts img').size() + 1; i++){
				delay_skill = delay_skill + 0.2;
				$('.pts img:nth-child(' + i + ')').css({'opacity': '1','right': right + 'px','transition-delay': delay_skill + 's'});
				right = right - 40;
			}
		}
	});

	
});