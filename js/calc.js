$(document).ready(function() {
	$("button").click(function() {
		var number = $("input[type='number']").val();

		var song = 3;
		var picture = 2;
		var video = 60;


		for (var i = 1; i == number; i++) {
			res = i * song;
			if (res >= number) {
				$("#files ul li:first-child span").prepend("Foi!");
			}
		}
	});
});