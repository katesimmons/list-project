$(document).ready(function() {
	$('li.to-do').click(function(e) {
		$(this).toggleClass('to-do').toggleClass('done');
	})
	$('li.done').click(function() {
		$(this).toggleClass('done').toggleClass('to-do');
	})
});

function addListItem () {
    var x = document.getElementById("itemInput").value;
    document.getElementById("demo").innerHTML = x;
}