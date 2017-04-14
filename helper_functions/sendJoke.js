var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendJoke(recipientId) {

var jokeArray = [
  "",
  ""

]

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: { joke
    }
  };
  callSendAPI(messageData);
}



module.exports = sendJoke;
