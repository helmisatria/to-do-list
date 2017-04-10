$("ul").on("click", "li", function(){
	$(this).toggleClass("selected")
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$('input').keyup(function(e){
    if(e.keyCode == 13)
    {
        $("ul").prepend('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + $("input").val()+ "</li>");
        $("input").val("");
    }
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
	$(this).addClass("fa-spin");
	setTimeout(function(){
		$("#plus").removeClass("fa-spin");
	}, 1000)
});
