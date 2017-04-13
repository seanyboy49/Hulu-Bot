var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendMediaPrompt(recipientId, genre) {

  var validationMessages = {
    comedy: "Laughter is the best medicine.",
    drama: "So emo.",
    action: "Get pumped!",
    documentary: "Smart choice!",
    foreign: "Oui, oui!"
  }

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `${validationMessages[genre]} \nBut now we have to talk about commitment. How much time do you have?`,
      metadata: "GENRE_PROMPT",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Not much 📺",
          "payload":"PAYLOAD_TV"
        },
        {
          "content_type":"text",
          "title":"I've got time 🎬",
          "payload":"PAYLOAD_MOVIE"
        },
        {
          "content_type":"text",
          "title":"Uh, commitment? 😅",
          "payload":"PAYLOAD_TREPIDATION"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendMediaPrompt;
