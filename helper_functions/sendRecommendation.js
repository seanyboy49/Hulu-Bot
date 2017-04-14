var callSendAPI = require('./callSendAPI');

function sendRecommendation(recipientId, userData) {

// Grab values from userData object with ES6 destructuring
var { genre, media, preference } = userData;
console.log({genre});

var drama = {
  movie: {
    mainstream: [
      {
        title: "Interstellar",
        subtitle: "A team of explorers travel through a wormhole in space.",
        item_url: "https://www.hulu.com/watch/876132",
        image_url: "http://www.hidefninja.com/wp-content/uploads/2015/01/interstellar-banner.jpg"
      },
      {
        title: "13 Hours: The Secret Soldiers of Benghazi",
        subtitle: "Islamic militants attack the U.S. Consulate in Benghazi, Libya.",
        item_url: "https://www.hulu.com/watch/1010449 ",
        image_url: "http://www.gmovieb.com/wp-content/uploads/2016/06/banner_2.jpg"
      }
    ],
    indie: [
      {
        title: "Up in the Air",
        subtitle: "Ryan enjoys living out of a suitcase until he meets a potential love interest.",
        item_url: "https://www.hulu.com/watch/1044238",
        image_url: "https://assets.mubi.com/images/notebook/post_images_danny/multiple%20images/MPOTW/up_in_the_air_detail2.jpg"
      }
    ]
  },
  tv: {
    mainstream: [
      {
        title: "Elementary",
        subtitle: "A modern take on the cases of Sherlock Holmes",
        item_url: "https://www.hulu.com/elementary",
        image_url: "https://ib2.hulu.com/show_key_art/23200?size=1600x600&region=US"
      },
      {
        title: "Smallville",
        subtitle: "A young Clark Kent struggles to find his place in the world.",
        item_url: "https://www.hulu.com/smallville ",
        image_url: "https://ib2.hulu.com/show_key_art/11217?size=1600x600&region=US"
      }
    ],
    indie: [
      {
        title: "Emerald City",
        subtitle: "A modern reimagining of the stories that led to the Wizard of Oz",
        item_url: "https://www.hulu.com/emerald-city",
        image_url: "https://ib1.hulu.com/show_key_art/29474?size=1600x600&region=US"
      }
    ]
  }
}

// Grab a single entry from the drama object
var suggestion = drama[media][preference][0]

console.log({media, preference});
// Destructure vars from suggestion to be used in messageData
var { title, subtitle, item_url, image_url } = suggestion;


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


module.exports = sendRecommendation;
