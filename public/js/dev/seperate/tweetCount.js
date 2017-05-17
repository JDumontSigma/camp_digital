const tweetCount = document.getElementById('tweetCount').getContext('2d');

const thinFont = new FontFace('universe', 'url(fonts/2943AD_0_0.woff)');//font link

let tweetTotal = 10;

function twitterCount(){
    tweetCount.clearRect(0,0,400,400);
    tweetCount.beginPath();
        tweetCount.font = "30px universe";
        tweetCount.fillStyle = 'Black';
        tweetCount.fillText('TOTAL TWEETS', 0, 100);
        tweetCount.font = "bold 100px universe";
        tweetCount.fillStyle = '#379E9A';//Sigma Green
        tweetCount.fillText(`${tweetTotal}`,0,190);
    tweetCount.closePath();
}


thinFont.load().then(function(font){//wait for the font to load in
    document.fonts.add(font);//add it to the document
    twitterCount();//run title function
}); 
