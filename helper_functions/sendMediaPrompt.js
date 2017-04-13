var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendMediaPrompt(recipientId, genre) {

  var validationMessages = {
    comedy: "Laughter is the best medicine.",
    drama: "So emo.",
    action: "Get pumped!",
    documentary: "Smart choice!",
    foreign: "Oui, oui!"
  }

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `${validationMessages[genre]} \nNow how about format?`,
      metadata: "MEDIA_PROMPT",
      quick_replies: [
        {
          "content_type":"text",
          "title":"TV 📺",
          "payload":"PAYLOAD_TV"
        },
        {
          "content_type":"text",
          "title":"Movie 🎬",
          "payload":"PAYLOAD_MOVIE"
        },
        {
          "content_type":"text",
          "title":"Live 📰 🏀 ⚾",
          "payload":"PAYLOAD_LIVE"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendMediaPrompt;
