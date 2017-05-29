const highTweet = document.getElementById('highTweet').getContext('2d');

let highestTweeter = 'Waiting...';

function highestTweet(hiTweet){
  if(typeof hiTweet === 'undefined'){
    highestTweeter = 'Waiting...';
  }else{
    highestTweeter = `@${hiTweet}`;
  }
    
    highTweet.clearRect(0,0,600,700);
    highTweet.beginPath();
    //set up font variables
      highTweet.fillStyle = '#101214';
      highTweet.font = 'bold 32px universe';
      highTweet.textAlign = 'left';
      highTweet.fillText('Biggest Tweeter!', 275, 520);
      highTweet.fillStyle = '#d0343a';
      highTweet.font = 'bold 40px universe';
      highTweet.fillText(`${highestTweeter}`, 275, 570);
      highTweet.font = 'bold 60px universe';
      highTweet.textAlign = 'center';
      highTweet.fillText('#campdigital', 200, 50);
    highTweet.closePath();
}

export{highestTweet}