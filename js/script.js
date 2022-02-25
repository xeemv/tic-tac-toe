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
boxes = document.querySelectorAll("#main div"), X_or_O = 0;

function selectWinnerBoxes(b0, b1, b2) {
    b0.classList.add("win");
    // will highlight the boxes that are a part of the winning connections
    b1.classList.add("win");
     // will highlight the boxes that are a part of the winning connections
    b2.classList.add("win");
     // will highlight the boxes that are a part of the winning connections
    turn.innerHTML = b0.innerHTML + " is the winner!!! Woohoo, time to celebrate. \n Play again!!";
    // this will display who's won the game
    turn.style.fontSize = "40px";
    // turn.innerHTML = 'Play again';
  }

  function checkWinner() {
    // ways for how a game could be won
    if (b0.innerHTML !== "" && b0.innerHTML === b1.innerHTML && b0.innerHTML === b2.innerHTML)
      selectWinnerBoxes(b0, b1, b2);
    /*================*/
    if (b3.innerHTML !== "" && b3.innerHTML === b4.innerHTML && b3.innerHTML === b5.innerHTML)
      selectWinnerBoxes(b3, b4, b5);
    /*================*/
    if (b6.innerHTML !== "" && b6.innerHTML === b7.innerHTML && b6.innerHTML === b8.innerHTML)
      selectWinnerBoxes(b6, b7, b8);
    /*================*/
    if (b0.innerHTML !== "" && b0.innerHTML === b3.innerHTML && b0.innerHTML === b6.innerHTML)
      selectWinnerBoxes(b0, b3, b6);
    /*================*/
    if (b1.innerHTML !== "" && b1.innerHTML === b4.innerHTML && b1.innerHTML === b7.innerHTML)
      selectWinnerBoxes(b1, b4, b7);
    /*================*/
    if (b2.innerHTML !== "" && b2.innerHTML === b6.innerHTML && b2.innerHTML === b8.innerHTML)
      selectWinnerBoxes(b2, b6, b8);
    /*================*/
    if (b0.innerHTML !== "" && b0.innerHTML === b4.innerHTML && b0.innerHTML === b8.innerHTML)
      selectWinnerBoxes(b0, b4, b8);
    /*================*/
    if (b2.innerHTML !== "" && b2.innerHTML === b4.innerHTML && b2.innerHTML === b6.innerHTML)
      selectWinnerBoxes(b2, b4, b6);
  }

// determine who's turn is next
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
      if (this.innerHTML !== "X" && this.innerHTML !== "O") {
        if (X_or_O % 2 === 0) {
          console.log(X_or_O);
          this.innerHTML = "X";
        // if turn started w/ X
          turn.innerHTML = "O Turn Now";
        //  will pop up to tell "O" to go next
          checkWinner();
          X_or_O += 1;
        } else {
          console.log(X_or_O);
          this.innerHTML = "O";
          turn.innerHTML = "X Turn Now";
          checkWinner();
          X_or_O += 1;
        }
      }

    };
  }

  document.getElementById('replay').addEventListener('click', replay);

  function replay() {
    // this will clear the board and remove the classlist
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("win");
      boxes[i].innerHTML = "";
    // the box will clear and no x/o will be displayed
      turn.innerHTML = "Play";
      turn.style.fontSize = "25px";

    }
  }

