var canvas = document.querySelector('canvas');


canvas.width= window.innerWidth-2;
canvas.height= window.innerHeight-3;

var c = canvas.getContext('2d');

// c.fillStyle= 'rgba(255,0,0,0.6)';
// c.fillRect(000, 000, 100, 100);
// c.fillStyle= 'rgba(0,255,0,0.6)';
// c.fillRect(200, 000, 100, 100);
// c.fillStyle= 'rgba(100,100,100,0.6)';
// c.fillRect(300, 100, 100, 100);
// c.fillStyle= 'rgba(0,200,200,0.7)';

// c.fillRect(100, 100, 100, 100);


// //Line

// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(200,0);
// c.strokeStyle= 'green';
// c.stroke();

// c.beginPath();
// c.moveTo(100,0);
// c.lineTo(300,200);
// c.lineTo(200,200);
// c.lineTo(400,0);
// c.strokeStyle= 'green';
// c.stroke();

// c.beginPath();
// c.moveTo(window.innerWidth/2, window.innerWidth/10)
// c.lineTo(window.innerWidth /2, 0)
// c.stroke();

// //Arc / Circle
// c.beginPath();
// c.arc(100,200,30,0,Math.PI * 2, false);
// c.strokeStyle='blue';
// c.stroke();

// var colors =['red','blue','green','black','yellow'];

// for(var i = 0;i < 100; i++ ){
//  var r= Math.random()* 20+ 10;
//  var random = Math.floor(Math.random()*colors.length);
//  var randomColor = colors[random];
//  var x= Math.random() * window.innerWidth;
//  var y= Math.random() * window.innerHeight;

// c.beginPath();
// c.arc(x,y,r,0,Math.PI * 2, false);
// c.strokeStyle= randomColor;
// c.stroke();
// }

// for(var i=0;i<50;i++){
//  var random = Math.floor(Math.random()*colors.length);
//  var randomColor = colors[random];
//  var x= Math.random() * window.innerWidth;
//  var y= Math.random() * window.innerHeight;
//  var h= Math.random() *30 +20;

//  c.fillRect(x,y, h,h);
//  c.fillStyle=randomColor;
// }

// var colors = ['#409B00',
// '#1BAA5E',
// '#088E56',
// '#5FAAA4',
// '#5EBABA'];

// var randomColor = colors[Math.floor(Math.random()*colors.length)];

var mouse = {
 x:undefined,
 y:undefined
}
var maxRadius =40;
var minRadius =2;

var colors = ['#F2B827',
'#D6563C',
'#2E86B4',
'#85C2BE',
'#6E0114'];

window.addEventListener('mousemove',function(event){
  
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
})

window.addEventListener('resize',function(){
canvas.width= window.innerWidth-2;
canvas.height= window.innerHeight-3;
})

function Circle(x,y,dx,dy,radius,color){
 this.x = x;
 this.y = y;
 this.dx = dx;
 this.dy = dy;
 this.radius=radius;
 this.color= colors[Math.floor(Math.random() * colors.length)];
 this.minRadius = radius;

 this.draw = function (){
  c.beginPath();
  c.arc(this.x,this.y,this.radius,0,Math.PI *2, false);c.strokeStyle='blue';
  c.fillStyle = this.color;
  c.fill();
 }

 this.update = function(){

  if(this.x + this.radius > innerWidth-2 || this.x - this.radius < 0){
   this.dx = -this.dx;

  }

  if(this.y + this.radius > innerHeight-3 || this.y - this.radius < 0){
   this.dy = -this.dy;
  }

  this.x += this.dx;
  this.y += this.dy;

  ////////////////INTERACTIVITY////////////////
  
  if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y >-50){
   if (this.radius < maxRadius){
    this.radius += 1;
   }
   
  } else if(this. radius >this.minRadius){
   this. radius -= 1;
  }

  this.draw();
 }
}

// var randomx = Math.random()* innerWidth;
// var randomy= Math.random()* innerHeight;
// var x =randomx;
// var y = randomy;
// var dx= Math.random()* -0.5* 8;
// var dy= Math.random()* -0.5*8;
// var radius = 30;

var circleArray=[];

for(var i =0; i < 800 ; i++){

var radius = Math.random()*6 +1 ;
var randomx = Math.random()* ((innerWidth - 2)-radius*2) + radius;
var randomy= Math.random()* ((innerHeight- 3)- radius *2)+ radius;
var x =randomx;
var y = randomy;
var dx= Math.random()* -0.5*2 ;
var dy= Math.random()* -0.5*2;


 circleArray.push(new Circle(x,y,dx,dy,radius));
}






function animate() {

requestAnimationFrame(animate);

c.clearRect(0,0,window.innerWidth,window.innerHeight);


for(var i= 0; i  < circleArray.length; i++){
 circleArray[i].update();
}



}

animate();