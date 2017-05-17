const update = document.getElementById('lastUpdate').getContext('2d');

const thinFont = new FontFace('universe', 'url(fonts/2943AD_0_0.woff)');//font link

let time = '9:30';
let morning = 'AM';

function lastUpdate(){
    update.clearRect(0, 0, 400, 400);
    update.beginPath();
        update.font = '30px universe';
        update.fillStyle = 'Black';
        update.fillText(`TWITTER ACTIVITY`, 0, 30);
        update.fillText('UP TO', 0, 60);
        update.font = '90px universe';
        update.fillText(`${time}`, 0, 140);
        update.font = '30px universe';
        update.fillText(morning, 190, 140);
    update.closePath();
}



thinFont.load().then(function(font){//wait for the font to load in
    document.fonts.add(font);//add it to the document
    lastUpdate();//run lastFive function
}); 
