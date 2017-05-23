const tweetCount = document.getElementById('tweetCount').getContext('2d');

export let tweetTotal = 0;

export function twitterCount(){
    tweetCount.clearRect(0,0,400,400);
    tweetCount.beginPath();
        tweetCount.font = "bold 30px universe";
        tweetCount.fillStyle = '#101214';
        tweetCount.fillText('Total Tweets', 0, 100);
        tweetCount.font = "bold 100px universe";
        tweetCount.fillStyle = '#379E9A';//Sigma Green
        tweetCount.fillText(`${tweetTotal}`,0,190);
    tweetCount.closePath();
}

export function addOne(tweetCount){//update the count by 1
    tweetTotal = tweetCount
}


