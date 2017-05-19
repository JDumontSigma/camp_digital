const reachCount = document.getElementById('reachCount').getContext('2d');

export let reachTotal = 0;
    
export function followerCount(){
    reachCount.clearRect(0,0,400,400);
    reachCount.beginPath();
        reachCount.font = "bold 30px universe";
        reachCount.fillStyle = '#101214';
        reachCount.fillText('Total Reach', 0, 100);
        reachCount.font = "bold 100px universe";
        reachCount.fillStyle = '#379E9A';//Sigma Green
        reachCount.fillText(`${reachTotal.toLocaleString()}`,0,190);
    reachCount.closePath();
}

export function updateReach(newFollowers){
    reachTotal = newFollowers;//increase the reach total
}
