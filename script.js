document.addEventListener("click", function (event) {
  var target = event.target;// targetas paclikintas elementas
  markX(target);
});
///when pressed on square the square must be marked as x
function markX(element) {
  if (element.hasAttribute("data-cell-index") && element.innerText == "") {
    element.innerText = "X";

    let finished = isGameFinished();

    if(finished == false)
    opponentMove();
    isGameFinished();

   
    //element has special attribute and if
    //edit attribute text to X
  } else {
    //do nothing
  }
}


function opponentMove() {
  // Get all elements with class name
  var cells = Array.from(document.getElementsByClassName("cell")); //atrenkam
  // Filter the elements by just selecting empty ones.
  cells = cells.filter((cell) => cell.innerText == ""); //filtruojam
  // Get random number
  // let randomNumber = Math.floor(Math.random()*(cells.length))
  let randomNumber = getRandomNumber(0, cells.length);
  ////let randomNo = randomInteger(0, elements.lenth);
  // Select random element
  let randomCell = cells[randomNumber];
  //and modify its innertext to O
  randomCell.innerText = "0";
}

function getRandomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
  //analyses board and calculates the next move
}
function isGameFinished() {
  return isWinnerDetermined() || noMovesLeft();
}

function whoWon() {
  //analyses the lines and calculates the winner
  //
}

function noMovesLeft() {
  //2.we no longer have any space to play
  var cells = Array.from(document.getElementsByClassName("cell"));
  cells = cells.filter((cell) => cell.innerText == "");
  if (cells.length == 0) {
    document.querySelector(".game--status").innerText = "DRAW";
    //modify game status
    return true; //the game is finished
  }
  return false; //the game continues
}

function isWinnerDetermined() {
  let winningCellCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  //go through there winning combinations
  winningCellCombination.forEach(combination =>
    {
    // let i1 = combination[0]; //ilgesnis variantas
    // let i2 = combination[1];
    // let i3 = combination[2];

    // let element1 = document.querySelector(`[data-cell-index="${i1}"]`);
    // let element2 = document.querySelector(`[data-cell-index="${i2}"]`);
    // let element3 = document.querySelector(`[data-cell-index="${i3}"]`);

    elementValue1 = getDataCellTextValueByIndex(combination[0]);
    elementValue2 = getDataCellTextValueByIndex(combination[1]);
    elementValue3 = getDataCellTextValueByIndex(combination[2]);


    isGameCompleted = 
    if(elementValue1 == elementValue2 && elementValue2 == elementValue3 && elementValue1 != ""){
      var gameStatusElement = document.querySelector("game--status");

       gameStatusElement.innerText = `${elementValue1} has won the game`
      return true;
    }

  });
  //get all cells of those atributes values
  //check all the elements have the same inner text (X or 0)
  //carefull of empty values

  //1.we have 3 X or 3 O in a row, column or diagonal
  return false;
}

function getDataCellTextValueByIndex(index){
  return document.querySelector(`[data-cell-index="${index}"]`).innerText;
}


function resetGame() {
  //
}
