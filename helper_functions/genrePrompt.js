var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function genrePrompt(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Do you want to laugh or cry?",
      metadata: "GENRE_PROMPT",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Laugh 😂",
          "payload":"PAYLOAD_LAUGH"
        },
        {
          "content_type":"text",
          "title":"Cry 😭",
          "payload":"PAYLOAD_CRY"
        },
        {
          "content_type":"text",
          "title":"I'm not sure...🤔",
          "payload":"PAYLOAD_INDECISION"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = genrePrompt;
