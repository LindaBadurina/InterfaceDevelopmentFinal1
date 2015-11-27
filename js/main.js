$(document).ready (function() {

var score = 0;

$(".orange").click (function() {
	score = score + 1;
	$(".score").html("Oranges Juiced = " + score);

	if (score == 5 ) {
		$(".jug").attr("src","img/jug2.png");
	}

	else if (score == 10 ) {
		$(".jug").attr("src","img/jug3.png");

	}

	else if (score == 15 ) {
		$(".jug").attr("src","img/jug4.png");

	}

	else if (score == 20 ) {
		$(".jug").attr("src","img/jug5.png");

	}

	else if (score == 25 ) {
		$(".jug").attr("src","img/jug6.png");

	}

	else if (score == 30 ) {
		$(".jug").attr("src","img/jug7.png");

	}

	else if (score == 35 ) {
		$(".jug").attr("src","img/jug8.png");

	}




});

});


