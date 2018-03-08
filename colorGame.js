var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var pickedColor = randomPickColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(6);
	pickedColor = randomPickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#232323";
	this.textContent = "New Color";
	//assign color to squares
	for (var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++){
	//assign color to squares
	squares[i].style.backgroundColor = colors[i];
	//add listener
	squares[i].addEventListener("click", function(){
		var clickColor = this.style.backgroundColor; //string format
		if (clickColor === pickedColor){
			message.textContent = "Correct!"
			changeColor(clickColor);
			h1.style.backgroundColor = clickColor;
			resetButton.textContent = "Play Again";
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!"
		}
	})
}

function changeColor(color) {
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomPickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];	
}

function generateRandomColors(count){
	var arr = [];
	for (var i = 0; i < count; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return arr;
}