var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function killConversation(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Hope this one strikes your fancy. Otherwise, you can type start over, movie or tv."
    }
  };
return messageData;
}



module.exports = killConversation;
