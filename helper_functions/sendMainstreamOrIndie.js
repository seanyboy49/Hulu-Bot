var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendMainstreamOrIndie(recipientId, media) {
  var currentDate = new Date();

  var validationMessages = {
    tv: `'What are the 3 secrets to happiness? Puppies, a warm blanket, and the perfect TV series.' \n-Hulu-Bot, ${currentDate}'`,
    movie: "'The length of a film should be directly related to the endurance of the human bladder' \n-Alfred Hitchcock, 1950 \nWise words. Wise man. Anywho..."
  }

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `${validationMessages[media]} \nJust a few more things. Hollywood blockbuster or diamond in the rough?`,
      metadata: "PREFERENCE_PROMPT",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Show me a sure thing",
          "payload":"PAYLOAD_MAINSTREAM"
        },
        {
          "content_type":"text",
          "title":"Indie please",
          "payload":"PAYLOAD_INDIE"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendMainstreamOrIndie;
