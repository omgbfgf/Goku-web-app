noesX=0;
noesY=0;


function preload(){
clown_nose=loadImage("https://i.postimg.cc/ZRzphxNb/6e486ab3828deca4d4fc2ae4183edf92.png");
}


function setup(){
canvas=createCanvas(333,333);
canvas.center();

video=createCapture(VIDEO);
//Ends here
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);

}


function modelloaded(){
    console.log("modelloaded");
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noesX=results[0].pose.nose.x;
        noesY=results[0].pose.nose.y;
    }
}


function draw(){
image(video,0,0,333,333);
image(clown_nose,noesX-250,noesY-255,250,250)
}

function take_snapshot(){
    save("Gokuimage.jpg");
}