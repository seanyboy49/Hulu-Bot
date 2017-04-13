var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function killConversation(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "If you need another suggestion in the future, or just feel like chatting, message me at any time. \nTell me things like the following: \n \nThe name of an actor/actress \nYour favorite TV show or movie \nA movie or TV genre \nTell me a joke!"
    }
  };
  callSendAPI(messageData);
}



module.exports = killConversation;
