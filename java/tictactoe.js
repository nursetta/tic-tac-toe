window.onload = start;
var boxes = document.getElementsByTagName("td");
var playerX = 'X'; 
var playerO = 'O'; 
var turn = 0; 

function start(){
showX(); 

}

function showX() {
	for (var i = 0; i < boxes.length; i++){
		boxes[i].addEventListener("click", makeX(i));
		}
}
function makeX(box) {
	if (turn === 0) {
     boxes[box].textContent = playerX;
            turn = 1;
        } else {
     boxes[box].textContent = playerO;
            turn = 0;
        }

}

/* I have worked on this for two days straight and I can't figure
out why it is pulling in x's and o's when the page loads. My click
function works seperately and so does the function, but together
it's almost like everything is executing all at once and not on 
each click. I can look online and find a thousand different ways
to make this work, but I am trying to use what we are learning in 
class to create this game. I'm at a loss and very frustrated. */