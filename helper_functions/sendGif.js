var callSendAPI = require('./callSendAPI');

function sendGif(recipientId, gif_url) {
  console.log('inside sendGif');
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "image",
        payload: {
          url: gif_url
        }
      }
    }
  };

  callSendAPI(messageData);
}


module.exports = sendGif;
