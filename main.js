status="";

function setup()
{
    canvas=creatCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    object_name="html";
}

function modelLoaded()
{
    console.log("Model has loaded!");
    status=true;
}

function draw()
{
    image(video, 0,0,500,500);
}