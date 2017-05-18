const reachCount = document.getElementById('reachCount').getContext('2d');

const thinFont = new FontFace('universe', 'url(fonts/2943AD_0_0.woff)');//font link

let reachTotal = 4444;
    
function followerCount(){
    reachCount.clearRect(0,0,400,400);
    reachCount.beginPath();
        reachCount.font = "30px universe";
        reachCount.fillStyle = 'Black';
        reachCount.fillText('Total Reach', 0, 100);
        reachCount.font = "bold 100px universe";
        reachCount.fillStyle = '#379E9A';//Sigma Green
        reachCount.fillText(`${reachTotal.toLocaleString()}`,0,190);
    reachCount.closePath();
}


thinFont.load().then(function(font){//wait for the font to load in
    document.fonts.add(font);//add it to the document
    followerCount();//run title function
}); 
