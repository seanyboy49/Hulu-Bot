var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

// helper functions
var sendMovieCarousel = require('./helper_functions/sendMovieCarousel');
var sendCarouselFeedback = require('./helper_functions/sendCarouselFeedback');
var sendGenrePrompt = require('./helper_functions/sendGenrePrompt');
var confirmIndecision = require('./helper_functions/confirmIndecision');
var confirmMovie = require('./helper_functions/confirmMovie');
var commitmentPrompt = require('./helper_functions/commitmentPrompt');
var sendMovie = require('./helper_functions/sendMovie');
var sendWelcomePrompt = require('./helper_functions/sendWelcomePrompt');
var sendTrendingOrBrainPicker = require('./helper_functions/sendTrendingOrBrainPicker');
var killConversation = require('./helper_functions/killConversation');


// express set up
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// Grab Page Access Token from Heroku app dashboard
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

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
        if (event.postback) { // Get Started
          console.log("inside postback");
          processPostback(event);
        } else  {
          console.log("inside receivedMessage");
          receivedMessage(event)
        }
      });
    });
  }
    res.sendStatus(200);
});

// For Postback buttons, structured messages, or Get Started Buttons
function processPostback(event) {
  var senderId = event.sender.id;
  var payload = event.postback.payload;

  if (payload) {
    // If we receive a postback, check its payload to see if it matches
    // any special event and send back the corresponding example
    switch(payload) {
      case 'Greeting':
      // get user's first name from the User Profile API and include it in Greeting
        request({
          url: "https://graph.facebook.com/v2.6/" + senderId,
          qs: {
            access_token: process.env.PAGE_ACCESS_TOKEN,
            fields: "first_name"
        },
          method: "GET"
      }, function(error, response, body) {
        var greeting = "";
        if (error) {
          console.log("Error getting user's name: " +  error);
        } else {
          var bodyObj = JSON.parse(body);
          name = bodyObj.first_name;
          sendWelcomePrompt(senderId, name);
        }
      });
      break;
    }
  }
}

/*
 * Message Event
 *
 * This event is called when a message is sent to your page. The 'message'
 * object format can vary depending on the kind of message that was received.
 * Read more at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received
 *
 * For this example, we're going to echo any text that we get. If we get some
 * special keywords ('button', 'generic', 'receipt'), then we'll send back
 * examples of those bubbles to illustrate the special message bubbles we've
 * created. If we receive a message with an attachment (image, video, audio),
 * then we'll simply confirm that we've received the attachment.
 *
 */
function receivedMessage(event) {
  var senderId = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderId, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));


  // You may get a text or attachment but not both
  var messageText = message.text;
  var messageAttachments = message.attachments;
  var quickReply = message.quick_reply;

  if (quickReply) {
    console.log("inside quickreply");
    processQuickReply(quickReply, senderId)
  } else if (messageText) {
    console.log("inside messageText");
    processMessageText(messageText, senderId);
  }
}


function processQuickReply(quickReply, senderId) {
  // Case statements for Quick Replies
    switch (quickReply.payload) {

      // Watch something prompt
      case 'PAYLOAD_SURE':
      sendTrendingOrBrainPicker(senderId);
      break;

      case 'PAYLOAD_KILL':
      killConversation(senderId);
      break;

      // Trending or Brain Picker
      case 'PAYLOAD_TRENDING':
      var array_item = [sendMovieCarousel(senderId), sendCarouselFeedback(senderId)]
      sendMessage(senderId, {text: "I've got 5 options, coming in hot!"})
      setTimeout(function() {
        sendTextMessages(array_item, 0)
      },3000);
      break;

      case 'PAYLOAD_BRAINPICKER':
      sendGenrePrompt(senderId);
      break;

      // Carousel Feedback
      case 'PAYLOAD_MEH':
      sendGenrePrompt(senderId);
      break;

      case 'PAYLOAD_GREAT':
      killConversation(senderId);
      break;



      case 'PAYLOAD_INDECISION':
      confirmIndecision(senderId);
      break;

      case 'PAYLOAD_OFFENDED':
      commitmentPrompt(senderId);
      break;

      case 'PAYLOAD_STARTOVER':
      genrePrompt(senderId);
      break;

      case 'PAYLOAD_MOVIE':
      confirmMovie(senderId);
      break;

      case 'PAYLOAD_MOVIE_CHEDDAR':
      sendMovie(senderId, "Ferris Bueller's Day Off", "High school senior Ferris Bueller decides to skip school on a spring day by faking an illness", "https://www.hulu.com/watch/922958", "http://www.brooklynvegan.com/files/2016/05/ferris-buellers-day-off-movie-poster-1986.jpg?w=630&h=425&zc=1&s=0&a=t&q=89");

      setTimeout(function() {
        sendMessage(senderId, {text: "Btw, when are we going to take Sean out to his welcome lunch?"});
      },3000)
      break;

      }
}

function processMessageText(messageText, senderId) {
  var formattedMsg = messageText.toLowerCase().trim();
  switch(messageText) {

    case 'start over':
    sendWelcomePrompt(senderId, "Sean")
    break;
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


function sendTextMessages(array_item, i) {
    if (i < array_item.length) {
        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {access_token: PAGE_ACCESS_TOKEN},
            method: 'POST',
            json: array_item[i]
        }, function(error, response, body) {
            if (error) {
                console.log('Error sending messages: ', error)
            } else if (response.body.error) {
                console.log('Error: ', response.body.error)
            }
            sendTextMessages(array_item, i+1)
        })
    } else return
}
