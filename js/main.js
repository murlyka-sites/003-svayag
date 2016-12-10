$(document).ready(function() {

	$("#work__slider-1").slick({
		centerMode: true,
		variableWidth: true,
		slidesToShow: 8,
		asNavFor: "#work__slider-2"
	});

	$("#tab-1").addClass("hidden");
	
	$("#work__slider-2").slick({
		centerMode: true,
		variableWidth: true,
		slidesToShow: 8,
		arrows: false,
		asNavFor: "#work__slider-1"
	});

	$(".reviews__slider").slick({
		arrows: false,
		asNavFor: ".reviews__names"
	});

	$(".reviews__names").slick({
		asNavFor: ".reviews__slider"
	});

	$(".work__filters .work__filter").click(function() {
		var $this = $(this),
			exActive = $this.parent().find(".active");

		if($this.hasClass("active")) {
			return false;
		}

		$(exActive.data("href")).addClass("hidden");
		exActive.removeClass("active");

		$($this.data("href")).removeClass("hidden");
		$this.addClass("active");

		return false;
	});

	$(".partners__slider").slick({
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			},
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	



	$(".fancy").fancybox({
		padding: 0
	});

	$(".input--phone").mask("+7 (999) 999-99-99");

	$("form").ajaxForm({
		url: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger("reset");
			$.fancybox("#success", {padding: 0});
			yaCounter39795505.reachGoal("call");
		}
	});

	$("#toTop").scrollToTop();
	
});

$(window).on("load", function() {
	// if(!isMobile.any) {
		new WOW().init();
	// }
});

(function($) {
	$.fn.scrollToTop=function(){
		$(this).hide().removeAttr("href");
		if($(window).scrollTop()!="0"){
			$(this).fadeIn("slow")
		}
		
		var scrollDiv=$(this);
		$(window).scroll(function(){

			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow");
			}else{
				$(scrollDiv).fadeIn("slow");
			}
		});
	
		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow");
		})
	}
})(jQuery);