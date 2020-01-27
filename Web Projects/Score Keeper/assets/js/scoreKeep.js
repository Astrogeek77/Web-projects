
var p1btn = document.querySelector("#p1");
var p1Score = 0;
var p2btn = document.getElementById("p2");
var p2Score = 0;
var par = document.querySelector("p");
var p1Display = document.getElementById("p1s");
var p2Display = document.querySelector("#p2s");
var resetBtn = document.querySelector("#reseta")
var gameOver = false;
var winDisplay = document.querySelector("p span");
var userScore = document.querySelector("input");
var winnerPerson = document.querySelector("#winnerPerson");
var winScore = 5;

// Player 1
p1btn.addEventListener("click", function(){
 if(!gameOver){
	p1Score += 1;
    if(p1Score === winScore){
    	p1Display.classList.add("winner");
    	gameOver = true;
    	winnerPerson.textContent = "PlayerOne";	
    }
	p1Display.textContent = p1Score;
	// Can also use span in h1 to Display!
	}
});

// player 2
p2btn.addEventListener("click", function(){
	if(!gameOver){
	p2Score += 1;
    if(p2Score === winScore){
    	p2Display.classList.add("winner");
    	gameOver = true;
    	winnerPerson.textContent = "PlayerTwo";
    }
	p2Display.textContent = p2Score;
	// Can also use span in h1 to Display!
	}
});

// Reset btn
resetBtn.addEventListener("click", function(){
	reseter();
	// console.log("Clicked!");
});

userScore.addEventListener("change", function(){
	winDisplay.textContent = userScore.value;
	winScore = Number(userScore.value);
	// Can use this Keyword here instead of userScore
	reseter();
});

// function h1Display(){
// 	h1.textContent = p1Score + " - " + p2Score;
// }
// h1.textContent = p1Score + " - " + p2Score;

function reseter(){
	p1Score = p2Score = 0;
	p2Display.textContent = p2Score;
	p1Display.textContent = p1Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	winnerPerson.textContent = "none";
	userScore.value = "";
};