const twitter = document.getElementById('twitterFeed').getContext('2d');

let tweets = {};

let yPos = 30;

function twitterUpdate(tweetData){
    twitter.clearRect(0 ,0 , 300, 700);
    tweets = tweetData;
    
    if(typeof tweets === 'undefined'){
        twitter.font = 'bold 20px universe';
        twitter.textAlign = 'center';
        twitter.fillText('Currently no tweets', 150, 40);
    }else{
        yPos = 30;
        for(let tweet in tweets){
            twitter.textAlign = 'left';
            twitter.fillStyle = '#D0343A';
            
            twitter.fillRect(15, yPos, 150, 5);
            yPos = yPos + 40;
            let seperater = 20;
            twitter.font = 'bold 18px universe';
            twitter.fillText('@' + tweets[tweet].tweetName, 15, yPos);
            twitter.fillStyle = 'Black';
            twitter.fillText(tweets[tweet].screenName, 160, yPos);
            yPos = yPos + 30;
            twitter.font = 'normal 15px universe';
            if(typeof tweets[tweet].tweetText === 'undefined'){

            }else{
                let display = splitter(tweets[tweet].tweetText, 46);
                for(let x = 0;  x < display.length; x++){
                    twitter.fillStyle = 'Black';
                    twitter.fillText(display[x], 20, yPos);
                    yPos = yPos + seperater;
                }
            } 
        }
    }
}

function splitter(str, l){
    var strs = [];
    while(str.length > l){
        var pos = str.substring(0, l).lastIndexOf(' ');
        pos = pos <= 0 ? l : pos;
        strs.push(str.substring(0, pos));
        var i = str.indexOf(' ', pos)+1;
        if(i < pos || i > pos+l)
            i = pos;
        str = str.substring(i);
    }
    strs.push(str);
    return strs;
}

export{twitterUpdate};