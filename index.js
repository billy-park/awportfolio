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
					<a class="switchLink front">BACK</a>
				</p>`
				);
				frontExists = true;
			} else if (current.src == "src/Invite Back.png") {
				current.$content.append(
				`<p class="fancybox-extra">
				    <a class="switchLink back">FRONT</a>
				</p>`
				);
				backExists = true;
			}
			$('.front').one("click", function() {
					instance.next();
			})
			$('.back').one("click", function() {
					instance.previous();
			})
		},
		beforeShow: function() {
			$('.front').hide();
			$('.back').hide()
		}
	});

	$("#aboutMe").on("click", function() {
		$(".galleryContainer").hide();
		$(".hiddenAbout").show();
	})

	$("#contactMe").on("click", function() {
		$('html, body').animate({scrollTop:$(document).height()}, 'slow');
	})

	$("#portfolio").on("click", function() {
		$(".galleryContainer").show();
		$(".hiddenAbout").hide();
		$("#portfolio").addClass("active");
		$("#logos, #branding, #illustrations, #other").removeClass("active");
		$(".logo, .branding, .illustration, .other, .placeholder").show();
		$(".logosPlaceholder, .brandingPlaceholder, .illustrationsPlaceholder, .otherPlaceholder, .hiddenItem").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
	});

	$("#logos").on("click", function() {
		$(".galleryContainer").show();
		$(".hiddenAbout").hide();
		$("#logos").addClass("active");
		$("#portfolio, #branding, #illustrations, #other").removeClass("active");
		$(".branding, .illustration, .other").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".logo, .logosPlaceholder").show();
		$(".brandingPlaceholder, .illustrationsPlaceholder, .otherPlaceholder, .placeholder").hide();
		$(".hiddenItem").hide();
		$(".logo").children().attr("data-fancybox", "logos");
	});

	$("#branding").on("click", function() {
		$(".galleryContainer").show();
		$(".hiddenAbout").hide();
		$("#branding").addClass("active");
		$("#portfolio, #logos, #illustrations, #other").removeClass("active");
		$(".logo, .illustration, .other").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".branding, .brandingPlaceholder").show();
		$(".logosPlaceholder, .illustrationsPlaceholder, .otherPlaceholder, .placeholder").hide();
		$(".hiddenItem").hide();
		$(".branding").children().attr("data-fancybox", "branding");
	});

	$("#illustrations").on("click", function() {
		$(".galleryContainer").show();
		$(".hiddenAbout").hide();
		$("#illustrations").addClass("active");
		$("#portfolio, #logos, #branding, #other").removeClass("active");
		$(".logo, .branding, .other").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".illustration, .illustrationsPlaceholder").show();
		$(".logosPlaceholder, .brandingPlaceholder, .otherPlaceholder, .placeholder").hide();
		$(".hiddenItem").hide();
		$(".illustration").children().attr("data-fancybox", "illustrations");
	});
	
	$("#other").on("click", function() {
		$(".galleryContainer").show();
		$(".hiddenAbout").hide();
		$("#other").addClass("active");
		$("#portfolio, #logos, #branding, #illustrations").removeClass("active");
		$(".logo, .branding, .illustration").hide();
		$(".galleryItem").children().attr("data-fancybox", "gallery");
		$(".other, .otherPlaceholder").show();
		$(".logosPlaceholder, .brandingPlaceholder, .illustrationsPlaceholder, .placeholder").hide();
		$(".hiddenItem").hide();
		$(".other").children().attr("data-fancybox", "other");
	});
});