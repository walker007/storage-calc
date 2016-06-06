$(document).ready(function() {
	$("button").click(function() {
		var number = $("input[type='number']").val();
		$("input[type='number']").val(" ");
		$("#calc #files ul li:first-child span").prepend(" ");

		var song = 3;
		var picture = 2;
		var video = 60;


		var result = number / song;

		$("#calc #files ul li:first-child span").prepend( result );
	});
});