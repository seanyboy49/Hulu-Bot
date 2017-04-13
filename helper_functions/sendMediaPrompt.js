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
          "title":"Comedy 😂",
          "payload":"PAYLOAD_COMEDY"
        },
        {
          "content_type":"text",
          "title":"Drama 😭",
          "payload":"PAYLOAD_DRAMA"
        },
        {
          "content_type":"text",
          "title":"Action 🤔",
          "payload":"PAYLOAD_ACTION"
        },
        {
          "content_type":"text",
          "title":"Documentary 🤓",
          "payload":"PAYLOAD_DOCUMENTARY"
        },
        {
          "content_type":"text",
          "title":"Foreign 🗺️ ",
          "payload":"PAYLOAD_FOREIGN"
        },
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendMediaPrompt;
