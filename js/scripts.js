var xArray = [0, 1, 2, 3, 4, 5, 6];
var yArray = [0, 1, 2, 3, 4, 5];
var gameArray = [];
var tileArray = [];

function Game(pOneTurn, roundScore) {
	this.pOneTurn = pOneTurn;
	this.roundScore= roundScore;
}

function Tile(xValue, yValue, filled) {
	this.xValue = xValue;
	this.yValue = yValue;
	this.filled = filled;
}

gameArray.forEach(function(item) {
	var newTile = new Tile(item[0], item[1], false);
	tileArray.push(newTile);
	console.log(newTile.xValue);
});

xArray.forEach(function(xItem) {
	yArray.forEach(function(yItem) {
		gameArray.push([xItem, yItem]);
	});
});




Game.prototype.changePlayer = function(){
  if (this.pOneTurn === true) {
    this.pOneTurn = false;
	} else if (this.pOneTurn === false) {
		this.pOneTurn = true;
	}
}



$(document).ready(function () {
	var newGame = new Game(true, [0,0]);

});

//
// $("button#reverseButton").click(function(event) {
// 	event.preventDefault();
