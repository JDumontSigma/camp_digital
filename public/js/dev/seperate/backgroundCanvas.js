const backgroundCanvas = document.getElementById('backgroundCanvas').getContext('2d');

function background(){
    backgroundCanvas.fillStyle = "#DADFE1";//light grey
    backgroundCanvas.fillRect(0,0,1366,700);
}
background();