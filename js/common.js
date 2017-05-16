$(function(){
	var w = $(window).width();
	var h = $(window).height();
	$("header").css("height",h*0.067);
	$("#hotgame").css({
		"width":w*0.3,
		"height":h*0.067,
		"lineHeight": h*0.067+"px",
		"fontSize": h*0.03		
	});
	$("#icon").css({
		"fontSize":h*0.048,
		"marginLeft":w*0.047
	});
	$(".content-wrap").css({
		"height":h*0.278,
		"padding-top":h*0.068
	});
	$("#img").css({
		"width":w*0.157+"px",
		"height":w*0.157+"px",
	});
	$("p:first").css({
		"fontSize":h*0.035,
		"marginTop":h*0.02
	});
})
