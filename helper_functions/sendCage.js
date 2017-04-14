var callSendAPI = require('./callSendAPI');

function sendCage(recipientId) {
  console.log('inside sendCage');
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
              title: "Dying of the Light",
              subtitle: "A veteran CIA agent goes rogue to hunt down a powerful nemesis.",
              item_url: "https://www.hulu.com/watch/856695",
              image_url: "http://www.soundtrackmania.net/wp-content/uploads/2015/02/dyingofthelight.jpg",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/watch/856695",
                  title: "Cage Me!"
                }
              ]
            },
            {
              title: "Bankok Dangerous",
              subtitle: "An assassin falls in love while performing a series of hits in China.",
              item_url: "https://www.hulu.com/watch/1054428",
              image_url: "https://fanart.tv/fanart/movies/13184/moviethumb/bangkok-dangerous-523ecbf183454.jpg",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/watch/1054428",
                  title: "Cage Me!"
                }
              ]
            },
            {
              title: "SNL: Nicholas Cage Monologue",
              subtitle: "Nicholas Cage talks too much about his leading ladies' body parts.",
              item_url: "https://www.hulu.com/watch/271937",
              image_url: "https://a248.e.akamai.net/ib.huluim.com/video/40042316?size=220x124&region=us",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/watch/271937",
                  title: "Cage Me!"
                }
              ]
            }
          ]
        }
      }
    }
  };

  return messageData;
}

/*
 * Send a Structured Message (Generic Message type) using the Send API.
 *
 */


module.exports = sendCage;
