var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function confirmMovie(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Great, so let's go with a movie. It's raining, you don't need to go outside anyway. I just need one more thing. Pick a cheese. 🧀",
      metadata: "CONFIRM_MOVIE",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Cheddar",
          "payload":"PAYLOAD_MOVIE_CHEDDAR"
        },
        {
          "content_type":"text",
          "title":"Stilton",
          "payload":"PAYLOAD_MOVIE_STILTON"
        },
        {
          "content_type":"text",
          "title":"Mozzarella",
          "payload":"PAYLOAD_MOVIE_MOZZARELLA"
        },
        {
          "content_type":"text",
          "title":"Ew, cheese",
          "payload":"PAYLOAD_MOVIE_EW"
        },
        {
          "content_type":"text",
          "title":"ALL OF THE CHEESE",
          "payload":"PAYLOAD_MOVIE_ALL_CHEESE"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = confirmMovie;
