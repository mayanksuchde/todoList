//Check Off Specific Todos By Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation(); 
});

$("input[type='text']").keypress(function(event) {
	/* Act on the event */
	if (event.which===13) {
		var todoText= $(this).val();
		$(this).val("");
		$("ul").append('<li><span>X</span> ' + todoText + ' </li> ');
	}
});

