function Turn() {
    this.marker = 'X' ;
}

var myTurn = new Turn();

Turn.prototype = {
    switch: function(square_target){

    }
};

window.onload = start;
var boxes = document.getElementsByTagName("td");


function start() {
    var box = document.getElementsByTagName('td');
    for (var i = 0; i <box.length; i++) {
    box[i].addEventListener("click", makeX);
	}

    var reset = document.querySelector('button');
	reset.addEventListener("click", clearBoard);

}

function makeX(square) {
	// if (square.target.textContent.length === 0) {
 //        myTurn.switch(square.target);
 //    }

    if (square.target.textContent.length === 0) {
     
     if (myTurn.marker === 'X') {
        square.target.textContent = myTurn.marker;
        square.target.setAttribute('class', myTurn.marker);
        myTurn.marker = 'O';
    } 
    else {
        square.target.textContent = myTurn.marker;
        square.target.setAttribute('class', myTurn.marker);
        myTurn.marker = 'X';
    }
}
}

function clearBoard() {
    for (var i = 0; i <boxes.length; i++) {
    boxes[i].textContent ='';
    boxes[i].setAttribute('class', 'clearbackground');
}
	myTurn.marker = 'X';

}



start();


