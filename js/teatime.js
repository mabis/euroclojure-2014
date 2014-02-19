$("a#menu").on("click", function() {
	$("nav").slideToggle();
	$("a#menu").toggleClass("off");
});