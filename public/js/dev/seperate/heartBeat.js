const heart = document.getElementById('heartBeat').getContext('2d'),
      imgLength = 30;

let position = 1,
    scaleDirection = 'up',
    heartSpeed = 80,
    heartRate = 20, 
    xPos = 170,
    fontSize = 80;

export function scale(){
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

export function checkHeartSpeed(){
  if(heartSpeed <= 60){
    heartSpeed = 60;
    heartRate = 80;
  }else if(heartSpeed > 60 && heartSpeed < 80){
    heartRate = 60;
  }else if(heartSpeed > 80 && heartSpeed < 100){
    heartRate = 40;
  }else if(heartSpeed > 100 && heartSpeed < 120){
    heartRate = 30;
  }else if(heartSpeed > 120 && heartSpeed < 140){
    heartRate = 20;
  }else if(heartSpeed > 140 && heartSpeed < 160){
    heartRate = 10;
  }else if(heartRate > 160 && heartSpeed < 180){
    heartRate = 5;
  }else if(heartRate > 180){
    heartRate = 1;
  }
}

export function increaseHeartRate(){
    heartSpeed = heartSpeed + 4;
}

export function reduceHeartRate(){
    setTimeout(function(){
        if(heartSpeed > 60){
            heartSpeed = heartSpeed - 2;
        }
        reduceHeartRate();
    },5000);//5 seconds currently
}
