//your JS code here. If required.
// Get the input elements
const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");
const submitButton = document.getElementById("submit");

// Get the board and message elements
const boardElement = document.getElementById("board");
const messageElement = document.querySelector(".message");

// Create variables to keep track of the players and their moves
let currentPlayer;
let moves;

// Function to start the game
function startGame(event) {
  event.preventDefault();

  // Get the names of the players
  const player1 = player1Input.value;
  const player2 = player2Input.value;

  // Set the initial player and moves
  currentPlayer = player1;
  moves = {
    [player1]: [],
    [player2]: []
  };

  // Show the board and message elements
  boardElement.style.display = "block";
  messageElement.textContent = `${currentPlayer}, you're up!`;

  // Add event listeners to the cells
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.addEventListener("click", playMove));

 

