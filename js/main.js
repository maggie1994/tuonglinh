$(document).ready(function(){
	var scroll = $('.page').height();
	var scroll_top = 0;
	$('.scroll').click(function(event) {
		scroll_top = scroll_top + scroll;
		$('body').animate({'scrollTop': scroll_top},500);
		// alert(scroll_top);
	});

	$(window).scroll(function(){
		if($(this).scrollTop() >= $('.page').height()){
			$('#bg').css('display','block');
		}else{
			$('#bg').css('display','none');
		}
	});
});

//Smooth Scroll Mouse
// $(function(){

//   var $window = $(window);    //Window object

//   var scrollTime = 0.5;     //Scroll time
//   var scrollDistance = 150;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll

//   $window.on("mousewheel DOMMouseScroll", function(event){

//     event.preventDefault();

//     var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
//     var scrollTop = $window.scrollTop();
//     var finalScroll = scrollTop - parseInt(delta*scrollDistance);

//     TweenMax.to($window, scrollTime, {
//       scrollTo : { y: finalScroll, autoKill:true },
//         ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
//         autoKill: true,
//         overwrite: 5
//       });

//   });
// });