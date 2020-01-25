var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var p1current = document.querySelector("#p1current h1");
var p2current = document.querySelector("#p2current h1");
var p1total = document.querySelector("#p1total");
var p2total = document.querySelector("#p2total")
var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var hold = document.querySelector("#hold");
var roll = document.querySelector("#roll");
var newGame = document.querySelector("#newgame");
var turn = 1;
var final = document.querySelector("#final");
var pHead1 = document.querySelector(".phead1");
var pHead2 = document.querySelector(".phead2");
var win = 100;

hold.addEventListener("click", function(){
	classToggler();
	checker();
	if(turn === 1) {
		turn = 2;
		p1total.textContent = Number(p1total.textContent) + Number(p1current.textContent);
	}
	else { 
		turn = 1;
		p2total.textContent = Number(p2total.textContent) + Number(p2current.textContent);
	}
	checker();
	p1current.textContent = 0; 
	p2current.textContent = 0;
	return turn;
	img1.style.display = "block";
	img2.style.display = "block";

});

newGame.addEventListener("click", function(){
	reseter();
	enabler();
	final.value = "";
});

roll.addEventListener("click", function(){
    checker();
	var random1 = randomizer1();
	var random2 = randomizer2();
	img1.style.display = "block";
	img2.style.display = "block";
	if(random1 === 1 || random2 === 1){
		random1 = 0;
		random2 = 0;
		classToggler();
		img1.style.display = "none";
		img2.style.display = "none";

		if(turn === 1){
			p1current.textContent = 0;
			turn = 2;
		}
		else if (turn === 2){
			p2current.textContent = 0;
			turn = 1;
		}
	}
	else {
			diceimgs(random1 , random2);
	}

    if(turn === 1) {
		p1current.textContent = Number(p1current.textContent) + random1 + random2;
	}
	else if(turn === 2) {
		p2current.textContent = Number(p2current.textContent) + random1 + random2;
	}
	checker();
});

final.addEventListener("change", function(){
	winScore();
	reseter();
});

function classToggler() {
	player1.classList.toggle("active");
	player2.classList.toggle("active");
}; 	

function randomizer1() {
	var random1 = Math.floor(Math.random()*6 + 1);
	return random1;
};

function randomizer2() {
	var random2 = Math.floor(Math.random()*6 + 1);
	return random2;
};

function reseter() {
	p1current.textContent = "0";
	p2current.textContent = "0";
	p1total.textContent = "0";
	p2total.textContent = "0";
	player1.classList.add("active");
	player2.classList.remove("active");
	turn = 1;
	pHead1.classList.remove("winner");
	pHead1.textContent = "PLAYER 1";
	pHead2.classList.remove("winner");
	pHead2.textContent = "PLAYER 2";
	// final.value = "";
};

function diceimgs(num1 , num2){
	img1.setAttribute("src","imgs/dice" + num1 + ".png");
	img2.setAttribute("src","imgs/dice" + num2 + ".png");
};

function winScore(){
	if(final.value === ""){
		win = 100;
	}else {
		win = Number(final.value);
	}
	return win;
};

function checker(){
     win = winScore();
	if(Number(p1total.textContent) >= win)
	{
		pHead1.textContent = "Winner";
		pHead1.classList.add("winner");
		Disabler();
	}
	else if(Number(p2total.textContent) >= win)
	{
		pHead2.textContent = "Winner";
		pHead2.classList.add("winner");
		Disabler();
	}
};

function Disabler(){
	hold.style.display = "none";
	roll.style.display = "none";
};

function enabler(){
	hold.style.display = "block";
	roll.style.display = "block";
}
