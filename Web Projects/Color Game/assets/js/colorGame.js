var colors = randomColorGenerator(6);

// hardButton.classList.add("selected");

var h1 = document.querySelector("#main span");
var msg = document.querySelector("#msg");
// var random = Math.round(Math.random()*255);
pickedColor = randomizer();
var numSqrs = 6;

var mainHead = document.querySelector("#heading");
var colorDis = document.querySelector("#colorDis");
var reset = document.querySelector("#reseter");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
colorDis.textContent = pickedColor;

var squares = document.querySelectorAll(".sqr");
checker();

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	// alert("easybtn Clicked!");
	mainHead.style.backgroundColor = "steelBlue";
	numSqrs = 3;
    colors = randomColorGenerator(numSqrs);
    pickedColor = randomizer();
    colorDis.textContent = pickedColor;
    for(var i = 0; i <= squares.length; i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor = colors[i];
    	}else {
    		squares[i].classList.add("hidden");
    	}
    }

});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	mainHead.style.backgroundColor = "steelBlue";
	// alert("hardbtn Clicked!");
	numSqrs = 6;
	colors = randomColorGenerator(numSqrs);
    pickedColor = randomizer();
    colorDis.textContent = pickedColor;
    for(var i = 0; i <= squares.length; i++){
    		squares[i].style.backgroundColor = colors[i];
    		squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function(){
	colors = randomColorGenerator(numSqrs);
	pickedColor = randomizer();
	colorDis.textContent = pickedColor;
	checker();
	reset.textContent = "New Colors"
	msg.textContent = "";
	mainHead.style.backgroundColor = "steelBlue";

});

function changeColor(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedColor;
	}
	mainHead.style.backgroundColor = pickedColor;
}

function randomizer(){
	var randomIndex = Math.round(Math.random()*colors.length);
	var pickedColor = colors[randomIndex];
	return pickedColor;
}

function randomColorGenerator(div){
	var ranColor = [];
	for(var i = 0; i < div; i++){
		ranColor.push(colorRandom());
  }
	return ranColor;
  
}

function colorRandom(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var result = "rgb(" + red + ", " + green + ", " + blue + ")";
	return result;
}

function checker(){
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor ){
			msg.textContent = "Correct";
		    reset.textContent = "Play Again?"
			changeColor();
		}else{
			this.style.backgroundColor = "#1d2124";
			msg.textContent = "Try Again!";
		}
	});
}
}
