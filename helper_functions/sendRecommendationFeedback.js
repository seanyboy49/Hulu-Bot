var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendRecommendationFeedback(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "How was that?",
      metadata: "RECOMMENDATION_FEEDBACK",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Thanks hulu-bot!",
          "payload":"PAYLOAD_KILL"
        },
        {
          "content_type":"text", 
          "title":"Give me another one!",
          "payload":"PAYLOAD_CHEESE"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendRecommendationFeedback;
