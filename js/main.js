$(function(){
	
	/* ==> slider section Height <== */
	
	/* get height of upper Navbar section*/
	let upperNavbarHeight = $(".upper-navbar").innerHeight();
	/* get height of navbar section*/
	let navbarHeight = $(".navbar").innerHeight();
	/* get height of window section*/
	let windowHeight = $(window).height();
	
	/* set height of slider section*/
	$(".slid,.carousel-item").height(windowHeight - upperNavbarHeight - navbarHeight);

	
	/* ==> Featured Work section <== */
	$(".feature-list li").click(function (){
		
		$(this).siblings().removeClass("active").end().addClass("active");
		$(".featured-work .col-md").css("opacity",".08");
		$(".col-md."+$(this).data("feature")).css("opacity","1");
		
	});
	
});