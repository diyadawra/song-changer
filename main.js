songpe="";
songha="";
function preload(){
songha=loadSound("music.mp3");
songpe=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,600,500);

}
