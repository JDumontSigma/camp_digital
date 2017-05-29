const reachCount = document.getElementById('reachCount').getContext('2d');

export let reachTotal = 0;
    
export function followerCount(){
    reachCount.clearRect(0,0,500,400);
    reachCount.beginPath();
        reachCount.font = "bold 32px universe";
        reachCount.fillStyle = '#101214';
        reachCount.fillText('Total Reach', 0, 100);
        reachCount.font = "bold 128px universe";
        reachCount.fillStyle = '#379E9A';//Sigma Green
        reachCount.fillText(`${reachTotal.toLocaleString()}`,0,220);
    reachCount.closePath();
}

export function updateReach(newFollowers){
    reachTotal = newFollowers;//increase the reach total
}
