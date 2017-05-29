const backgroundCanvas = document.getElementById('backgroundCanvas').getContext('2d');

function background(){
    backgroundCanvas.fillStyle = "White";//light grey
    backgroundCanvas.fillRect(0,0,1920, 1080);
}
background();