var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var hold = document.querySelector("#hold");
var roll = document.querySelector("#roll");
var newGame = document.querySelector("#newgame");
var p2Display = document.querySelector(".p2dis");
var p1Total = document.querySelector("#p1total h1");
var p2Total = document.querySelector("#p2total h1");
var img1 = document.querySelector("#image1");
var turn = 1;
var p = 'p' + turn + 'Display';
var t = "p" + turn + "Total";
var roundScore;

function classToggler() {
	player1.classList.toggle("active");
	player2.classList.toggle("active");
}

hold.addEventListener("click", function(){
	classToggler();
	if(turn === 2)
	{
		turn = 1;
	}
	else 
	{ 
		turn = 2;
	}
 	p = "p" + turn + "Display";
	t = "p" + turn + "Total";


});

newGame.addEventListener("click", function(){
	reseter();
});

function reseter() {
	p1Display.textContent = "0";
	p2Display.textContent = "0";
	p1Total.textContent = "0";
	p2Total.textContent = "0";
	player1.classList.add("active");
	player2.classList.remove("active");
	turn = 1;
}

function randomizer() {
	var random = Math.floor(Math.random()*6 + 1);
	return random;
}

roll.addEventListener("click", function(){
	var score = document.querySelector('.p' + turn + 'dis').textContent;
	var ran = randomizer();

	if (ran !== 1) {
            //Add score
            roundScore += ran;
            document.querySelector('.p' + turn + 'dis').textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
	

	// p.textContent = score;
	// img1.src = "imgs/dice" + ran + ".png";
	// console.log(text);
	// // console.log(p.textContent);
});