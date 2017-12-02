var slideInterval=2000;
	var slideNow=1;
	var slideCount=$('.long-block').children().length/2+1;
	var translateWidth=0;
	var margin=parseInt($('.slide').css('margin-right'));
	function nextSlide(){
		if(slideNow==slideCount||slideNow<=0||slideNow>slideCount){
			$('.long-block').css('transform','translate(0,0)');
			slideNow=1;
		} else{
			translateWidth=-($('.slide').innerWidth()+margin)*(slideNow);
			$('.long-block').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'webkit-transform': 'translate('+translateWidth+'px,0)',
				'-ms-transform': 'translate('+translateWidth+'px,0)',
				'transition':'all 1s ease',
			});
			slideNow++;
		}
	}
	
	function prevSlide(){
		
		if(slideNow==1||slideNow<=0||slideNow>slideCount){
			translateWidth=-($('.slide').innerWidth()+margin)*(slideCount-1);
			$('.long-block').css({
				'transform':'translate('+translateWidth+'px,0)',
				'webkit-transform':'translate('+translateWidth+'px,0)',
				'ms-transform':'translate('+translateWidth+'px,0)',
				'transition':'all 1s ease',
			});
			slideNow=slideCount;
		}else{
			translateWidth=-($('.slide').innerWidth()+margin)*(slideNow-2);
			$('.long-block').css({
				'transform':'translate('+translateWidth+'px,0)',
				'-webkit-transform':'translate('+translateWidth+'px,0)',
				'-ms-transform':'translate('+translateWidth+'px,0)',
				'transition':'all 1s ease',
			});
			slideNow--;
		}
	}

   
	
	
	
	$(document).ready(function(){
		var switchInterval=setInterval(nextSlide,slideInterval);
		$('.carousel-block').hover(function(){
		clearInterval(switchInterval);
		},function(){
			switchInterval=setInterval(nextSlide,slideInterval);
		});
		
		
		$('.prev-btn').click(function(){
			prevSlide();
		});
		
		$('.next-btn').click(function(){
			nextSlide();
		});
		
		
	});
