$(document).ready(function(){
	var scroll = $('.page').height();
	var scroll_top = 0;
	var index = 1;

	//Back to Page 01
	var x = location.href;
	var length = x.length;
	var stop = length - 1;
	var page = x.slice(0,stop);
	// window.location.assign(page);

	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4'],
	    sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C'],
	    navigation: {
	    	'position': 'right',
	   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
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
				$('.list-demo li').css({'opacity':'1', 'transition-delay': '0.5s'});

				$('.list-demo li:nth-child(1)').css({'top':'0px', 'transition-delay': '0.7s'});
				$('.list-demo li:nth-child(2)').css({'top':'0px', 'transition-delay': '0.9s'});
				$('.list-demo li:nth-child(3)').css({'top':'0px', 'transition-delay': '1.1s'});
				$('.list-demo li:nth-child(4)').css({'top':'0px', 'transition-delay': '1.3s'});

				$('.demo-element').css({'transform':'translateX(0%)', 'transition-delay': '1.8s'});

				$('.page:nth-child(5) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': '3.8s'});
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

	
	
});

// Scroll Smooth
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}