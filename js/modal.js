$(document).ready(function(){
	$('.start-block').click(function(){
		var div = document.createElement('div');
		$(div).addClass('background-modal');
		$(div).css({
			"background":"rgba(0,0,0,0.7)",
			"position":"fixed",
			"top":"0px",
			"bottom":"0px",
			"left":"0px",
			"right":"0px",
			"z-index":"99"
		});
		
		var div2 = document.createElement('div');
		$(div2).addClass('block-modal');
		$(div2).css({
			"background":"#fff",
			"position":"fixed",
			"top":"200px",
			"left":"50%",
			"margin-left":"-200px",
			"width":"400px",
			"height":"215px",
			"z-index":"100"
		});
		
		var video='<iframe width="400" height="215" src="https://www.youtube.com/embed/TAOONrdxd4Q" frameborder="0" allowfullscreen></iframe>';
		
		$(div2).append(video);
		$(div).append(div2);
		$('body').append(div);
		
		return false;
	});
	
	$('body').on("click",".background-modal",function(){
		$('.background-modal').remove();
		return false;
	});
});