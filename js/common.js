$(function(){
	var w = $(window).width();
	var h = $(window).height();
	$("header").css("height",h*0.067);
	$("#hotgame").css({
		"width":w*0.3,
		"height":h*0.2,
		"lineHeight": h*0.067+"px",
		"fontSize": h*0.03		
	});
	$("#icon").css({
		"fontSize":h*0.048,
		"marginLeft":w*0.047
	});
	$(".content-wrap").css({
		"height":h*0.278,
		
	});
	var w1=$("#img").width();
	$("#img").css("height",w1);
	$("p:first").css({
		"fontSize":h*0.035,
		"marginTop":h*0.02
	});
})
