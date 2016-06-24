
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

 

function Board() {
    var box = document.getElementsByTagName('td');
    var playerX = 'X'; 
    var playerO = 'O'; 
    this.square = box;
    this.counter = 0;
    this.turn = 0;


}
    Board.prototype = {
            
        XorO: function() {
         
         if (this.square.length === 0) {
             if (this.counter % 2 === 0) {
                 this.square.textContent = playerX;
                 this.square.setAttribute('class', 'X');
                        this.turn = 1;
                        this.counter ++;
              } else {
                 this.square.textContent = playerO;
                 this.square.setAttribute('class', 'O');
                        this.turn = 0;
                        this.counter ++;
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
        }};
    
    //     clearBoard: function() {
    //         for (var i = 0; i <this.listen.length; i++) {
    //             this.listen[i].textContent ='';
    //             this.listen[i].setAttribute('class', 'clearbackground');
    //         }
    //         turn = 0;
    //         counter = 0;
    //     }
    // };

            

Board();
