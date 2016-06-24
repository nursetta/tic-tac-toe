function Turn() {
    this.marker = 'X' 
}

var myTurn = new Turn();


window.onload = start;
var boxes = document.getElementsByTagName("td");
var playerX = 'X'; 
var playerO = 'O'; 
var turn = 0;
var counter = 0; 

function start() {
    var box = document.getElementsByTagName('td');
    for (var i = 0; i <box.length; i++) {
    box[i].addEventListener("click", makeX);
	}

    var reset = document.querySelector('button');
	reset.addEventListener("click", clearBoard);

}

function makeX(square) {
	if (square.target.textContent.length === 0) {
     if (myTurn.marker === 'X') {
        myTurn.marker = 'O';
        square.target.textContent = playerX;
        square.target.setAttribute('class', 'X');
        turn = 1;
        counter ++;
    } 
    else {
        myTurn.marker = 'X';
        square.target.textContent = playerO;
        square.target.setAttribute('class', 'O');
        turn = 0;
        counter ++;
    }
}
}

function clearBoard() {
    for (var i = 0; i <boxes.length; i++) {
    boxes[i].textContent ='';
    boxes[i].setAttribute('class', 'clearbackground');
}
	turn = 0;
	counter = 0;
}



start();


