var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function commitmentPrompt(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Only because I care. Now let's talk commitment. How much time do you have?",
      metadata: "COMMITMENT_PROMPT",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Short and sweet. 📺",
          "payload":"PAYLOAD_TV"
        },
        {
          "content_type":"text",
          "title":"I've got all day. 🎬",
          "payload":"PAYLOAD_MOVIE"
        },
        {
          "content_type":"text",
          "title":"Gah. Start over! 😅",
          "payload":"PAYLOAD_STARTOVER"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = commitmentPrompt;
