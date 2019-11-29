$(document).ready(function() {

	// REMOVE # FROM URL
	$('a[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$(".imgLink").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
        'overlayShow'	:	true,
		'hideScrollbar' : false,
		'buttons' : [
			"close",
			"thumbs"
		]
	});

	$('[data-fancybox="gallery"]').fancybox({
		idleTime: 0,
		afterShow: function(instance, current) {
			if (current.src == "src/Invite Front copy.png") {
				current.$content.append(
				`<p class="fancybox-extra">
					<a href="javascript:$('.fancybox-image').attr('src', 'src/Invite Front copy.png');" class="switchLink">FRONT</a>
					<a href="javascript:$('.fancybox-image').attr('src', 'src/Invite Back.png');" class="switchLink">BACK</a>
				</p>`
				);
			}
		}
		//}
	});

	$("#portfolio").on("click", function() {
		$("#portfolio").addClass("active");
		$("#logos, #branding, #illustrations, #other").removeClass("active");
		$(".logo, .branding, .illustration, .other").show();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
	});

	$("#logos").on("click", function() {
		$("#logos").addClass("active");
		$("#portfolio, #branding, #illustrations, #other").removeClass("active");
		$(".branding, .illustration, .other").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".logo").show();
		$(".logo").children().attr("data-fancybox", "logos");
	});

	$("#branding").on("click", function() {
		$("#branding").addClass("active");
		$("#portfolio, #logos, #illustrations, #other").removeClass("active");
		$(".logo, .illustration, .other").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".branding").show();
		$(".branding").children().attr("data-fancybox", "branding");
	});

	$("#illustrations").on("click", function() {
		$("#illustrations").addClass("active");
		$("#portfolio, #logos, #branding, #other").removeClass("active");
		$(".logo, .branding, .other").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".illustration").show();
		$(".illustration").children().attr("data-fancybox", "branding");
	});
	
	$("#other").on("click", function() {
		$("#other").addClass("active");
		$("#portfolio, #logos, #branding, #illustrations").removeClass("active");
		$(".logo, .branding, .illustration").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".other").show();
		$(".other").children().attr("data-fancybox", "branding");
	});
});