$(document).ready(function(){
	
	$("button").click(function(){
		$("h1").toggle();
	});
	$("button").click(function(){
		$("h1").append("more");
	});
	$(".nav").hide();
	$("img").click(function(){
       	$(".nav").slideToggle();
	});
});