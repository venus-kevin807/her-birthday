

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			var $textContainer = $ele.closest('#text');
			$ele.html('');
			var lastScrollHeight = 0;
			
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				
				// Auto-scroll suave solo cuando el contenido crece significativamente
				if ($textContainer.length) {
					var currentScrollHeight = $textContainer[0].scrollHeight;
					// Solo scroll si la altura ha cambiado más de lo esperado (new line/paragraph)
					if (currentScrollHeight > lastScrollHeight + 10) {
						$textContainer.stop().animate({scrollTop: currentScrollHeight}, 150);
						lastScrollHeight = currentScrollHeight;
					}
				}
				
				if (progress >= str.length) {
					clearInterval(timer);
					// Asegurar scroll final
					if ($textContainer.length) {
						$textContainer.stop().animate({scrollTop: $textContainer[0].scrollHeight}, 200);
					}
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}