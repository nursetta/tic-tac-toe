
//window.onload = Board;
// var boxes = document.getElementsByTagName("td");


// function start() {
//     var box = document.getElementsByTagName('td');
//     for (var i = 0; i <box.length; i++) {
//     box[i].addEventListener("click", makeX);
// 	}

//     var reset = document.querySelector('button');
// 	reset.addEventListener("click", clearBoard);

// }

// function makeX(square) {
// 	if (square.target.textContent.length === 0) {
// 	if (counter % 2 === 0) {
//      square.target.textContent = playerX;
//      square.target.setAttribute('class', 'X');
//             turn = 1;
//             counter ++;
//         } else {
//      square.target.textContent = playerO;
//      square.target.setAttribute('class', 'O');
//             turn = 0;
//             counter ++;
//         }
// }
// }

var box = document.getElementsByTagName('td');
var reset = document.querySelector('button');
var playerX = 'X'; 
var playerO = 'O'; 
var turn = 0;
var counter = 0; 

function Board() {
    this.square = box;
    this.listen = reset;
}

    Board.prototype = {
            
        XorO: function() {
         
         if (this.square.textContent.length === 0) {

             if (counter % 2 === 0) {
                 this.square.textContent = playerX;
                 this.square.setAttribute('class', 'X');
                        turn = 1;
                        counter ++;
              } else {
                 this.square.textContent = playerO;
                 this.square.setAttribute('class', 'O');
                        turn = 0;
                        counter ++;
                    }        
            }
        },
            
        listener: function() {   
            var self = this;
            for (var i = 0; i < this.square.length; i++) {
                this.square[i].addEventListener("click", function() { 
                    self.XorO();
                });
            }
        },
    
        clearBoard: function() {
            for (var i = 0; i <this.listen.length; i++) {
                this.listen[i].textContent ='';
                this.listen[i].setAttribute('class', 'clearbackground');
            }
            turn = 0;
            counter = 0;
        }
    };

            

Board();
