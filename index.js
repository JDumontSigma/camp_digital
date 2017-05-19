'use strict';

//required libraries
const nunjucks = require('nunjucks'),
      bodyParser = require('body-parser'),
      path = require('path'),
      http = require('http'),
      Twitter = require('ntwitter'),
      socketIO = require('socket.io');

//server file import
const twitterAuth = require('./twitter.json'),
      twitterStream = require('./server/twitter_stream.js');

//server setup
const express = require('express'),
      app = express(),
      server = http.createServer(app),
      port = 3000,
      io = socketIO.listen(server);

//Set app features
app.set('port', process.env.PORT || port); //set port
app.set('view options', { layout: true });
app.set('views', './views'); //set where to look for file render
app.set('view engine', 'nunjucks'); //set the view engine

//nunjucks configuration
nunjucks.configure('views', {
   autoescape: true,
   express: app   
});

//middleware setup
app.use(bodyParser()); //parse the data comign in

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Route handling
//live streaming route
app.get('/', function(req,res){
      res.render('live',{title:'Live Version'});
});

//timelapse route
app.get('/timelapse', function(req,res){
      res.render('timelapse',{title:'Timelapse'});
});

//error handling 
app.use(function(req,res,next){
      res.status(404).render('error',{
            message:'Unfortunately we cant find what your looking for!'//message to send through
      });
});

app.use(function(req,res,next){
      res.status(500).render('error',{
            message:'Something has gone wrong with the server!'//message to send through
      });
});

//Start the twitter stream
twitterStream.startTwitterStream('cats');

function loop(){
      setTimeout(function(){
            io.sockets.emit('new_tweet',{});
            console.log('looping');
            loop();
      }, 2000);
}

function tenMinuteUpdate(){
      setTimeout(function(){
            let   date = new Date(),
                  currentHour = date.getHours(),//get the current hours
                  currentMin = date.getMinutes(),//get the current minutes
                  random = (min, max) => Math.floor(Math.random() * max + min),//remove shortly 
                  numbOfTweets = random(1, 20);
            io.sockets.emit('ten_update', {hours : currentHour, mins : currentMin, numbOfTweets : numbOfTweets});
            //reset appropriate info
            numbOfTweets = 0;
            tenMinuteUpdate();//rerrun 
      }, 60000);//run every 1 minutes
};

tenMinuteUpdate();//initial call to start the 10 minutes

//Prepare the server for listening
server.listen(app.get('port'), function(){
      console.log(`Server up and running or port ${app.get('port')}`);
});