import Chart from 'chart.js';
//Get the chart canvas information
var chart = document.getElementById('chart').getContext('2d');
//Define the variable for the chart settings

var allData = [];
var labels = [];

var data = {
  //set the labels and how many points there are currently
  labels: labels,
  datasets: [{
    //pass through the data which has been set
    data:allData,
    //set the background colour for the chart
    backgroundColor: '#379E9A',
    //set the line colour for the chart
    borderColor: 'rgba(106, 202, 197, 0.15)'
  }]
};

//Removes the legend from the top of the chart
Chart.defaults.global.legend.display = false;
//remove the tool tips which appear when hovering over elemetns
Chart.defaults.global.tooltips.enabled = false;

let myChart = new Chart(chart, {
  type: 'line',
  data: data,
  options: {
    scaleShowVerticalLines: false,
    responsive:false,
    scales: {
    	xAxes: [{
        //hide the X axis scale
        display:false,
        gridLines: {
            display: false
        }
      }],
      yAxes: [{
        display: false,
        //hide the Y axix scale
        gridLines: {
            display: false
        },
        ticks: {
          //makes the Y axis start at 0
        	beginAtZero:true
        }
      }]
    }
  }
});

export function updateChart(number, time){
  myChart.data.datasets[0].data.push(number);
  myChart.data.labels.push(time);
  myChart.update();
}