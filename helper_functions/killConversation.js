var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function killConversation(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "If you need another suggestion in the future, or just feel liek chatting, message me at any time. \n Tell me things like the following: \n \n The name of an actor/actress \n Your favorite TV show or movie \n A movie or TV genre \n Tell me a joke!"
    }
  };
  callSendAPI(messageData);
}



module.exports = killConversation;
