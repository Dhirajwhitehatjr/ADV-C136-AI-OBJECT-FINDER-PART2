cocossdModel = "";
objectName = "";
ObjectStatus = "";
function setup()
{
    canvas = createCanvas(650,370);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(650,370);
    video.hide();
}
function start()
{
    cocossdModel = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectName = document.getElementById("object_name_input").value;
}
function modelLoaded()
{
    console.log("M o d e l  L o a d e d  ! ! ! ! ! !");
    ObjectStatus = "true";
}
function draw()
{
    image(video,0,0,650,370);
}