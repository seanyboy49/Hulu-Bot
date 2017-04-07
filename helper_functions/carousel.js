var callSendAPI = require('./callSendAPI');

// function sendMovieCarousel(recipientId) {
//   console.log('inside sendMovieCarousel');
//   var messageData = {
//     recipient: {
//       id: recipientId
//     },
//     message: {
//       attachment: {
//         type: "template",
//         payload: {
//           template_type: "generic",
//           elements: [
//             {
//               title: "Rick and Morty",
//               image_url: "https://ib1.hulu.com/show_key_art/22881?size=1600x600&region=US",
//               subtitle: "Rick and Morty is a show about a sociopathic scientist who drags his unintelligent grandson on insanely dangerous adventures across the universe.",
//               default_action: {
//                 type: "web_url",
//                 url: "dfdfd",
//                 messenger_extensions: true,
//                 webview_height_ratio: "tall"
//               },
//               buttons: [
//                 {
//                   type: "web_url",
//                   url: "https://www.hulu.com/rick-and-morty",
//                   title: "Watch this!"
//                 }
//               ]
//             }
//           ]
//         }
//       }
//     }
//   };
//
//   callSendAPI(messageData);
// }

/*
 * Send a Structured Message (Generic Message type) using the Send API.
 *
 */
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
          elements: [{
            title: "rift",
            subtitle: "Next-generation virtual reality",
            item_url: "https://www.oculus.com/en-us/rift/",
            image_url: "https://ib1.hulu.com/show_key_art/22881?size=1600x600&region=US"",
            buttons: [{
              type: "web_url",
              url: "https:www.oculus.com/en-us/rift/",
              title: "Open Web URL"
            }, {
              type: "postback",
              title: "Call Postback",
              payload: "Payload for first bubble",
            }],
          }, {
            title: "touch",
            subtitle: "Your Hands, Now in VR",
            item_url: "https://www.oculus.com/en-us/touch/",
            image_url: "https:ib1.hulu.com/show_key_art/22881?size=1600x600&region=US",
            buttons: [{
              type: "web_url",
              url: "https://www.oculus.com/en-us/touch/",
              title: "Open Web URL"
            }, {
              type: "postback",
              title: "Call Postback",
              payload: "Payload for second bubble"
            }]
          }]
        }
      }
    }
  };

  callSendAPI(messageData);
}

module.exports = sendMovieCarousel;
