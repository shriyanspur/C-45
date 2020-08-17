var dice1;
var dice2;

var p1, p2;
var p1Img, p2Img;

var board, boardImg;

function preload() {
  boardImg = loadImage("Board.jpg");

  p1Img = loadImage("Player/player1.png");
}

function setup() {
  createCanvas(displayWidth, 615);

  board = createSprite(512, 307);
  board.addImage(boardImg);
  board.scale = 0.2;

  p1 = createSprite(770, 550, 20, 20);
  p1.addImage(p1Img);
  p1.scale = 0.2;

  p2 = createSprite(770, 590, 20, 20);
  p2.addImage(p1Img);
  p2.scale = 0.2;

  dice1 = floor(random(1, 7));
}

function draw() {
  background(0);
  
  drawSprites();

  fill(249, 53, 53);
  rect(480, 340, 60, 60, 15);

  if (dice1 == 1) {
    fill(255,255,255);
    ellipse(510, 370, 12);
    if (dice1 == 1) {
      p1.position.x = p1.position.x - 50;
    }
  }
  else if (dice1 == 2) {
    fill(255,255,255);
    ellipse(495, 370, 12);
    ellipse(525, 370, 12);
    
  }
  else if (dice1 == 3) {
    fill(255,255,255);
    ellipse(495, 370, 12);
    ellipse(510, 370, 12);
    ellipse(525, 370, 12);
  }
  else if (dice1 == 4) {
    fill(255,255,255);
    ellipse(495, 357, 12);
    ellipse(525, 357, 12);
    ellipse(495, 383, 12);
    ellipse(525, 383, 12);
  }
  else if (dice1 == 5) {
    fill(255,255,255);
    ellipse(495, 357, 12);
    ellipse(525, 357, 12);
    ellipse(510, 370, 12);
    ellipse(495, 383, 12);
    ellipse(525, 383, 12);
  }
  else if (dice1 == 6) {
    fill(255,255,255);
    ellipse(495, 357, 12);
    ellipse(510, 357, 12);
    ellipse(525, 357, 12);
    ellipse(495, 383, 12);
    ellipse(510, 383, 12);
    ellipse(525, 383, 12);
  }
}

function keyPressed() {
  if (keyCode == 68){
  dice1 = floor(random(1, 7));
  if (dice1 == 1) {
    p1.position.x = p1.position.x - 50;
  }
  }  
}