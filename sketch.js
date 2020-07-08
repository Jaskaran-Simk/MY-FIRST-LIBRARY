var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(100,400,50,50)
  gameObject2 = createSprite(800,400,50,50)

  gameObject1.velocityX = 5
  gameObject2.velocityX = -5
}

function draw() {
  background(0,0,0);  

  drawSprites();
  bounce_Off(gameObject1,gameObject2);
}
