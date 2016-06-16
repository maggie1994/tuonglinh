$(document).ready(function(){
	var scroll = $('.page').height();
	var scroll_top = 0;
	var index = 1;
	$('.scroll').click(function(event) {
		index = $(this).parents('.page').index() + 1;
		$(this).css({'opacity':'0', 'transition-delay':'0s'});
		if(index === 1){
			scroll_top = scroll;
			var delay = 1400;
			var delay_s = 1.4;
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
		if(index === 3){
			scroll_top = 2 * scroll;
			$('.mernaid').css({'opacity':'1', 'transition-delay': '1.5s'});
			var delay_s = 2;
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
		if(index === 4){
			scroll_top = 3 * scroll;
			$('.bg-demo').css({'opacity':'1', 'transition-delay': '1.5s'});
			$('.list-demo li').css({'opacity':'1', 'transition-delay': '1.5s'});

			$('.list-demo li:nth-child(1)').css({'top':'0px', 'transition-delay': '1.8s'});
			$('.list-demo li:nth-child(2)').css({'top':'0px', 'transition-delay': '2.0s'});
			$('.list-demo li:nth-child(3)').css({'top':'0px', 'transition-delay': '2.2s'});
			$('.list-demo li:nth-child(4)').css({'top':'0px', 'transition-delay': '2.4s'});

			$('.demo-element').css({'transform':'translateX(0%)', 'transition-delay': '3s'});

			$('.page:nth-child(5) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': '5s'});
			$('.list-demo li').delay(300).animate({'transition-delay': '0s'},0);
		}
		if(index === 5){
			scroll_top = 4 * scroll;
			$('.content-hobbies ul .hobby-01').css({'top':'20px', 'left':'160px', 'opacity':'1', 'transition-delay': '1.5s'});
			$('.content-hobbies ul .hobby-02').css({'top':'110px', 'left':'300px', 'opacity':'1', 'transition-delay': '1.5s'});
			$('.content-hobbies ul .hobby-03').css({'top':'280px', 'left':'300px', 'opacity':'1', 'transition-delay': '1.5s'});
			$('.content-hobbies ul .hobby-04').css({'top':'370px', 'left':'160px', 'opacity':'1', 'transition-delay': '1.5s'});
			$('.content-hobbies ul .hobby-05').css({'top':'280px', 'left':'20px', 'opacity':'1', 'transition-delay': '1.5s'});
			$('.content-hobbies ul .hobby-06').css({'top':'110px', 'left':'20px', 'opacity':'1', 'transition-delay': '1.5s'});
			$('.content-hobbies ul li h6').css({'opacity':'1', 'transition-delay': '2s'});

			$('.page:nth-child(6) .content .scroll').css({'opacity': '1', 'transform': 'translateY(0%)', 'transition-delay': '2.5s'});
		}
		if(index === 6){
			scroll_top = 5 * scroll;
			$('.info-bg').css({'opacity':'1', 'transition-delay': '1.5s'});
			$('.name-info').css({'opacity':'1', 'transition-delay': '2s'});
			$('.birthday-info').css({'opacity':'1', 'transition-delay': '2.3s'});
			$('.mail-info').css({'opacity':'1', 'transition-delay': '2.6s'});
			$('.phone-info').css({'opacity':'1', 'transition-delay': '2.9s'});
			$('.facebook-info').css({'opacity':'1', 'transition-delay': '3.2s'});
			$('.contact').css({'transform':'rotateX(0deg)', 'transition-delay': '4s'});
			$('.contact h4').css({'opacity':'1', 'transition-delay': '5.5s'});
			$('.line').css({'opacity':'1', 'transition-delay': '5.5s'});
			$('.contact-form').css({'opacity':'1', 'transition-delay': '5.5s'});
		}
		$('body').delay(500).animate({'scrollTop': scroll_top},1000);
		// alert(scroll_top);
	});

	$(window).scroll(function(){
		if(index === 1){
			
		}
		if($(this).scrollTop() >= $('.page').height()){
			$('#bg').css('display','block');
		}else{
			$('#bg').css('display','none');
		}
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