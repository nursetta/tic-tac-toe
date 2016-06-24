window.onload = function(){
  new Game().start();
};

function Game() {
    this.playerX = 'X'; 
    this.playerO = 'O'; 
    this.counter = 0;
    this.turn = 0;
    this.square = document.getElementsByTagName('td');
}

Game.prototype.start = function(){
  this.listener();
  this.XorO();
//  this.clearBoard();
};

 
Game.prototype.listener = function(event) {
    var self = this;
    for (var i = 0; i < this.square.length; i++) {
        this.square[i].addEventListener("click", function() { 
            self.XorO();
                });
            }
        
};

Game.prototype.XorO = function(square) {
            
        if (this.square.length === 0) {
            if (this.counter % 2 === 0) {
                this.square.target.textContent = playerX;
                this.square.target.setAttribute('class', 'X');
                    this.turn = 1;
                    this.counter ++;
            } else {
                this.square.target.textContent = playerO;
                this.square.target.setAttribute('class', 'O');
                    this.turn = 0;
                    this.counter ++;
      
            }
      }  
};
    
    //     clearBoard: function() {
    //         for (var i = 0; i <this.listen.length; i++) {
    //             this.listen[i].textContent ='';
    //             this.listen[i].setAttribute('class', 'clearbackground');
    //         }
    //         turn = 0;
    //         counter = 0;
    //     }
    // };

            
