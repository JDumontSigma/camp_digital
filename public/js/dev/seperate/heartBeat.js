const heart = document.getElementById('heartBeat').getContext('2d'),
      imgLength = 30;

let position = 1,
    scaleDirection = 'up',
    heartSpeed = 60,
    heartRate = 20, 
    xPos = 170,
    fontSize = 80;


function scale(){
    let img = `heart_${position}`,
        currentImg = document.getElementById(img);
    
    if(heartSpeed > 100){
        xPos = 177;
    }else{
        xPos = 179;
    }

    
    heart.clearRect(0, 0, 400, 400);//clear the canvas
    heart.drawImage(currentImg, 0, 0);//draw the image
    heart.font = `bold ${fontSize}px universe`;
    heart.textAlign = 'center';
    heart.fillStyle = 'White';
    heart.fillText(`${heartSpeed}`, xPos, 193); // draw the heart rate
    
    //change the scale direction
    if(scaleDirection === 'up'){
        position++;
        fontSize++;
        if(position === imgLength){
            scaleDirection = 'down';
        }
    }else{
        position--;
        fontSize--;
        if(position === 1){
            scaleDirection = 'up';
        }
    }

    setTimeout(function(){
        scale();
    }, heartRate);
}

scale();