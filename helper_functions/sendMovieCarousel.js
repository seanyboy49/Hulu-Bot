var callSendAPI = require('./callSendAPI');
var sendMeh

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
              title: "10 Cloverfield Lane",
              subtitle: "A young woman finds herself in an underground bunker with two men.",
              item_url: "https://www.hulu.com/watch/1034667",
              image_url: "http://pogo-movies.com/wp-content/uploads/2016/03/10-cloverfield.jpg",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/watch/1034667",
                  title: "Watch this!"
                }
              ]
            },
            {
              title: "Rick and Morty",
              subtitle: "Rick and Morty is a show about a sociopathic scientist and his dumb grandson.",
              item_url: "https://www.hulu.com/rick-and-morty",
              image_url: "https://ib1.hulu.com/show_key_art/22881?size=1600x600&region=US",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/rick-and-morty",
                  title: "Watch this!"
                }
              ]
            },
            {
              title: "Empire",
              subtitle: "A drama about the head of a music empire whose family all battle for his throne.",
              item_url: "https://www.hulu.com/empire",
              image_url: "https://ib2.hulu.com/show_key_art/21027?size=1600x600&region=US",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/empire",
                  title: "Watch this!"
                }
              ]
            },
            {
              title: "A hulu original - The Path",
              subtitle: "A family's struggle with faith, power and relationships in a cult.",
              item_url: "https://www.hulu.com/the-path",
              image_url: "https://ib4.hulu.com/show_key_art/26510?size=1600x600&region=US",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/the-path",
                  title: "Watch this!"
                }
              ]
            },
            {
              title: "Creed",
              subtitle: "The son of Apollo Creed looks to Rocky Balboa for guidance in proving his might in the ring.",
              item_url: "https://www.hulu.com/watch/999771",
              image_url: "http://reveringthoughts.com/wp-content/uploads/2015/12/Creed-movie-review.jpg",
              buttons: [
                {
                  type: "web_url",
                  url: "https://www.hulu.com/watch/999771",
                  title: "Watch this!"
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


module.exports = sendMovieCarousel;
