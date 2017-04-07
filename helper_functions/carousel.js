var callSendAPI = require('./callSendAPI');

function sendMovieCarousel(recipientId) {
  console.log('inside sendMovieCarousel');
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
              title: "Rick and Morty",
              image_url: "",
              subtitle: "Rick and Morty is a show about a sociopathic scientist.",
              item_url: "https://www.oculus.com/en-us/rift/",
              image_url: "http://messengerdemo.parseapp.com/img/rift.png",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/rick-and-morty",
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

/*
 * Send a Structured Message (Generic Message type) using the Send API.
 *
 */


module.exports = sendMovieCarousel;
