$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13 && $(this).val() !== ""){
	 	// console.log("pressed Enter");
		var text = $(this).val();
		// console.log(text);
		$(this).val("");
		$("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span> " + text + "</li>");
	}
});

$(".adder").on("click", function(){
	$("input[type='text']").fadeToggle(500);
});

