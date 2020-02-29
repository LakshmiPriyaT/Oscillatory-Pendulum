const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob, string;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    bob = new Bob(200,200,20);

    string = new String(bob.body,{x:200,y:175});

    box = new Box(200,175,50,50);
}

function draw(){
    background(70);
    Engine.update(engine);
   
    bob.display();
    string.display();
    box.display();

    if(keyCode===32){
        bob.body.position.y = mouseY;
        bob.body.position.x = mouseX;
        }
        
}

function keyPressed(){
    if(keyCode === ENTER){
        Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
    }
} 