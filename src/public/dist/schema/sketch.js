let portes = ['h', 'x', 'y', 'z'];
rlist = [];
let rectangle;
let back;
let bgW = 600;
let bgH = 250;
let canW = 600;
let canH = 400;

function preload(){
  bg = loadImage('/assets/dist/schema/images/bg.jpg');
  ph = loadImage('/assets/dist/schema/images/h.jpg');
  px = loadImage('/assets/dist/schema/images/x.jpg');
  py = loadImage('/assets/dist/schema/images/y.jpg');
  pz = loadImage('/assets/dist/schema/images/z.jpg');

  pps = [ph, px, py, pz];
}

function setup() {
  let rectangles = new Array(Draggable);
  rlist = rectangles;
  
  var canvas = createCanvas(canW, canH, WEBGL);
  canvas.parent('sketch-holder');
  back = new Back(-canW/2,-canH/2,bgW,bgH);


  let x = -275;
  let y = 75;
  let w = 100;
  let h = 100;

  print(rlist);
  for(let i=0; i < portes.length; i++){
    r = new Draggable(x + i*150, y, w, h);
    rlist.push(r);
  }
}

function draw() {
  c = color('rgb(200,200,200)');
  background(c);

  back.show(bg);

  for(let i=1; i <= portes.length; i++){
    rlist[i].over(canW, canH);
    rlist[i].update();
    rlist[i].show(pps[i-1]);
  }
  //rectangle.show(mouseX, mouseY);
}

function mousePressed(){
  for(let i=1; i <= portes.length; i++){
    if(rlist[i].x == -100 && rlist[i].y == -150){
      rlist[i].x = -275 + (i-1)*150;
      rlist[i].y = 75;
    }

  for(let i=1; i <= portes.length; i++){
    rlist[i].pressed();
  }
}
}

function mouseReleased() {
  for(let i=1; i <= portes.length; i++){
    rlist[i].released();
  }

  for(let i=1; i <= portes.length; i++){
    if(rlist[i].x < -75 && rlist[i].x > -125 && rlist[i].y > -175 && rlist[i].y < -125){
      rlist[i].x = -100;
      rlist[i].y = -150;
    }
    else{
      rlist[i].x = -275 + (i-1)*150;
      rlist[i].y = 75;
    }
  }
}