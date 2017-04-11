var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendMeh(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Any of these strike your fancy?",
      metadata: "DEVELOPER_DEFINED_METADATA",
      quick_replies: [
        {
          "content_type":"text",
          "title":"These were great! 😁",
          "payload":"PAYLOAD_GREAT"
        },
        {
          "content_type":"text",
          "title":"Meh...😐",
          "payload":"PAYLOAD_MEH"
        }
      ]
    }
  };
  console.log("inside sendMeh");
return messageData;
}



module.exports = sendMeh;
