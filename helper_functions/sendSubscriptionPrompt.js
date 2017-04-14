var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendSubscriptionPrompt(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Do you want me to notify you when new episodes are released?",
      metadata: "SUBSCRIPTION",
      quick_replies: [
        {
          "content_type":"text",
          "title":"👍",
          "payload":"PAYLOAD_OPT_IN"
        },
        {
          "content_type":"text",
          "title":"👎",
          "payload":"PAYLOAD_OPT_OUT"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendSubscriptionPrompt;
