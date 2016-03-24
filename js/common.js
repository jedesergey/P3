$(document).ready(function() {

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu_ ul a").click(function() {
		$(".top_mnu_").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu_").is(":visible")) {
			$(".top_mnu_").fadeOut(600);
			$(".top_mnu_ li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu_").fadeIn(600);
			$(".top_mnu_ li a").addClass("fadeInUp animated");
		};
	});
	
});