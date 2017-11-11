$(document).ready(function() {

	// SMOOTH SCROLLING -------------------------------------------------------------
	$(".navbtn").on('click', function(event) {

    	if (this.hash !== "") {
    		event.preventDefault();

    		var hash = this.hash;

    		$('html, body').delay(1000).animate({
    			scrollTop: $(hash).offset().top
    		}, 1000, function(){

    		window.location.hash = hash;
    		});
    	}
	});

	// NAVIGATION -------------------------------------------------------------
	var closeNav = function() {
		$(".nav").css("height", "0vh");
		$(".closebtn").delay(800).fadeOut(500);
		$(".openbtn").delay(800).fadeIn(500);
	};

	$(".openbtn").click(function() {
		$(".nav").css("height", "100vh");
		$(".openbtn").delay(800).fadeOut(500);
		$(".closebtn").delay(800).fadeIn(500);
	});

	$(".closebtn").click(closeNav);

	$(".navbtns a").click(closeNav);

	// MASONRY -------------------------------------------------------------
	$(".masonry").masonry({
		itemSelector: ".masonry-item",
		columnWidth: ".masonry-sizer",
		percentPosition: true
	});

	// SCROLLING AND LANDING ELEMENTS -------------------------------------------------------------
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		if(wScroll > $(".masonry").offset().top - ($(window).height() / 1.3)) {
			$(".masonry-item").each(function(i) {

				setTimeout(function() {
					$(".masonry-item").eq(i).addClass("showing");
				}, 170 * (i+1));
			});
		}
	});
});