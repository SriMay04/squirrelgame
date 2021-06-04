const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bgImg, lampImg, squ1Img, squ2Img, squ3Img;

function preload(){
bgImg=loadImage("bg.png");

}
function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,399,2500,1);

    lamp1=new Lamp(200,250,50,300);
    lamp2=new Lamp(400,250,50,320);
    lamp3=new Lamp(600,300,50,250);
    lamp4=new Lamp(800,350,60,220);
    lamp5=new Lamp(1000,250,50,350);
    lamp6=new Lamp(1200,250,50,300);
    lamp7=new Lamp(1400,250,60,200);
    //lamp8=new Lamp(1600,250,50,300);

    squirrel= new Squirrel(150,200,50,50);

}

function draw(){
    background(bgImg);
    Engine.update(engine);

    
    ground.display();
    lamp1.display();
    //lamp2.display();
    lamp3.display();
    lamp4.display();
    //lamp5.display();
    lamp6.display();
    lamp7.display();
    //lamp8.display();
    //lamp9.display();

    squirrel.display();
   
}

function keyPressed(){

    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(squirrel.body,squirrel.body.position,{x:200,y:-500})
    }

    if(keyCode===LEFT_ARROW){
        Matter.Body.applyForce(squirrel.body,squirrel.body.position,{x:-200,y:-500})
    }
}

