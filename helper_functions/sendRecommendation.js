var callSendAPI = require('./callSendAPI');

function sendRecommendation(recipientId, userData) {

// Grab values from userData object with ES6 destructuring
var { genre, media, preference, cheese } = userData;
console.log({genre});

var comedy = {
  movie: {
    mainstream: [
      {
        title: "Daddy's Home",
        subtitle: "Brad Whitaker is a radio host trying to get his step-children to love him.",
        item_url: "https://www.hulu.com/watch/1010436",
        image_url: "https://s1-ssl.dmcdn.net/PS8ls.jpg"
      },
      {
        title: "Ferris Bueller’s Day Off",
        subtitle: "A high school wise guy is determined to have an epic day off with friends.",
        item_url: "https://www.hulu.com/watch/922958",
        image_url: "http://www.brooklynvegan.com/files/2016/05/ferris-buellers-day-off-movie-poster-1986.jpg?w=630&h=425&zc=1&s=0&a=t&q=89"
      }
    ],
    indie: [
      {
        title: "Everybody Wants Some!!",
        subtitle: "A college freshman in the 80s meets his unruly new baseball teammates.",
        item_url: "https://www.hulu.com/watch/1039730?playlist_id=2325&asset_scope=movies",
        image_url: "http://www.impawards.com/2016/posters/everybody_wants_some_ver5.jpg"
      },
      {
        title: "Hunt for the Wilderpeople",
        subtitle: "A national manhunt is ordered for a rebellious kid and his foster uncle.",
        item_url: "https://www.hulu.com/watch/1004156?playlist_id=2325&asset_scope=moviess",
        image_url: "https://www.pictureshowman.com.au/cinema/wp-content/uploads/2016/06/hunt-for-the-wilderpeople-banner.jpg"
      }
    ]
  },
  tv: {
    mainstream: [
      {
        title: "Brooklyn Nine-Nine ",
        subtitle: "Detective Jake Peralta is a talented cop who doesn’t care much for rules.",
        item_url: "https://www.hulu.com/brooklyn-nine-nine",
        image_url: "https://images.alphacoders.com/490/thumb-1920-490603.jpg"
      },
      {
        title: "The Mindy Project",
        subtitle: "She’s a successful doctor by day, but when she leaves the office, all bets are off.",
        item_url: "https://www.hulu.com/the-mindy-project",
        image_url: "http://www.jillstanek.com/wp/wp-content/uploads/2015/02/The-Mindy-Project-poster.jpg"
      }
    ],
    indie: [
      {
        title: "Fresh off the Boat",
        subtitle: "A humorous look at immigrant life in America based on chef Eddie Huang's memoir",
        item_url: "https://www.hulu.com/fresh-off-the-boat",
        image_url: "https://ib1.hulu.com/show_key_art/21869?size=1600x600&region=US"
      },
      {
        title: "Steven Universe",
        subtitle: "A team of magical beings are the self-appointed guardians of the universe.",
        item_url: "https://www.hulu.com/steven-universe",
        image_url: "https://ib3.hulu.com/show_key_art/21721?size=1600x600&region=US"
      }
    ]
  }
}

// drama object
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
      },
      {
        title: "No Country for Old Men",
        subtitle: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong.",
        item_url: "https://www.hulu.com/watch/1041536",
        image_url: "http://img.hayhaytv.com/film/23012013/no-country-for-old-men_73131358905115.jpg"
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
      },
      {
        title: "Rosewood",
        subtitle: "A pathologist finds secrets in people's bodies using state-of-the-art equipment.",
        item_url: "https://www.hulu.com/rosewood",
        image_url: "https://ib1.hulu.com/show_key_art/24857?size=1600x600&region=US"
      }
    ]
  }
}

// Grab a single entry from the drama object
var suggestionArray = drama[media][preference][cheese];

// Destructure vars from suggestion to be used in messageData
var { title, subtitle, item_url, image_url } = suggestionArray;


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
  // Increment cheese by 1 after function is called the first time
  userData.cheese += 1
  callSendAPI(messageData);
}


module.exports = sendRecommendation;
