// Directions:
/* 
- Using any of the tools you’ve worked with so far, 
- Create a game of tic-tac-toe. 
- A heading should say whether it is X’s or O’s turn and change with each move made.
- Create a tic-tac-toe grid using your HTML element of choice. 
- When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
- A button should be available to clear the grid and restart the game.
- When a player has won, or the board is full and the game results in:
    - a draw
    - a Bootstrap alert or similar Bootstrap 
    - component should appear across the screen announcing the winner.
*/


var turn = document.getElementById("turn"),
boxes = document.querySelectorAll("#main .box");
// use query selector to select all of my classes in from main div
let X_or_O = 0;
var b0 = document.getElementById("b0"),
    b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    b4 = document.getElementById("b4"),
    b5 = document.getElementById("b5"),
    b6 = document.getElementById("b6"),
    b7 = document.getElementById("b7"),
    b8 = document.getElementById("b8");
// using dom getElementById to find all my boxes


newGame();

function newGame(){
    startGame();
}


// check the winning combo to declare a winner
function winningBoxes(b0, b1, b2) {
    b0.classList.add("win");
    // using classlist property to check if the winning box is box0 from the top row
    // https://sebhastian.com/classlist-javascript/     <== to understand classlist.add
    // the add method to pull the css "win" style and add it to the class list for the box0
    // will highlight the boxes that are a part of the winning connections
    b1.classList.add("win");
    // using classlist property to check if the winning box is box1 from the top row
     // https://sebhastian.com/classlist-javascript/     <== to understand classlist.add
    // the add method to pull the css "win" style and add it to the class list for the box0
     // will highlight the boxes that are a part of the winning connections
    b2.classList.add("win");
    // using classlist property to check if the winning box is box2 from the top row
     // https://sebhastian.com/classlist-javascript/     <== to understand classlist.add
    // the add method to pull the css "win" style and add it to the class list for the box0
     // will highlight the boxes that are a part of the winning connections
    turn.innerHTML = b0.innerHTML + " is the winner!!! Woohoo, time to celebrate. Play again!!";
    console.log(b0.innerHTML + " is the winner!!! Woohoo, time to celebrate. Play again!!");
    // this will display who's won the game
    turn.style.fontSize = "30px";
    // turn.innerHTML = 'Play again';
  }
  console.log(b0.classList);



// check for the winning combos
function checkWinner() {
    // ways for how a game could be won
    if (b0.innerHTML !== "" && b0.innerHTML === b1.innerHTML && b0.innerHTML === b2.innerHTML)
      winningBoxes(b0, b1, b2);
    /*================*/
    if (b0.innerHTML !== "" && b0.innerHTML === b3.innerHTML && b0.innerHTML === b6.innerHTML)
        winningBoxes(b0, b3, b6);
    /*================*/
    if (b0.innerHTML !== "" && b0.innerHTML === b4.innerHTML && b0.innerHTML === b8.innerHTML)
        winningBoxes(b0, b4, b8);
    /*================*/
    if (b1.innerHTML !== "" && b1.innerHTML === b4.innerHTML && b1.innerHTML === b7.innerHTML)
        winningBoxes(b1, b4, b7);
    /*================*/
    if (b2.innerHTML !== "" && b2.innerHTML === b5.innerHTML && b2.innerHTML === b8.innerHTML)
        winningBoxes(b2, b5, b8);
    /*================*/
    if (b2.innerHTML !== "" && b2.innerHTML === b4.innerHTML && b2.innerHTML === b6.innerHTML)
        winningBoxes(b2, b4, b6);
     /*================*/
    if (b3.innerHTML !== "" && b3.innerHTML === b4.innerHTML && b3.innerHTML === b5.innerHTML)
        winningBoxes(b3, b4, b5);
    /*================*/
    if (b6.innerHTML !== "" && b6.innerHTML === b7.innerHTML && b6.innerHTML === b8.innerHTML)
        winningBoxes(b6, b7, b8);
}
//   console.log(X_or_O + "won this row");


// starts the game
// also determine who is next
function startGame(){
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].onclick = function () {
                if (this.innerHTML !== "X" && this.innerHTML !== "O") {
                    // clean board w/ no X or O starting
                    if (X_or_O % 2 === 0) {
                    console.log(X_or_O);
                    this.innerHTML = "X";
                    // if turn started w/ X
                    // players are defined by this line
                    turn.innerHTML = "Player 2 it is your turn now";
                    //  will pop up to tell "O" to go next
                    checkWinner();
                    // check to see if this select caused a win
                    X_or_O += 1;
                    // console.log("X, you got this.");
                    //  print encouraging message
                } else {
                    console.log(X_or_O);
                    this.innerHTML = "O";
                    turn.innerHTML = "Player 1 it is your turn now";
                    checkWinner();
                    // check to see if this select caused a win
                    X_or_O += 1;
                    // console.log("I hope you win O!!");
                    //  print encouraging message
                    }
                } 
            } 
        };
}


document.getElementById('replay').addEventListener('click', replay);
// tell the dom to listen for a click on the replay button



// function to replay/restart game  
function replay() {
    // this will clear the board and clear the classlist of any selections
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("win");
    // remove the winning css style
      boxes[i].innerHTML = "";
    // all the boxes will clear and no x/o will be displayed
      turn.innerHTML = "Opposite player start";
    // this will prompt the opposite player to start the next round
      turn.style.fontSize = "25px";
      console.log(X_or_O);
    // will display how many clicks
    }
}


function endGame(draw) {
    if (draw) {
      turn.innerText = 'Draw!'
    } else {
      turn.innerText = b0.innerHTML + " is the winner!!! Woohoo, time to celebrate. Play again!!";
    }
  }
  
  function isDraw() {
    return [...boxes].every(box => {
      return box.classList.contains("O") || box.classList.contains("X")
    });
  }