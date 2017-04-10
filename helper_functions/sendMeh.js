var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendMeh(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Were any of these good?",
      metadata: "DEVELOPER_DEFINED_METADATA",
      quick_replies: [
        {
          "content_type":"text",
          "title":"These were great!",
          "payload":"PAYLOAD_GREAT"
        },
        {
          "content_type":"text",
          "title":"Meh...",
          "payload":"PAYLOAD_MEH"
        },
      ]
    }
  };

  callSendAPI(messageData);
}



module.exports = sendMeh;
