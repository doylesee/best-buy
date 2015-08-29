$(document).foundation();
$(document).ready(function(){
	// Create smooth sliding effect for # links
	$(function() {
		$('a').click(function() {			
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
		});
	});
	
	// Toggle show/hide More Details container
	$('.main-features__more-details.js a').click(function() {
		$('#more-details-js').slideToggle('slow');
	});
	
	// Detailed Specs section: Show More Specs button function
	$('#detailed-specs__details-button-js').click(function() {
		$('#detailed-specs__details-item-js, #detailed-specs__image-js').fadeIn('slow');
	});
});