$(document).ready(function() {
	$('li.to-do').click(function(e) {
		$(this).toggleClass('to-do').toggleClass('done');
	});
	$('li.done').click(function(e) {
		$(this).toggleClass('done').toggleClass('to-do');
	});
	$('#btn').click(function(){
    var text = $('#itemInput').val() + '<button>Delete</button>';
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.list').addClass('to-do');
    }
});
	$('ul').on('click','button' , function(el){
    $(this).parent().remove();
});
});


//get value 
//function addListItem () {
//    var x = document.getElementById("itemInput").value;
//    document.getElementById("demo").innerHTML = x;
//}



//function myFunction() {
//    var node = document.createElement("LI");
//    var textnode = document.createTextNode("Water");
//    node.appendChild(textnode);
//    document.getElementById("myList").appendChild(node);
//}