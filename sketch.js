const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,plink

function setup(){
    var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;  
    
    b1=new wall(240,600,480,10)
    b2=new wall(0,450,10,300)
    b3=new wall(480,450,10,300)

    b4=new wall(80,450,5,300)
    b5=new wall(160,450,5,300)
    b6=new wall(240,450,5,300)
    b7=new wall(320,450,5,300)
    b8=new wall(400,450,5,300)
}

function draw(){
    background(0);
    Engine.update(engine);  

    b1.display()
    b2.display()
    b3.display()

    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()

    for(var i=40;i<440;i=i+50){
        var p1 = new plinko(i,80)
        p1.display()
        var p2 = new plinko(i+20,120+10)
        p2.display()
        var p3 = new plinko(i,160+20)
        p3.display()
        var p4 = new plinko(i+20,200+30)
        p4.display()
    }

    spawn()

}

function spawn(){
    if(frameCount%10===0){
        var cool=new player(240,30)
        cool.display()
    }
}



