$(document).ready(function(){
	var scroll = $('.page').height();
	var scroll_top = 0;
	var index = 1;

	//Back to Page 01
	var x = location.href;
	var length = x.length;
	var stop = length - 1;
	var page = x.slice(0,stop) +'1';
	//window.location.assign('https://tuonglinh.herokuapp.com/#page1');

	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
	    sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C'],
	    navigation: {
	    	'position': 'right',
	   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6']
	   	},
	    afterRender: function(){
	    	$('#pp-nav').addClass('custom');
	    },
	    afterLoad: function(anchorLink, index){
	    	if(index>1){
	    		$('#pp-nav').removeClass('custom');
	    	}else{
	    		$('#pp-nav').addClass('custom');
	    	}
	    },
	    onLeave: function(index, nextIndex, direction){
            //Page 02
            if(index == 1 && direction =='down'){
                var delay = 500;
				var delay_s = 0.5;
				for(var i = 2; i <= 6; i++){
					var img = $('.number-skill:nth-child(' + i + ') li').size() - 1;
					for(var j = 1; j <= img; j++){
						var img_index = j + 1;
						$('.number-skill:nth-child(' + i + ') li:nth-child(' + img_index + ') img').delay(delay).animate({'margin-left':'0px'}, 500);
						delay = delay + 200;
						delay_s = delay_s + 0.2; 
					}
				}
				delay = delay + 500;
				delay_s = delay_s + 0.5;
				$('.page:nth-child(3) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': delay_s + 's'});
            	var num_01 = $('.water span').size()/2;
            	var transition = -0.4;
				for(var i = 1; i <= num_01; i++){
					transition = transition + 0.4;
					$('.water span:nth-child(' + i + ')').css({'animation-name': 'animate_water','animation-delay': transition + 's'});
				}
				transition = 0;
				for(var i = $('.water span').size(); i > num_01; i--){
					transition = transition + 0.4;
					$('.water span:nth-child(' + i + ')').css({'animation-name': 'animate_water','animation-delay': transition + 's'});
				}
            }

            //Page 03
            else if(index == 2 && direction == 'down'){
	            $('.mernaid').css({'opacity':'1', 'transition-delay': '0.5s'});
				var delay_s = 1;
				for(var i = 1; i <= 4; i++){
					$('.history-0' + i + ' img').css({'transform':'scale(1)', 'transition-delay': delay_s + 's'});
					$('.history-0' + i + ' .history-content').css({'padding-left':'15px', 'opacity':'1', 'transition-delay': delay_s + 's'});
					var num_circle = $('.circle-list-0' + i + ' li').size();
					delay_s = delay_s + 0.5;
					if(i === 2){
						for(var j = num_circle; j >= 1; j--){
							delay_s = delay_s + 0.1;
							$('.circle-list-0' + i + ' li:nth-child(' + j + ')').css({'transform':'scale(1)', 'transition-delay': delay_s + 's'});
						}
					}else{
						for(var j = 1; j <= num_circle; j++){
							delay_s = delay_s + 0.1;
							$('.circle-list-0' + i + ' li:nth-child(' + j + ')').css({'transform':'scale(1)', 'transition-delay': delay_s + 's'});
						}
					}
					delay_s = delay_s + 0.5;
				}
				$('.page:nth-child(4) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': delay_s + 's'});
            }

            //Page 04
            else if(index == 3 && direction == 'down'){
            	$('.bg-demo').css({'opacity':'1', 'transition-delay': '0.5s'});
            	$('.logo-demo').css({'opacity':'1', 'transition-delay': '0.5s'});
            	$('.fish-01').css({'opacity':'1', 'transition-delay': '0.5s'});
				$('.list-demo li').css({'opacity':'1', 'transition-delay': '0.7s'});

				$('.list-demo li:nth-child(1)').css({'top':'0px', 'transition-delay': '0.9s'});
				$('.list-demo li:nth-child(2)').css({'top':'0px', 'transition-delay': '1.1s'});
				$('.list-demo li:nth-child(3)').css({'top':'0px', 'transition-delay': '1.3s'});
				$('.list-demo li:nth-child(4)').css({'top':'0px', 'transition-delay': '1.5s'});

				$('#website-demo').css({'transform':'translateX(0%)', 'transition-delay': '2s'});

				$('.page:nth-child(5) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': '4s'});
				$('.list-demo li').delay(300).animate({'transition-delay': '0s'},0);
            }

            //Page 05
            else if(index == 4 && direction == 'down'){
            	$('.content-hobbies ul .hobby-01').css({'top':'20px', 'left':'160px', 'opacity':'1', 'transition-delay': '0.5s'});
				$('.content-hobbies ul .hobby-02').css({'top':'110px', 'left':'300px', 'opacity':'1', 'transition-delay': '0.5s'});
				$('.content-hobbies ul .hobby-03').css({'top':'280px', 'left':'300px', 'opacity':'1', 'transition-delay': '0.5s'});
				$('.content-hobbies ul .hobby-04').css({'top':'370px', 'left':'160px', 'opacity':'1', 'transition-delay': '0.5s'});
				$('.content-hobbies ul .hobby-05').css({'top':'280px', 'left':'20px', 'opacity':'1', 'transition-delay': '0.5s'});
				$('.content-hobbies ul .hobby-06').css({'top':'110px', 'left':'20px', 'opacity':'1', 'transition-delay': '0.5s'});
				$('.content-hobbies ul li h6').css({'opacity':'1', 'transition-delay': '1s'});

				$('.page:nth-child(6) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': '1.5s'});
            }

            //Page 06
            else if(index == 5 && direction == 'down'){
            	$('.info-bg').css({'opacity':'1', 'transition-delay': '0.5s'});
				$('.name-info').css({'opacity':'1', 'transition-delay': '1s'});
				$('.birthday-info').css({'opacity':'1', 'transition-delay': '1.3s'});
				$('.mail-info').css({'opacity':'1', 'transition-delay': '1.6s'});
				$('.phone-info').css({'opacity':'1', 'transition-delay': '1.9s'});
				$('.facebook-info').css({'opacity':'1', 'transition-delay': '2.2s'});
				$('.contact').css({'transform':'rotateX(0deg)', 'transition-delay': '2.7s'});
				$('.contact h4').css({'opacity':'1', 'transition-delay': '4s'});
				$('.line').css({'opacity':'1', 'transition-delay': '4s'});
				$('.contact-form').css({'opacity':'1', 'transition-delay': '4s'});

				$('.name-info').css({'animation':'info_name 2.5s infinite', 'animation-delay': '4.5s'});
				$('.birthday-info').css({'animation':'info_birthday 2.5s infinite', 'animation-delay': '5s'});
				$('.mail-info').css({'animation':'info_mail 2.5s infinite', 'animation-delay': '4.8s'});
				$('.phone-info').css({'animation':'info_phone 2.5s infinite', 'animation-delay': '5.4s'});
				$('.facebook-info').css({'animation':'info_facebook 2.5s infinite', 'animation-delay': '5.6s'});
	        }
        }
	});

	/*
    * Internal use of the demo website
    */
    $('#showExamples').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#examplesList').toggle();
	});

	$('html').click(function(){
		$('#examplesList').hide();
	});

	var num_title = $('.title-logo span').size();
	var delay_title = 0;
	for(var i = 1; i <= num_title; i++){
		delay_title = delay_title + 0.2;
		$('.title-logo span:nth-child(' + i + ')').css({'opacity':'1','transform':'translateY(0%)','transition-delay': delay_title + 's'});
	}
	$('.img-plane').css({'left':'44%','transition-delay':'0s'});
	$('.img-sun').css({'opacity':'1','transition-delay':'3s'});
	$('.img-balloon').css({'opacity':'1','transition-delay':'3.5s'});
	$('.img-cloud-01').css({'opacity':'1','transition-delay':'3.8s'});
	$('.img-cloud-02').css({'opacity':'1','transition-delay':'4s'});

 	var menu_active = $('#website');
	var id = 'website';
	$('.list-demo li').click(function(){
		menu_active.removeClass('active');
		$('#' + id + '-demo').css({'animation':'demo_before 2s forwards', 'animation-delay': '0s'});
		id = $(this).attr('id');
		menu_active = $(this);
		menu_active.addClass('active');
		$('#' + id + '-demo').css({'animation':'demo_after 2s forwards', 'animation-delay': '0s'});
	});
	

	var num_water = $('.water span').size();
	var position_water = -40;
	for(var i = 1; i <= num_water; i++){
		position_water = position_water + 65;
		$('.water span:nth-child(' + i + ')').css({'left': position_water + 'px'});
	}
	
});