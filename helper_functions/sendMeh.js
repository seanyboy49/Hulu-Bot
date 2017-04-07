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
          "title":"These were great! Thanks Hulu Bot!",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
        },
        {
          "content_type":"text",
          "title":"Meh...",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY"
        }
      ]
    }
  };

  callSendAPI(messageData);
}



module.exports = sendMeh;
