var callSendAPI = require('./callSendAPI');

function sendMovieCarousel(recipientId) {
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
              image_url: "https://ib1.hulu.com/show_key_art/22881?size=1600x600&region=US",
              subtitle: "Rick and Morty is a show about a sociopathic scientist who drags his unintelligent grandson on insanely dangerous adventures across the universe.",
              default_action: {
                type: "web_url",
                url: "dfdfd",
                messenger_extensions: true,
                webview_height_ratio: "tall"
              },
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

module.exports = sendMovieCarousel;
