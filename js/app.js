//$(document).ready(function() {
//	$('li.to-do').mousedown(function() {
//		$(this).css('color', 'gray');
//	});
//	$('li.done').mousedown(function() {
//		$(this).css('color', 'red');
//	})
//})

//$(document).ready(function() {
//	$('li.to-do').mousedown(function() {
//		$('.to-do').removeClass('to-do').addClass('done');
//	});
//	$('li.done').mousedown(function() {
//		$('.done').removeClass('done').addClass('to-do');
//	});
//})

//This one works best
$(document).ready(function() {
	$('li.to-do').click(function(e) {
		$(this).toggleClass('to-do').toggleClass('done');
	})
	$('li.done').click(function() {
		$(this).toggleClass('done').toggleClass('to-do');
	})
})