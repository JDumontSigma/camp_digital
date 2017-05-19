
const title = document.getElementById('title').getContext('2d'),
      titleContent = 'CAMP DIGITAL HEALTHCHECK';//get canvas

//importing rectangle image
const bg = document.getElementById('banner');

export default function titleDisplay(){
    title.beginPath();
        title.drawImage(bg, 0, 0);//draw the image
        title.fillStyle = '#101214';
        title.font = "bold 40px universe";
        title.fillStyle = 'White';
        title.fillText(titleContent, 75, 83);
    title.closePath();  
}

export{titleDisplay}
