var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendGenrePrompt(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "OK picky-pants. Let's get inside that noggin. What are you in the mood for?",
      metadata: "GENRE_PROMPT",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Comedy 😂",
          "payload":"PAYLOAD_COMEDY"
        },
        {
          "content_type":"text",
          "title":"Drama 😭",
          "payload":"PAYLOAD_DRAMA"
        },
        {
          "content_type":"text",
          "title":"Action 🤔",
          "payload":"PAYLOAD_ACTION"
        },
        {
          "content_type":"text",
          "title":"Documentary 🤓",
          "payload":"PAYLOAD_DOCUMENTARY"
        },
        {
          "content_type":"text",
          "title":"Foreign 🗺️ ",
          "payload":"PAYLOAD_FOREIGN"
        },
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendGenrePrompt;
