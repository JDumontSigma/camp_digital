const five = document.getElementById('lastFive').getContext('2d');

const thinFont = new FontFace('universe', 'url(fonts/2943AD_0_0.woff)');//font link

let tweetNames = ['bdabdaddajsdb','ashdasd_asdbajsdb','asdbjasbd_asdj','','asdbjasdjhsdjha'];

function latestFive(){
  //layout position variable
  let spacing = 100;
  //save canvas context
  five.save();
  //clear the previous content
  five.clearRect(0, 0, 400, 400);
    five.beginPath();
    //set up font variables
      five.fillStyle = 'Black';
      five.font = '30px universe';
      //provide a title
      five.fillText('Last 5 Tweeters', 0, 50);
      //loop through the 5 array elements to display them
      for(let i = 0; i < 5; i++){
        five.fillStyle = '#379E9A';
        five.font = '30px universe';
        //write out the text and increase the y position
        //check to see whether the varaibels are empty or not
        if(typeof tweetNames[i] === 'undefined' || tweetNames[i] === null || tweetNames[i] === ''){
            five.fillText('Awaiting Tweet...' ,0,spacing);
        }else{
            five.fillText('@ ' + tweetNames[i],0,spacing);
        }
        //shit the way down to make layout appropriate
        spacing = spacing + 50;
      }
    five.closePath();
  five.stroke();
}


thinFont.load().then(function(font){//wait for the font to load in
    document.fonts.add(font);//add it to the document
    latestFive();//run lastFive function
}); 
