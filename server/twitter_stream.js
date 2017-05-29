//necessary module
const   Twitter = require('ntwitter'),
        twitterAuth = require('../twitter.json'),
        twitter = new Twitter(twitterAuth);

//require socket emitter
const   socketIO = require('socket.io'),
        socketEvent = require('./socket_events'),
        serverFile = require('../index.js');//bring in the socket event segment

//twitter stream.js
module.exports = {
    startTwitterStream: function(keyword){
        twitter.stream('statuses/filter', {track: keyword}, function (stream) {
            stream.on('data', function (data) {
                let tweetText = data.text,
                    name = data.user.name,
                    screenName = data.user.screen_name,
                    followerCount = data.user.followers_count,
                    tweetId = data.id;
                    serverFile.updateStats(tweetId, name, screenName, tweetText, followerCount);
                    //console.log(tweetText + name + screenName + followerCount);
                //return tweetText, user, followerCount; //called from socket_events.js
            });
            stream.on('error', function (err) {//if something goes wrong with twitter
                console.log('ERROR');
                console.log(err);
            });
        });
    }
}