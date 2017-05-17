const highTweet = document.getElementById('highTweet').getContext('2d');

const thinFont = new FontFace('universe', 'url(fonts/2943AD_0_0.woff)');//font link
let highestTweeter = 'Waiting...';
function highestTweet(){
    highTweet.clearRect(0,0,400,200);
    highTweet.beginPath();
    //set up font variables
      highTweet.fillStyle = 'Black';
      highTweet.font = '30px universe';
      highTweet.fillText('TWEETEST OF ALL!', 0, 30);
      highTweet.fillStyle = '#d0343a';
      highTweet.font = 'bold 30px universe';
      highTweet.fillText(`${highestTweeter}`, 0, 80);
    highTweet.closePath();
}

thinFont.load().then(function(font){//wait for the font to load in
    document.fonts.add(font);//add it to the document
    highestTweet();//run lastFive function
}); 
