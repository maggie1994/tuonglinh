$(document).ready(function(){

	//Set height parent for each element use absolute
	$('.parent').each(function(){
		var height = $('.element').height();
		$(this).css('height', height + 'px');
	});
	
	//Set height slider (use top: calccalc(((100vh - 41.66vw) / 4) * -2 ))
	$('.slider').each(function(){
		var height = $('.slide-img img').height();
		$(this).css('height', height + 'px');
	});
	
	
	//Set height feed-body
	var h_feed_body = $('.feed-element').height() + $('.carousel').height();
	$('.feed-body').css('height', h_feed_body + 'px');

	//Auto slider
	var id_slide = 1;
	var slider = setInterval(slider_bg, 5000);
	function slider_bg() {
		var num = $('.slide-img img').size();
		$('.slide-img img:nth-child(' + id_slide + ')').css('opacity','0');

		id_slide += 1;
		if(id_slide > num){
			id_slide = 1;
		}
		$('.slide-img img:nth-child(' + id_slide + ')').css('opacity','1');
	}
	
	//Responsive Menu
	$('.sp_menu').click(function(){
		$('.menu').slideToggle();
	});

	//Hover image about
	$('.list-img li img').click(function(){
		var src = $(this).attr('src');
		$('.img-lg img').attr('src', src);
	});

	//List Menu
	var index = 'new';
	$('.list-menu li').click(function(){
		$('#menu-' + index).fadeOut(1000);
		$('#' + index).removeClass('active');

		index = $(this).attr('id');

		$('#' + index).addClass('active');
		$('#menu-' + index).fadeIn(1000);
	});
	
	//List carousel
	var index_carousel = 1;
	var carousel_ac = $('.carousel li:first-child');
	$('.carousel li').click(function(){
		$('.feed-body .feed-element:nth-child(' + index_carousel + ')').css('opacity','0');
		carousel_ac.removeClass('active');
		
		index_carousel = $(this).index() + 1;
		carousel_ac = $(this);
		
		carousel_ac.addClass('active');
		$('.feed-body .feed-element:nth-child(' + index_carousel + ')').css('opacity','1');
	});
});

//Set height parent for each element use absolute
$(window).on({
    resize: function (e) {
		
		$('.slider').each(function(){
			var height = $('.slide-img img').height();
			$(this).css('height', height + 'px');
		});
		
        $('.parent').each(function(){
			var height = $('.element').height();
			$(this).css('height', height + 'px');
		});

		var h_feed_body = $('.feed-element').height() + $('.carousel').height();
		$('.feed-body').css('height', h_feed_body + 'px');
    }
}, 500);
