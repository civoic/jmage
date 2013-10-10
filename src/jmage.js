(function($) {
	$.fn.extend({
		jmage: function() {
			$(this).click(function(){
				var bg = $("<div></div>");
				bg.addClass("jmage-bg");
				$("body").append(bg);

				bg.click(function(){
					$(this).detach();
				});
			});
		}
	});
})(jQuery);