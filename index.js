var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var sendQuickEmotion = require('./helper_functions/sendQuickEmotion');
var sendMovieCarousel = require('./helper_functions/carousel');
var sendMeh = require('./helper_functions/sendMeh');
var sendTypingOn = require('./helper_functions/sendTypingOn');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// Grab Page Access Token from Heroku app dashboard
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

// Server frontpage
app.get('/', function (req, res) {
    res.send('This is TestBot Server');
});

// Facebook Webhook
app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'testbot_verify_token') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Invalid verify token');
    }
});

// handler receiving messages
app.post('/webhook', function (req, res) {
  // Make sure this is a page subscription
  if (req.body.object == "page") {
    // Iterate over each entry
    // There may be multiple entries of batched
    req.body.entry.forEach(function(entry) {
      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.postback) {
          processPostback(event);
        }
      });
    });
  }
    res.sendStatus(200);
});

function processPostback(event) {
  var senderId = event.sender.id;
  var payload = event.postback.payload;

  if (payload) {
    // If we receive a postback, check its payload to see if it matches
    // any special event and send back the corresponding example
    switch(payload) {
      case 'Greeting':
      sendMessage(senderId, {text: "One of these strike your fancy?"});
      sendMovieCarousel(senderId);
      setTimeout(sendMeh(senderId), 5000);
      break;

      case 'PAYLOAD_MEH':
      sendMessage(senderId, {text: "Ok, picky-pants. Let's try this another way."});
      sendMessage(senderId, {text: "Do you want to laugh or cry?"});
      break;
    }

  }

}


// generic function sending messages
function sendMessage(recipientId, message) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipientId},
            message: message,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        }
    });
};
