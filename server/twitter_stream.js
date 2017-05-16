//necessary module
const   Twitter = require('ntwitter'),
        twitterAuth = require('../twitter.json'),
        twitter = new Twitter(twitterAuth);

//require socket emitter
const   socketIO = require('socket.io'),
        socketEvent = require('./socket_events');//bring in the socket event segment

//twitter stream.js
module.exports = {
    startTwitterStream: function(keyword){
        twitter.stream('statuses/filter', {track: keyword}, function (stream) {
            stream.on('data', function (data) {
                socketEvent.newTweet(); //called from socket_events.js
            });
            stream.on('error', function (err) {//if something goes wrong with twitter
                console.log('ERROR');
                console.log(err);
            });
        });
    }
}