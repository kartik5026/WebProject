$(document).ready(function(){
	$("#dmode").click(function(){

		$("body").css({"backgroundColor":"#282c34","color":"tomato"});
		$("#dmode").css({"backgroundColor":"#606060","color":"white"});
		$("a").css({"color":"white"});
		$("mark").css({"backgroundColor":"grey"});
		$("hr").css({"backgroundColor":"#606060"});

	});

});


$(document).ready(function(){
	$("#dmodeoff").click(function(){

		$("body").css({"backgroundColor":"white","color":"black"});
		$("#dmode").css({"backgroundColor":"white","color":"black"});
		$("a").css({"color":"blue"});
		$("mark").css({"backgroundColor":"#ffffe6"});
		$("hr").css({"backgroundColor":"lightgrey"});

	});

});



$(document).ready(function(){
	$('#dmode').click(function(){
		$('#dmode').toggleClass("bl");
	});
});

$(document).ready(function(){
	$('#signup').click(function(){
		$('#signup1').fadeIn(1000);
	});

});

$(document).ready(function(){
	$('#cross').click(function(){
		$('#signup1').fadeOut(1000);
	});

});
