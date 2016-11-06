$(document).ready(function(){
	var img = 1;
	var num_img = $('.list-img > img').size();
	$('.btn-left').click(function(event) {
		$('.list-img > img:nth-child(' + img + ')').css('animation','img_04 1s forwards');
		img = img - 1;
		if(img < 1){
			img = num_img;
		}
		$('.list-img > img:nth-child(' + img + ')').css('animation','img_03 1s forwards');


		event.stopPropagation();
	});
	$('.btn-right').click(function(event) {
		$('.list-img > img:nth-child(' + img + ')').css('animation','img_01 1s forwards');
		img = img + 1;
		if(img > num_img){
			img = 1;
		}
		$('.list-img > img:nth-child(' + img + ')').css('animation','img_02 1s forwards');


		event.stopPropagation();
	});
	$('.popup').click(function(event) {
		$('.popup').fadeOut();
		event.stopPropagation();
		img = 1;
	});
	$('.mobile').click(function(event) {
		var index = $(this).index() + 1;
		$('.mobile:nth-child(' + index + ') .popup').fadeIn();
	});
});