
$(document).ready(() => {
	$('.ui.checkbox').checkbox();
	$('.menu .item').tab();
	$('.button').popup();
		$('.ui.menu a.item').on('click', function () {
		$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});
});
		
$('.ui.accordion')
	.accordion()
;
$('.trigger.example .accordion')
	.accordion({
		selector: {
			trigger: '.title .icon'
		}
	})
;
$('.ui.accordion').accordion('refresh');
