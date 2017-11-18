var userSelect = 0;
var compSelect = 0;
var rockImage;
var sciImage;
var paperImage;
var centerX;
var centerY;
var gameState = 0;

function setup() {
  createCanvas(700, 700);
  centerX = width/2;
  centerY = height/2;
}

function draw() {
  background(29, 202, 255);
  if (gameState == 0 || keyCode == 13) {
    showStartScreen();
  }else if (gameState == 1) {
    showSelections();
    checkResult();
  }
}

function preload() {
  rockImage = loadImage("images/rock.png");
  sciImage = loadImage("images/scissors.png");
  paperImage = loadImage("images/paper.png");
}

function keyPressed() {
  if (keyCode == 49) {
    userSelect = 1;
    compSelect = floor(random(1, 4));
    gameState = 1;
  }
  if (keyCode ==50) {
    userSelect = 2;
    compSelect = floor(random(1, 4));
    gameState = 1;
  }
  if (keyCode == 51) {
    userSelect = 3;
    compSelect = floor(random(1, 4));
    gameState = 1;
  }
}

function showSelections() {
  if (userSelect == 1) {
    image(rockImage, centerX - 300, centerY);
  }else if (userSelect == 2) {
    image(sciImage, centerX - 300, centerY);
  }else if (userSelect == 3) {
    image(paperImage, centerX - 300, centerY);
  }
  if (compSelect == 1) {
    image(rockImage, centerX + 50, centerY);
  }else if (compSelect == 2) {
    image(sciImage, centerX + 50, centerY)  ;
  }else if (compSelect == 3) {
    image(paperImage, centerX + 50, centerY);
  }
}

function checkResult() {
  if (userSelect == compSelect && userSelect != 0 && compSelect != 0) {
    textAlign(CENTER);
    textSize(40);
    text("iT's A fReAkIN' TiE! R U MAD??!", centerX, centerY - 50);
  }else if (userSelect == 1 && compSelect == 2 || userSelect == 2 && compSelect == 3 || userSelect == 3 && compSelect == 1) {
    textAlign(CENTER);
    textSize(20);
    text("YOU WIN! CONGATS! YOU DONT WANT TO DIE ANYMORE!", centerX, centerY - 50);
  }else {
    textAlign(CENTER);
    textSize(25);
    text("HAHAHAHAHAHA THE COMPUTER WINS AND U SUCK!", centerX, centerY - 50);
  }
}

function showStartScreen() {
  background(30, 90, 255);
  image(rockImage, centerX - 300, centerY);
  image(sciImage, centerX - 125, centerY);
  image(paperImage, centerX + 50, centerY);
  textAlign(CENTER);
  textSize(40);
  text("ROCK PAPER SCISSORS", centerX, centerY - 50);
}
