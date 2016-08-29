$(document).ready(function(){
	var position_clother = 0;
	var width_flex = $('#new-clother-flex .new-clother-element').width() * $('#new-clother-flex .new-clother-element').size();
	$('#btn-right-clother').click(function(event) {
		// alert(width_flex);
		position_clother = position_clother + 480;
		if(position_clother <= width_flex){
			$('#new-clother-flex').css('transform','translateX(-' + position_clother + 'px)');
		}
		if(position_clother > width_flex){
			position_clother = width_flex;
		}
	});
	$('#btn-left-clother').click(function(event) {
		// alert(width_flex);
		position_clother = position_clother - 480;
		if(position_clother >= 0){
			$('#new-clother-flex').css('transform','translateX(-' + position_clother + 'px)');
		}
		if(position_clother < 0){
			position_clother = 0;
		}
	});


	var position_bag = 0;
	var width_bag = $('#new-bag-flex .new-clother-element').width() * $('#new-bag-flex .new-clother-element').size();
	$('#btn-right-bag').click(function(event) {
		// alert(width_flex);
		position_bag = position_bag + 480;
		if(position_bag <= width_bag){
			$('#new-bag-flex').css('transform','translateX(-' + position_bag + 'px)');
		}
		if(position_bag > width_flex){
			position_bag = width_flex;
		}
	});
	$('#btn-left-bag').click(function(event) {
		// alert(width_flex);
		position_bag = position_bag - 480;
		if(position_bag >= 0){
			$('#new-bag-flex').css('transform','translateX(-' + position_bag + 'px)');
		}
		if(position_bag < 0){
			position_bag = 0;
		}
	});


	//Animation Slider
	$('.slider-content img').css({'opacity':'1','transition-delay':'0.5s'});
	$('.slider-content .slider-text h5').css({'opacity':'1','top':'0px','transition-delay':'1s'});
	$('.slider-content .slider-text h4').css({'opacity':'1','top':'0px','transition-delay':'1.3s'});
	$('.slider-content .slider-text h6').css({'opacity':'1','top':'0px','transition-delay':'1.6s'});
	$('.btn-general').css({'opacity':'1','top':'0px','transition-delay':'1.9s'});


	//Scroll
	$(window).scroll(function(){
      
	    if ($(this).scrollTop() > 200) {
	    	$('.header').css('animation','header_fixed 0.5s forwards');
	      	$('.header').addClass('header-scroll');
	  	}
	  	else{
	  		$('.header').css('animation','header_static 0.5s forwards');
	      	$('.header').removeClass('header-scroll');
	  	}
	});
});