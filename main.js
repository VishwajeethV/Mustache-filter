var nose_x =0;
var nose_y =0;

function preload() {
    mustache_image = loadImage("https://i.postimg.cc/wTcJxW0p/m.png");
};

function setup() {
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",getpose);
}

function modelLoaded()  {
console.log('modelLoaded');
}



function getpose(result) {
if(result.length>0) {
    console.log(result);
    nose_x = result[0].pose.nose.x;
    nose_y = result[0].pose.nose.y;
  }
}


function draw() {
    image(video,0,0,350,300);
    image(mustache_image,nose_x-155,nose_y-90,50,30);
}

function take_snapshot() {

    save("mustache.jpg");
   }