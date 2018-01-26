var keys = require("./keys.js");
var twitter = require("twitter");
var request = require("request");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotifyKeys);
var fs = require("fs");
var twitterClient = new twitter(keys.twitterKeys);
var action = process.argv[2];
var product = process.argv[3];

s
//Twitter Function
var params = {
    screen_name: "",
    count: 20
}

function tweet() {
    twitterClient.get("statuses/user_timeline", function(error, tweets, response) {
        if (!error && response.statusCode == 200) {
            fs.writeFile('log.txt', "");
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
                console.log(tweets[i].created_at);
                fs.appendFile('log.txt', ("Tweet: " + tweets[i].text + "Date & Time: " + tweets[i].created_at + "\r\n"));
            }
        } else {
            console.log(error);
        }
    })
}

/



