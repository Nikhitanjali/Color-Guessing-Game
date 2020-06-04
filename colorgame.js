var numsquares=6;
var colors= [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay= document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#messagedisplay");
var h1= document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebuttons=document.getElementsByClassName("mode");
init();
function init(){
mode();
square();
reset();
}
function mode()
{
	for(var i = 0; i < modebuttons.length; i++)
	
	{

    modebuttons[i].addEventListener("click", function(){
	modebuttons[0].classList.remove("select");
	modebuttons[1].classList.remove("select");
	this.classList.add("select");
	if(this.textContent == "Easy")
	{
		numsquares=3;
	}
	else{
		numsquares = 6;
	}
	 reset();
});
}
}
function square()
{
	for(var i=0; i< squares.length; i++){


squares[i].addEventListener("click", function(){
var clickedcolor= this.style.background;
if(clickedcolor==pickedcolor)
{
	messagedisplay.textContent=" Correct!";
	changescolor(clickedcolor);
	h1.style.background = clickedcolor;
	resetbutton.textContent=" Play Again";
}
else{
	this.style.background="#232323";
	messagedisplay.textContent=" Try Again";
}
});
}
}
function reset(){
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
 resetbutton.textContent="New Game";	
	messagedisplay.textContent="";
	
	for(var i=0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background= colors[i];
		}
		else
		{
			squares[i].style.display= "none";
		}
	}
	h1.style.background="orange";
	
}
	
resetbutton.addEventListener("click", function(){
	reset();
	
}); 
	


function changescolor(color)
{
	for( var i=0; i< squares.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pickcolor()
{
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generaterandomcolor(num)
{
	var arr = []
	for(i=0; i< num; i++)
	{
		arr.push(randomcolor())
	}
	return arr;
}
function randomcolor()
{
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);

	var b= Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

	
