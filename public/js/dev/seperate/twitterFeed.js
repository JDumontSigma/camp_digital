import $ from 'jquery';

const twitter = document.getElementById('twitterFeed').getContext('2d');

let tweets = {
    '15':{
        'name' : 'Jason Dumont',
        'twitterHandle' : '@Dumont95c',
        'tweet' : '#15XJhb17 The End. Thank you to all the attendees, sponsors and speakers for attending.'
    },
    '16':{
        'name' : 'Jason Dumont',
        'twitterHandle' : '@Dumont95c',
        'tweet' : '#16XJhb17 The End. Thank you to all the attendees.'
    },
    '17':{
        'name' : 'Jason Dumont',
        'twitterHandle' : '@Dumont95c',
        'tweet' : '#17XJhb17 The End. Thank you to all the attendees, sponsors and speakers for attending.'
    },
    '18':{
        'name' : 'Jason Dumont',
        'twitterHandle' : '@Dumont95c',
        'tweet' : '#81XJhb17 The End. Thank you to all the attendees, sponsors and speakers for attending.'
    },
    '19':{
        'name' : 'Jason Dumont',
        'twitterHandle' : '@Dumont95c',
        'tweet' : '#2XJhb17 The End. Thank you to all the attendees, sponsors and speakers for attending. Next stop @CapeTown #UX #Campdigital #wearesigma #fun'
    },
    '20':{
        'name' : 'Jason Dumont',
        'twitterHandle' : '@Dumont95c',
        'tweet' : '#3XJhb17 The End. Thank you to all the attendees, sponsors and speakers for attending. Next stop @CapeTown #UX #Campdigital #wearesigma #fun'
    }
};


let yPos = 30;

function twitterUpdate(){
    if(tweets.length === 0){
        twitter.font = 'bold 20px universe';
        twitter.textAlign = 'center';
        twitter.fillText('Currently no tweets', 150, 40);
    }else{
        
        for(let tweet in tweets){
            twitter.fillStyle = '#D0343A';
            
            twitter.fillRect(15, yPos, 150, 5);
            yPos = yPos + 40;
            let seperater = 20;
            twitter.font = 'bold 18px universe';
            twitter.fillText(tweets[tweet].twitterHandle, 15, yPos);
            twitter.fillStyle = 'Black';
            twitter.fillText(tweets[tweet].name, 150, yPos);
            yPos = yPos + 30;
            twitter.font = 'normal 15px universe';
            
            let display = splitter(tweets[tweet].tweet, 46);
            for(let x = 0;  x < display.length; x++){
                twitter.fillStyle = 'Black';
                twitter.fillText(display[x], 15, yPos);
                yPos = yPos + seperater;
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