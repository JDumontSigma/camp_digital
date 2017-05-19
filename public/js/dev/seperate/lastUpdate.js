const update = document.getElementById('lastUpdate').getContext('2d');

let hour = 11,
    minute = 34,
    morning = 'AM';

export function lastUpdate(){
    update.clearRect(0, 0, 400, 400);
    update.beginPath();
        update.font = '32px universe';
        update.fillStyle = '#101214';
        update.fillText(`Twitter Activity to`, 0, 30);
        update.font = 'bold 96px universe';
        update.fillText(`${hour}:${minute}`, 0, 120);
        update.font = 'normal 32px universe';
        if(hour >= 12){
            morning = 'PM';
        }
        update.fillText(morning, 200, 120);
    update.closePath();
}

export function updateTime(newHour, newMinute){
    hour = newHour;
    minute = newMinute;
}

