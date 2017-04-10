var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function confirmIndecision(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Indecisiveness can be a sympton of depression. Let's go with a comedy.",
      metadata: "CONFIRM_INDECISION",
      quick_replies: [
        {
          "content_type":"text",
          "title":"I want feelings! 😭",
          "payload":"PAYLOAD_CRY"
        },
        {
          "content_type":"text",
          "title":"Someone's judgey. 😤",
          "payload":"PAYLOAD_OFFENDED"
        },
        {
          "content_type":"text",
          "title":"Let's start over. 👆",
          "payload":"PAYLOAD_STARTOVER"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = confirmIndecision;
