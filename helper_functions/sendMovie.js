var callSendAPI = require('./callSendAPI');

function sendMovie(recipientId, title, subtitle, item_url, image_url) {
  console.log('inside sendMovie');
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: title,
              subtitle: subtitle,
              item_url: item_url,
              image_url: image_url,
              buttons: [
                {
                  type: "web_url",
                  url: item_url,
                  title: "Watch this!"
                }
              ]
            }
          ]
        }
      }
    }
  };

  callSendAPI(messageData);

}


module.exports = sendMovie;
