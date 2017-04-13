var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendTrendingOrBrainPicker(recipientId) {
// get user's first name from the User Profile API and include it in Greeting

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "You made the right choice. Do you want to see what's trending or shall I pick your brain?",
      metadata: "DEVELOPER_DEFINED_METADATA",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Let's see what's trending.",
          "payload":"PAYLOAD_TRENDING"
        },
        {
          "content_type":"text",
          "title":"Pick my brain!",
          "payload":"PAYLOAD_BRAINPICKER"
        }
      ]
    }
  };
  console.log("inside trending or brain picker");
  callSendAPI(messageData);
}



module.exports = sendTrendingOrBrainPicker;
