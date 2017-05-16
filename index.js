'use strict';

//required libraries
const ejs = require('ejs'),
      bodyParser = require('body-parser'),
      path = require('path'),
      http = require('http'),
      Twitter = require('ntwitter'),
      socketIO = require('socket.io');

//server file import
const twitterAuth = require('./twitter.json');

//server setup
const express = require('express'),
      app = express(),
      server = http.createServer(app),
      port = 3000,
      io = socketIO.listen(server);

//Set twitter stream
const twitter = new Twitter(twitterAuth);

//Set app features
app.set('port', process.env.PORT || port); //set port
app.set('view options', { layout: true });
app.set('views', './views'); //set where to look for file render
app.set('view engine', 'ejs'); //set the view engine

//middleware setup
app.use(bodyParser()); //parse the data comign in


//Route handling
//live streaming route
app.get('/', function(req,res){
      res.render('live');
});

//timelapse route
app.get('/timelapse', function(req,res){
      res.render('timelapse');
});


//Prepare the server for listening
server.listen(app.get('port'), function(){
      console.log(`Server up and running or port ${app.get('port')}`);
});