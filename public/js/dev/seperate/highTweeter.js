const highTweet = document.getElementById('highTweet').getContext('2d');

let highestTweeter = 'Waiting...';

function highestTweet(hiTweet){
  if(typeof hiTweet === 'undefined'){
    highestTweeter = 'Waiting...';
  }else{
    highestTweeter = `@${hiTweet}`;
  }
    
    highTweet.clearRect(0,0,400,700);
    highTweet.beginPath();
    //set up font variables
      highTweet.fillStyle = '#101214';
      highTweet.font = 'bold 32px universe';
      
      highTweet.fillText('Biggest Tweeter!', 0, 440);
      highTweet.fillStyle = '#d0343a';
      highTweet.font = 'bold 30px universe';
      highTweet.fillText(`${highestTweeter}`, 0, 485);
      highTweet.font = 'bold 50px universe';
      highTweet.fillText('#campdigital', 0, 50);
    highTweet.closePath();
}

export{highestTweet}