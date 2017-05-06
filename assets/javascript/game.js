var targetNumber = Math.floor(Math.random() * 120)  + 19;

var blueCrystal = Math.floor(Math.random() * 12) + 1;
var redCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;

var score = 0;

var winner = 0;

var loser = 0;


function reset() {
	score = 0;
	
	targetNumber = Math.floor(Math.random() * 120)  + 19;
		$("#target").html(targetNumber);

	blueCrystal = Math.floor(Math.random() * 12) + 1;
	redCrystal = Math.floor(Math.random() * 12) + 1;
	greenCrystal = Math.floor(Math.random() * 12) + 1;
	yellowCrystal = Math.floor(Math.random() * 12) + 1;
}