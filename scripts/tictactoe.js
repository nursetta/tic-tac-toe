var squares = document.getElementsByTagName("td");
var xCounter = 0;
var oCounter = 0;
var tieCounter = 0;

startGame = function() {
    console.log("New game has started!");
    // console.log("inside start function");
    player1 = true;
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", playerSwitch);
    }
};

playerSwitch = function() {
    // console.log("inside playerSwitch function");
    if (player1 === true) {
        markX();
    } else {
        markO();
    }
};

markX = function () {
    // console.log("inside markX function");
    event.target.textContent = "X";
    event.target.removeEventListener("click", playerSwitch);
    player1 = false;
    checkWinner();
};

markO = function () {
    // console.log("inside markO function");
    event.target.textContent = "O";
    event.target.removeEventListener("click", playerSwitch); 
    player1 = true;
    checkWinner();

};

checkBoard = function() {
    s1 = document.getElementById("s1").textContent;
    s2 = document.getElementById("s2").textContent;
    s3 = document.getElementById("s3").textContent;
    s4 = document.getElementById("s4").textContent;
    s5 = document.getElementById("s5").textContent;
    s6 = document.getElementById("s6").textContent;
    s7 = document.getElementById("s7").textContent;
    s8 = document.getElementById("s8").textContent;
    s9 = document.getElementById("s9").textContent;
};

checkWinner = function() {
    checkBoard();
    // console.log("in checkWinner function");
    if (
        ((s1 == s2 && s1 == s3) && (s1 == "X")) || //first row
        ((s4 == s5 && s4 == s6) && (s4 == "X")) || //second row
        ((s7 == s8 && s7 == s9) && (s7 == "X")) || //third row
        ((s1 == s4 && s1 == s7) && (s1 == "X")) || //first column
        ((s2 == s5 && s2 == s8) && (s2 == "X")) || //second column
        ((s3 == s6 && s3 == s9) && (s3 == "X")) || //third column
        ((s1 == s5 && s1 == s9) && (s1 == "X")) || //diagonal 1
        ((s3 == s5 && s3 == s7) && (s3 == "X")) //diagonal 2
        ) {
            alert("X Wins!");
            xCounter ++;
            document.getElementById("xWinsCount").textContent = xCounter;
            setTimeout(clearBoard, 1000);
        }
    else if (
        ((s1 == s2 && s1 == s3) && (s1 == "O")) || //first row
        ((s4 == s5 && s4 == s6) && (s4 == "O")) || //second row
        ((s7 == s8 && s7 == s9) && (s7 == "O")) || //third row
        ((s1 == s4 && s1 == s7) && (s1 == "O")) || //first column
        ((s2 == s5 && s2 == s8) && (s2 == "O")) || //second column
        ((s3 == s6 && s3 == s9) && (s3 == "O")) || //third column
        ((s1 == s5 && s1 == s9) && (s1 == "O")) || //diagonal 1
        ((s3 == s5 && s3 == s7) && (s3 == "O")) //diagonal 2
        ) {
            alert("O Wins!");
            oCounter ++;
            document.getElementById("oWinsCount").textContent = oCounter;
            setTimeout(clearBoard, 1000);
        } 
    else if ( // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
        ((s1 == "X") || (s1 == "O")) && 
        ((s4 == "X") || (s4 == "O")) && 
        ((s7 == "X") || (s7 == "O")) && 
        ((s2 == "X") || (s2 == "O")) && 
        ((s5 == "X") || (s5 == "O")) && 
        ((s8 == "X") || (s8 == "O")) && 
        ((s3 == "X") || (s3 == "O")) && 
        ((s6 == "X") || (s6 == "O")) && 
        ((s9 == "X") || (s9 == "O"))
        ) {
            alert("It's a tie!");
            tieCounter++;
            document.getElementById("tieGameCount").textContent = tieCounter;
            setTimeout(clearBoard, 1000);
        }
};

function clearBoard() {
    // console.log("In clearBoard Function");
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent ="";
    }
    startGame();

}

window.onload = startGame();


