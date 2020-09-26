const Twit = require("twit");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//const notifier = require("node-notifier")
//const open = require('open')


const apikey = 'kyVqKw0ly6fn7kjoWMgrerzCA'
const apiSecretKey = 'wKRx09QR88pZ8RH7AbLDwFHIbNrj3FERWrZEvKcYHoTkMSaw83'

const accessToken = '1308240086421692416-UdVSleGkYo25QHSiVSIbHBZVKWvQG5'
const accessTokenSecret = 'IzD8d5tdRKWY3d8i6LmYRH3KBFPdnOb4shjXPNg2AQps9'

////////GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=elonmusk&count=3200
////////GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=kanyewest&count=3200

let T = new Twit ({
    consumer_key:   apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
});

//////// T.get('search/tweets', { screen_name: 'elonmusk', count: 1},  function (err, data, response) {
////////     console.log(data)
////////   })

//   let params = {username: '@elonmusk', count: 2};
  
//   T.get('search/tweets', params, gotData);

//   function gotData(err, data, response) {
//     // let tweets = data.statuses;
//     // for (let i = 0; i < tweets.length; ++i) {
//     //     console.log(tweets[i].text);
//     // }
//     console.log(data);
//   }

console.log("hello world");


var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send(null);
    }
}

var client = new HttpClient();
client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=100', function(response) {
    console.log("inside the GET");
});

