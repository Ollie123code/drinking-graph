let x = 0;
let y = 0;
let dim = 80.0;
var gameState;

function setup() {
  createCanvas(300, 600);
  noStroke();
  runGame();
}
function draw() {
// pickLocation();

   if(gameState == 'shut'){ //loading the game over screen
    doorShut();
  }
  if(gameState == 'over'){ //loading the game over screen
    gameOver();
  }
  // if(gameState == 'end'){
  // 	endPage();
  //   // endGame();
  // }
}

function runGame(){
  background(102);
}


function keyPressed() { //navigation buttons for the game
   if (keyCode === 32 ){ //if you pressing the space button it starts the game
    gameState = "shut";
  }
}
 


function doorShut(){
  x = x  +10;
  // If the shape goes off the canvas, reset the position
  if (x > 500) {
  	x=0;
  	gameState = "over";
  }
  	translate(x, height / 2 - dim / 2);
  fill(255);
  rect(-dim / 2, -dim / 2, dim, dim);
}
  
  

function gameOver(){
	background(102);
	fill(255);
	rect(500, -dim / 2, dim, dim);
}
  // Transforms accumulate. Notice how this rect moves
  // twice as fast as the other, but it has the same
  // parameter for the x-axis value

