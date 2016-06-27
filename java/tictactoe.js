function Turn() {
    this.marker = 'X' ;
}

var myTurn = new Turn();

Turn.prototype = {
    switch: function(square_target){
        
    }
};

window.onload = start;

function start() {
    var box = document.getElementsByTagName('td');
    var reset = document.querySelector('button');    
    for (var i = 0; i <box.length; i++) {
    if (box[i].addEventListener("click", markXorO));
    reset.addEventListener("click", clearBoard);	
    }
}

function markXorO(square) {
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
    var box = document.getElementsByTagName('td');
    for (var i = 0; i <box.length; i++) {
    box[i].textContent ='';
    }
	myTurn.marker = 'X';
}
start();