$(function(){
	var w = $(window).width();
	var h = $(window).height();
	$("header").css("height",h*0.067);
	$("#hotgame").css({
		"width":w*0.3+"px",
		"height":h*0.067+"px",
		"lineHeight": h*0.067+"px",
		"fontSize": h*0.03+"px"		
	});
	$("#icon").css({
		"fontSize":h*0.048+"px",
		"marginLeft":w*0.047+"px"
	});
	$(".content-wrap").css({
		"height":h*0.278+"px",
		"padding-top":h*0.068+"px"
	});
	$("#img").css({
		"width":w*0.157+"px",
		"height":w*0.157+"px",
	});
	$("p:first").css({
		"fontSize":h*0.035+"px",
		"marginTop":h*0.02+"px"
	});
})
