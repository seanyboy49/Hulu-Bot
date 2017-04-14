var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function cheesePicker(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Pick a cheese. 🧀",
      metadata: "CONFIRM_MOVIE",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Cheddar",
          "payload":"PAYLOAD_CHEESE"
        },
        {
          "content_type":"text",
          "title":"Stilton",
          "payload":"PAYLOAD_CHEESE"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = cheesePicker;
