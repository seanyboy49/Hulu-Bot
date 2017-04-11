var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendWelcomePrompt(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Hey there. You look bored. Wanna watch something?",
      metadata: "DEVELOPER_DEFINED_METADATA",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Sure",
          "payload":"PAYLOAD_SURE"
        },
        {
          "content_type":"text",
          "title":"Maybe later.",
          "payload":"PAYLOAD_KILL"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendWelcomePrompt;
