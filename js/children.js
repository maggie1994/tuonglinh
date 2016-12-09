$(document).ready(function(){
	var img_active = 1;
	var num_img = $('.slider-content img').size();

	$('.left').click(function(event) {
		$('.slider-content img:nth-child(' + img_active + ')').css('animation','slider_left_before 1s forwards');
		img_active = img_active - 1;
		if(img_active < 1){
			img_active = num_img;
		}
		$('.slider-content img:nth-child(' + img_active + ')').css('animation','slider_left_after 1s forwards');
	});
	$('.right').click(function(event) {
		$('.slider-content img:nth-child(' + img_active + ')').css('animation','slider_right_before 1s forwards');
		img_active = img_active + 1;
		if(img_active > num_img){
			img_active = 1;
		}
		$('.slider-content img:nth-child(' + img_active + ')').css('animation','slider_right_after 1s forwards');
	});

	$('.icon-setting').click(function(event) {
		$('.menu').toggleClass('menu-active');
		$('.icon-open').toggleClass('icon-active');
		$('.icon-remove').toggleClass('icon-active');
	});

	$('.category-section').click(function(event) {
		$('.category-section .list-category').slideToggle();
	});
});