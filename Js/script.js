$(document).ready(function() {
	$("#navHeading").click(function() {
		window.location.reload();
	});
	$(window).keyup(function(e) {
		if (e.keyCode == 44) {
			$("body").hide();
			alert("This site is print screen restricted")
		}
	});
});