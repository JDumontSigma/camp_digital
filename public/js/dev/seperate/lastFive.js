const five = document.getElementById('lastFive').getContext('2d');

let tweetNames = [''];

export function latestFive(lastFive){
  if(typeof lastFive !== 'undefined'){
      tweetNames = lastFive;
  }
  
  //layout position variable
  let spacing = 100;
  //save canvas context
  five.save();
  //clear the previous content
  five.clearRect(0, 0, 400, 400);
    five.beginPath();
    //set up font variables
      five.fillStyle = '#101214';
      five.font = 'bold 32px universe';
      //provide a title
      five.fillText('Last 5 Tweeters', 0, 50);
      //loop through the 5 array elements to display them
      for(let i = 0; i < 5; i++){
        five.fillStyle = '#379E9A';
        five.font = 'bold 32px universe';
        //write out the text and increase the y position
        //check to see whether the varaibels are empty or not
        if(typeof tweetNames[i] === 'undefined' || tweetNames[i] === null || tweetNames[i] === ''){
            five.fillText('Awaiting Tweet...' ,0,spacing);
        }else{
            five.fillText('@' + tweetNames[i],0,spacing);
        }
        //shit the way down to make layout appropriate
        spacing = spacing + 45;
      }
    five.closePath();
  five.stroke();
}

