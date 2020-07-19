var len = 6;
var colors = randomcolors(6);
var picked = pickedColor(6);
var sqr = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var resetbtn = document.querySelector("#game");
var msg = document.querySelector("#msg");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
colorDisp.textContent = picked;


function randomcolors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")"); 		
	}
		return arr;	
}



resetbtn.addEventListener("click", function(){
	reset();
})



function pickedColor(noc) {
	var random = Math.floor(Math.random() * noc);
	return colors[random];
}

for(var i = 0; i < sqr.length; i++)
{
	sqr[i].style.background = colors[i];
	sqr[i].addEventListener("click", function(){
		if(this.style.background == (picked + " none repeat scroll 0% 0%"))
		{
			resetbtn.textContent = "PLAY AGAIN?";
			msg.textContent = "CORRECT!";
			var j = 0; 
			document.querySelector(".jumbotron").style.background = picked;
			while(j < len)
			{	
				sqr[j].style.background = picked;
				j++;
			}
		}
		else {
			this.style.background = "#232323";
			msg.textContent = "TRY AGAIN!";

			// document.querySelector("#game").textContent = "NEW GAME";
			// document.querySelector("#hard").textContent = "HARD";
			// document.querySelector("#eas").textContent = "EASY";
		}
	})
}

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	len = 3;
	reset();

})


hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	len = 6;
	reset();
})


function reset(){
	colors = randomcolors(len);
	picked = pickedColor(len);
	colorDisp.textContent = picked;
	resetbtn.textContent = "NEW COLORS";
	msg.textContent = "";
	document.querySelector(".jumbotron").style.background = "steelblue";
	for(var i = 0; i < sqr.length; i++){
		sqr[i].style.background = "#232323";
	}
	for(var i = 0; i < len; i++){
		sqr[i].style.background = colors[i];
	}
}