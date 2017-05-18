import $ from 'jquery'; //import jquery

const title = document.getElementById('title').getContext('2d'),
      titleContent = 'CAMP DIGITAL HEALTHCHECK';//get canvas

//importing rectangle object
const rectangleLocations = require('./rectangle.js'),
      rectangle = rectangleLocations.rectangleLocations;//reading the object from the file

export default function titleDisplay(){
    title.beginPath();
        title.fillStyle = 'Black';
        title.fillRect(40,30,650,70);//draw solid black around the back

        for(let rect in rectangle){//loop through each object of the file
            title.fillStyle = rectangle[rect].color;//set the colour
            title.fillRect(rectangle[rect].x, rectangle[rect].y, rectangle[rect].w, rectangle[rect].h);//display each rectangle
        }

        title.font = "50px universe";
        title.fillStyle = 'White';
        title.fillText(titleContent, 55, 83);
    title.closePath();  
    //set font style, word included, colour, close path
}

export{titleDisplay}
