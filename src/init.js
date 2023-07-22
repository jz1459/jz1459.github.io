jQuery(document).ready(function ($) {
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });


    var sections = $("section");
    var navigation_links = $(".navbar-nav a");
    sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('.navbar-nav a[href="#' + active_section.attr("id") + '"]');

        navigation_links.removeClass("active");
        active_link.addClass("active");

		},
		offset: '35%'

	});
});