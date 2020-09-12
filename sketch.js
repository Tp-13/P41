const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella;

function preload(){
    
}

function setup(){
   createCanvas(600,1200)
   umbrella = new Umbrella(100,1000)
}

function draw(){
    umbrella.display();
}   

