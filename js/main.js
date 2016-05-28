$(document).ready(function(){
	$("body").swipeleft(function(){
	    alert("You swiped left!");
	}); 
	$('#btnDisney').click(function(){
		$("#btnDisney_menu").slideToggle("fast");
	});
	$('#btnMenuBars').click(function() {
		$('#Menu_Doc').toggle();
		$('.body_content').toggleClass('body_content_toggle');
	});
	$('#btnSearch_Responsive').click(function(){
		$('#inputgroup_1023').css('display','block');

		$('#btnMenuBars').css('display','none');
		$('#btnSearch_Responsive').css('display','none');
		$('.header').css('background-color','#3f474a');
	});
	$('#btnsearch_cancel').click(function(){
		$('#inputgroup_1023').css('display','none');

		$('#btnMenuBars').css('display','inline-block');
		$('#btnSearch_Responsive').css('display','block');
		$('.header').css('background-color','#232b2d');
	});

	// Left and Right Controls
	$('#left-controls').click(function(){
		$("#video_1").removeClass('move_01_right');
		$("#video_2").removeClass('move_01_right');
		$("#video_3").removeClass('move_01_right');
		$("#video_4").removeClass('move_02_right');
		$("#video_5").removeClass('move_05_right');
		$("#video_6").removeClass('move_06_right');

		$("#video_1").addClass('move_01_left');
		$("#video_2").addClass('move_01_left');
		$("#video_3").addClass('move_01_left');
		$("#video_4").addClass('move_02_left');
		$("#video_5").addClass('move_05_left');
		$("#video_6").addClass('move_06_left');

		$('#right-controls').css('display','block');
		$('#left-controls').css('display','none');
	});

	$('#right-controls').click(function(){
		$("#video_1").removeClass('move_01_left');
		$("#video_2").removeClass('move_01_left');
		$("#video_3").removeClass('move_01_left');
		$("#video_4").removeClass('move_02_left');
		$("#video_5").removeClass('move_05_left');
		$("#video_6").removeClass('move_06_left');

		$("#video_1").addClass('move_01_right');
		$("#video_2").addClass('move_01_right');
		$("#video_3").addClass('move_01_right');
		$("#video_4").css('left','0px');
		$("#video_4").addClass('move_02_right');
		$("#video_5").css('display','block');
		$("#video_5").css('left','280px');
		$("#video_5").addClass('move_05_right');
		$("#video_6").css('display','block');
		$("#video_6").css('left','560px');
		$("#video_6").addClass('move_06_right');

		$('#right-controls').css('display','none');
		$('#left-controls').css('display','block');
	});
});