let rectX;
let rectY;
let ellX = 10;
let ellY = 10;
let nz = 5;
let xz = 5;
let colran = 0;
let colran2 = 0;
let bolTam = 40;
let flag = 1;
function setup() {
  createCanvas(700,600)
}
function draw() {
  background(200,200,200)
  fill(colran2,colran,255)
  ellipse(ellX,ellY, bolTam,bolTam)
  fill(0,255,0)
  rect(rectX,rectY,60,60)
  if(ellX < 0 || ellX > 700){
   nz = nz * (-1);
   colorrandom()
  }
  if(ellY < 0 || ellY > 600){
   xz = xz * (-1);
   colorrandom()
  }
  if(ellY < 0){
     bolTam -= 4
  }
  ellX = ellX + nz
  ellY = ellY + xz
  fill(0)
  text(ellY, 450,200)
  text(ellX, 250,200)
  text(rectX, 450,400)
  text(rectY, 250,400)
  
}
function bouncing(){
  if(ellX > rectX && ellX < rectX + 60){
        if(ellY > rectY && ellY < rectY + 60){
              xz = xz * (-1);
              nz = nz * (-1);
              bolTam += 4
        }
      }

}
function colorrandom(){
  colran = int(random(0,255))
  colran2 = int(random(0,255))
}
function mouseMoved(){
  if(flag = 1){
      bouncing();
  }
  rectX= mouseX-30;
  rectY= mouseY-30;
}
function mousePressed(){
  flag = 0
}
function mouseReleased(){
  flag = 1
}
