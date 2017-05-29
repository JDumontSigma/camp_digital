'use strict';

//required libraries
const nunjucks = require('nunjucks'),
      bodyParser = require('body-parser'),
      path = require('path'),
      http = require('http'),
      Twitter = require('ntwitter'),
      socketIO = require('socket.io'),
      _ = require('lodash'),
      jsonfile = require('jsonfile');

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
twitterStream.startTwitterStream('campdigital');

function tenMinuteUpdate(){
      setTimeout(function(){
            let   date = new Date(),
                  currentHour = date.getHours(),//get the current hours
                  currentMin = date.getMinutes();//get the current minutes
                  if(currentMin < 10){
                        currentMin = '0' + currentMin;
                  }
            io.sockets.emit('ten_update', {hours : currentHour, mins : currentMin, numbOfTweets : tenMinTweetCount});
            let file = './public/storage/tweetData.json';//location for internal storage
            jsonfile.writeFile(file, tweetInfo, {spaces : 2}, function(err){ //write to the file with spacing set
                  if(err !== null){//if there is an error
                        console.log(err);
                  }else{
                        console.log('Storage Updated'); //else inform the data has been updated
                  }
                  
            });
            //reset appropriate info
            tenMinTweetCount = 0;
            tenMinuteUpdate();//rerrun 
      }, 600000);//run every 1 minutes
};

let tweetInfo = {},
    tweetID = new Array(),
    tweetName = new Array(), //tweet names
    screenName = new Array(), //tweet screen names
    tweets = new Array(), //
    followers = 0,
    numberOfTweets = 0,
    tenMinFollowerCount = 0,
    tenMinTweetCount = 0,
    repeatedTweets = 0,
    objPos = 10000,
    lastFiveTweets,
    biggestTwitter,
    biggerTweetCount = 0;


function updateStats(id, newName, newScreenName, tweetText, followerCount){
      let newTweet = _.includes(tweetID, id);

      if(newTweet){
           console.log('Repeated tweet');
           repeatedTweets++;
      }else{
            let tempTweet = {};
            for(var key in tweetInfo){
                  if(tweetInfo[key].tweetName === newName){
                        
                        tempTweet = {
                              'tweetId': id,
                              'tweetName': newName,
                              'screenName': newScreenName,
                              'tweetText': tweetText,
                              'followers' : followerCount,
                              'tweetCount' : tweetInfo[key].tweetCount++
                        }
                        tweetInfo[key].tweetCount = tweetInfo[key].tweetCount + 1;
                  }else{
                        tempTweet = {
                              'tweetId': id,
                              'tweetName': newName,
                              'screenName': newScreenName,
                              'tweetText': tweetText,
                              'followers' : followerCount,
                              'tweetCount' : 1
                        }
                  }
            }
            //overall Stats
            tweetID.push(id); //add tweet id to stop duplicates
            tweetName.push(newName); //adds name to array
            screenName.push(newScreenName); //add screen name to arrya
            tweets.push(tweetText); //add the tweet text
            followers = followers + followerCount; //add new followers
            numberOfTweets++; //add 1 tweet  

            //ten min cycle
            tenMinFollowerCount = tenMinFollowerCount + followerCount;
            tenMinTweetCount++;

            lastFiveTweets = screenName.slice(-5);
            //create an array of tweet info
            
            for(let count in tweetInfo){
                  if(tweetInfo[count].tweetCount > biggerTweetCount){
                        biggerTweetCount = tweetInfo[count].tweetCount;
                        biggestTwitter = tweetInfo[count].screenName;
                  }
            }
            
            tweetInfo[objPos] = tempTweet;//store all tweet info
            objPos--;//lower the next position

            //send the info through to site
            io.sockets.emit('new_tweet', {
                  'tweetInfo' : tweetInfo,//all tweet information
                  'totalTweets' : numberOfTweets,//how many tweets have been sent
                  'totalReach' : followers,//how many followers could have seen this
                  'lastFive' : lastFiveTweets,//last 5 tweet names
                  'biggestTweet' : biggestTwitter//biggest twitter name
            });
      }    
}


tenMinuteUpdate();//initial call to start the 10 minutes

//Prepare the server for listening
server.listen(app.get('port'), function(){
      console.log(`Server up and running or port ${app.get('port')}`);
});

module.exports.updateStats = updateStats; //make updateStats avaliable to other files