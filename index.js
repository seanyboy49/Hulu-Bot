var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

// helper functions
var sendMovieCarousel = require('./helper_functions/sendMovieCarousel');
var sendMeh = require('./helper_functions/sendMeh');
var genrePrompt = require('./helper_functions/genrePrompt');
var confirmIndecision = require('./helper_functions/confirmIndecision');
var confirmMovie = require('./helper_functions/confirmMovie');
var commitmentPrompt = require('./helper_functions/commitmentPrompt');
var sendMovie = require('./helper_functions/sendMovie');
var sendWelcomePrompt = require('./helper_functions/sendWelcomePrompt');


// express set up
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// Grab Page Access Token from Heroku app dashboard
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN || "EAAasPUiqryMBAMAEL1tHCU3jmxDvITv0pXGIe1yDW9nq4IxTMnqH0nP2uw2ICQQDHOZC6Ot8iDsW1yVtZAIIGNChdaKPo55v7As12Xj44dYYpbc2L0ZBMrv2KVRgdHIbVbH3RJzL2dvKkrnT6NKoOMZB1pAJcjIZAbQ0eJYT0tQZDZD";

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

        } else  {
          console.log("Inside else statement");
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
  console.log("payload = ", payload);

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

// Case statements for Quick Replies
if (quickReply) {
  switch (quickReply.payload) {
    case 'PAYLOAD_SURE':
    var array_item = [sendMovieCarousel(senderId), sendMeh(senderId)] //my result is a array
    sendTextMessages(array_item, 0)
    break;

    case 'PAYLOAD_MEH':
    genrePrompt(senderId);
    break;

    case 'PAYLOAD_GREAT':
    sendMessage(senderId, { text: "Awesome! If you need another suggestion in the future, or just feel like chatting, try typing movie or tv!"})
    break;

    case 'PAYLOAD_KILL':
    sendMessage(senderId, { text: "Fine! I'll just watch TV by myself. But if change your mind, try typing movie or tv."})
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
    sendMessage(senderId, {text: "Btw, when are we going to take Sean out to his welcome lunch?"});
    break;
  }

  // if (messageText) {
  //   var formattedMsg = messageText.toLowerCase().trim();
  //   switch (formattedMsg) {
  //     case "movie":
  //     break;
  //
  //     case "tv":
  //     break;
  //
  //
  //
  //   }
  // }


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
