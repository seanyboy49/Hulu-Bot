var callSendAPI = require('./callSendAPI');

function sendExperienceHulu(recipientId) {
  console.log('inside sendExperienceHulu');
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
              title: "Experience Hulu",
              subtitle: "Watch live sports, news, and events. Save anything to watch later, pause Live TV and pick up where you left off!",
              item_url: "https://www.experiencehulu.com/",
              image_url: "https://www.experiencehulu.com/social-share-image.jpg",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.experiencehulu.com/",
                  title: "Experience Hulu!"
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

/*
 * Send a Structured Message (Generic Message type) using the Send API.
 *
 */


module.exports = sendExperienceHulu;
