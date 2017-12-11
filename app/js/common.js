$(function() {

	var rotate = $('.rotate');
	var inner_rotate = $('.inner-rotate');
	
	var btn = $('.btn');
	
	btn.click(function(){
	    console.log(rotate);
	    rotate.css({'opacity': 1, 'transform': 'rotate(270deg)'});
	    inner_rotate.css({'opacity': 1, 'transform': 'rotate(360deg)'});
	});

});
