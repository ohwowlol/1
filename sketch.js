var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,30,30)
  box.shapeColor = "white"
}

function draw() 
{
  background(100);

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 2;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 2;
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 2;
  }
  drawSprites()

}




