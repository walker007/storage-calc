$(document).ready(function() {
	$("input[type='submit']").click(function() {
		var number = $("input[type='number']").val();
		var number = number * 1024;

		var song = 3;
		var picture = 2;
		var video = 60;

		for (var i = song; i = number; i++) {
			if (i == number) {
				$("#files ul li:first-child span").prepend("Foi!");
			} else {
				i++;
			}
		}
	});
});