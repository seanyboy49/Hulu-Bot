var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function killConversation(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Tell me things like the following: 
        The name of an actor
        Your favorite TV show or movie
        A movie or TV genre
        Tell me a joke!"
    }
  };
return messageData;
}



module.exports = killConversation;
