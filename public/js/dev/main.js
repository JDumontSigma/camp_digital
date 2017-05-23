'use strict';
import 'babel-polyfill';
import $ from 'jquery';
import io from 'socket.io-client';

import {titleDisplay} from './seperate/mainTitle.js';
import {twitterCount, addOne} from './seperate/tweetCount.js';
import {followerCount, updateReach} from './seperate/reachCount.js';
import {twitterUpdate} from './seperate/twitterFeed.js';
import {scale, increaseHeartRate, reduceHeartRate, checkHeartSpeed} from './seperate/heartBeat.js';
import {updateChart} from './seperate/chart.js';
import {lastUpdate, updateTime} from './seperate/lastUpdate.js';
import {latestFive} from './seperate/lastFive.js';
import {highestTweet} from './seperate/highTweeter.js';

//static renders which do not change!
require('./seperate/backgroundCanvas');

//global variables

//background
const boldFont = new FontFace('universe', 'url(fonts/2943AD_1_0.woff)');//font link
const thinFont = new FontFace('universe', 'url(fonts/2943AD_0_0.woff)');//font link

//title

boldFont.load()//load bold font
    .then(thinFont.load()//load thin font
    .then(function(font){
    document.fonts.add(font);//add it to the document
    //run initial draw functions
    titleDisplay();//display title
    twitterCount();//display number of tweets
    followerCount();//display number of followers
    scale();//draw the heart
    reduceHeartRate();//start slowing the heart rate
    lastUpdate();//the last update time
    latestFive();//last 5 tweets
    highestTweet();
})); 

let socket = io.connect();//start sockets

socket.on('new_tweet',function(data){//updates for every time a new tweet comes
    highestTweet(data.biggestTweet);
    addOne(data.totalTweets);//increase tweet count
    updateReach(data.totalReach); //ipdate reach/follower count
    increaseHeartRate(); //increase heardbeat number
    checkHeartSpeed();//Change the speed of the heart
    //rerun Appropriate Functions to update content!
    twitterCount();
    followerCount();
    latestFive(data.lastFive);
    twitterUpdate(data.tweetInfo);
});

socket.on('ten_update', function(data){//update every 10 minutes
    console.log(data.numbOfTweets);
    updateChart(data.numbOfTweets,`${data.hours}:${data.mins}`);//update the chart, (number of tweets, time)
    updateTime(data.hours, data.mins);//update the current time(hours,minutes)
    lastUpdate();
});