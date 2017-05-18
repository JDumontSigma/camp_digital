'use strict';
import 'babel-polyfill';
import $ from 'jquery';
import {titleDisplay} from './seperate/mainTitle.js';
import {twitterUpdate} from './seperate/twitterFeed.js';
//static renders which do not change!
require('./seperate/backgroundCanvas');
//require('./seperate/mainTitle');
require('./seperate/tweetCount');
require('./seperate/reachCount');
require('./seperate/lastFive');
require('./seperate/highTweeter');
require('./seperate/lastUpdate');
require('./seperate/heartBeat');
require('./seperate/chart');
//require('./seperate/twitterFeed');
//global variables

//background
const myFont = new FontFace('universe', 'url(fonts/2943AD_1_0.woff)');//font link

//title

myFont.load().then(function(font){//wait for the font to load in
    document.fonts.add(font);//add it to the document
    titleDisplay();//run title function
    twitterUpdate();
}); 