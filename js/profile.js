$(document).ready(function(){

	// Animation Aabout me
	var delay_about_h6 = 0;
	var num_h6 = $('.infomation h6').size();
	for(var i = 1; i <= num_h6; i++){
		$('.infomation h6:nth-child(' + i + ')').css({'opacity':'1', 'transition-delay': delay_about_h6 + 's'});
		delay_about_h6 += 0.2;
	}
	$('.skill-section').css({'transform':'translateX(0%)', 'transition-delay': delay_about_h6 + 's'});

	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
		var scroll = $(window).scrollTop();
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var portfolio = $(this).offset().top - $(this).height();
            if(scroll >= portfolio){
            	var index = $(this).index() + 1;
            	$(this).css({'opacity':'1'});
				$('.hideme:nth-child(' + index + ') > img').css({'transform':'translateX(0%)'});
				$('.hideme:nth-child(' + index + ') > .info-portfolio').css({'transform':'translateX(0%)'});
            }
            
        }); 
    
    });

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
	});
	$('.mobile').click(function(event) {
		var index = $(this).index() + 1;
		$('.mobile:nth-child(' + index + ') .popup').fadeIn();

		num_img = $('.mobile:nth-child(' + index + ') .popup .list-img img').size();
		
		$('.list-img > img:nth-child(' + img + ')').css('animation','img_01 0.1s forwards');
		img = 1;
		$('.list-img > img:nth-child(' + img + ')').css('animation','img_02 0.1s forwards');
	});
});