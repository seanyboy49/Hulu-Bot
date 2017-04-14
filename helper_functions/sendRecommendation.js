var callSendAPI = require('./callSendAPI');

function sendRecommendation(recipientId, userData) {

// Grab values from userData object with ES6 destructuring
var { genre, media, preference, cheese } = userData;
console.log({genre});

var library = {
  // comedy
  comedy: {
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
  },
  // drama object
  drama: {
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
  },
  // Action object
  drama: {
    movie: {
      mainstream: [
        {
          title: "Spectre",
          subtitle: "Bond faces an enemy who is closer than he knows."
          item_url: "https://www.hulu.com/watch/988103",
          image_url: "https://multiverseentertainment.files.wordpress.com/2015/11/spectre-banner.png "
        },
        {
          title: "The Hunger Games: Mockingjay Part 1",
          subtitle: "Following her rescue from the devastating Quarter Quell, Katniss awakes in the complex beneath the supposedly destroyed District 13.",
          item_url: "https://www.hulu.com/watch/850271 ",
          image_url: "http://cdn.kidspot.com.au/wp-content/uploads/2014/11/the-hunger-games-mockingjay-part-1-banner.png"
        }
      ],
      indie: [
        {
          title: "The Warriors",
          subtitle: "A turf battle between New York City street gangs that rages from Coney Island to the Bronx.",
          item_url: "https://www.hulu.com/watch/991539",
          image_url: "https://s-media-cache-ak0.pinimg.com/originals/1f/c7/47/1fc7475e45ae43a9bd8d730131e661df.jpg"
        },
        {
          title: "Shaun of the Dead",
          subtitle: "With his trusty roommate by his side, nothing -- not even the living dead -- can stand between Shaun and the two most important women in his life.",
          item_url: "https://www.hulu.com/watch/1054442",
          image_url: "https://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/51ce61a5e4b0d911b449b6b3/1350062481223/1000w/mondo-stand-new-york-comic-con-posters.jpeg"
        }
      ]
    },
    tv: {
      mainstream: [
        {
          title: "Archer",
          subtitle: "Covert black ops and espionage take a back seat to zany personalities and relationships between secret agents and drones.",
          item_url: "https://www.hulu.com/archer",
          image_url: "https://ib.hulu.com/show_key_art/3433?size=1600x600&region=US"
        },
        {
          title: "Legion",
          subtitle: "Legion follows a troubled young man who may be more than human.",
          item_url: "https://www.hulu.com/legion ",
          image_url: "https://ib2.hulu.com/show_key_art/29812?size=1600x600&region=US"
        }
      ],
      indie: [
        {
          title: "21 Jump Street",
          subtitle: "Crime in school is bad, so to combat it, LAPD higher-ups decide to send four young-looking officers to high school to pose as students.",
          item_url: "https://www.hulu.com/21-jump-street",
          image_url: "https://ib2.hulu.com/show_key_art/2418?size=1600x600&region=US"
        },
        {
          title: "Vikings",
          subtitle: "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to cross the sea to unknown lands.",
          item_url: "https://www.hulu.com/vikings",
          image_url: "https://ib3.hulu.com/show_key_art/13482?size=1600x600&region=US"
        }
      ]
    }
  },

  // documentary object
  documentary: {
    movie: {
      mainstream: [
        {
          title: "Under the Sea",
          subtitle: "An underwater look at the diverse coastal regions of Southern Australia, New Guinea and the Indo-Pacific areas and the impact of global warming."
          item_url: "https://www.hulu.com/watch/1051487",
          image_url: " http://www.hidefninja.com/wp-content/uploads/2010/04/IMAXUTS-1.png"
        },
        {
          title: "March of the Penguins",
          subtitle: "At the end of each Antarctic summer, the emperor penguins of the South Pole journey to their traditional breeding grounds.",
          item_url: "https://www.hulu.com/watch/1051443",
          image_url: "http://www.flickeringmyth.com/wp-content/uploads/2016/05/march-of-the-penguins-600x338.jpg"
        }
      ],
      indie: [
        {
          title: "Fat, Sick & Nearly Dead",
          subtitle: "Watch Joe Cross, 100 lbs overweight, regain his health by juicing and inspire others along the way.",
          item_url: "https://www.hulu.com/watch/289122",
          image_url: "http://www.fatsickandnearlydead.com/images/fatsickandnearlydead-sub.png"
        },
        {
          title: "Ai Weiwei: Never Sorry",
          subtitle: "Alison Klayman documents the life and work of Chinese artist and activist Ai Weiwei.",
          item_url: "https://www.hulu.com/watch/1019413",
          image_url: "http://www.moustachemagazine.com/wp-content/uploads/2013/07/Never-Sorry-Poster-Wide.jpg"
        }
      ]
    },
    tv: {
      mainstream: [
        {
          title: "Ancient Aliens",
          subtitle: "Ancient Aliens explores the controversial theory that extraterrestrials have visited Earth for millions of years.",
          item_url: "https://www.hulu.com/ancient-aliens",
          image_url: "https://ib2.hulu.com/show_key_art/8971?size=1600x600&region=US"
        },
        {
          title: "Deadliest Catch",
          subtitle: "Crime in school is bad, so to combat it, LAPD higher-ups decide to send four young-looking officers to high school to pose as students.",
          item_url: "https://www.hulu.com/21-jump-street",
          image_url: "https://ib2.hulu.com/show_key_art/2418?size=1600x600&region=US"
        }
      ],
      indie: [
        {
          title: "The Story of God with morgan Freeman",
          subtitle: "Morgan Freeman explores the meaning of life, God, and many big questions in between in an effort to understand how religion has evolved and shaped society.",
          item_url: "https://www.hulu.com/the-story-of-god-with-morgan-freeman",
          image_url: "https://ib.hulu.com/show_key_art/27371?size=1600x600&region=US"
        },
        {
          title: "Behind the Mask",
          subtitle: "Behind the Mask is a Hulu original documentary series chronicles the trials and tribulations of sports mascots.",
          item_url: "https://www.hulu.com/behind-the-mask",
          image_url: "https://ib1.hulu.com/show_key_art/12904?size=1600x600&region=US"
        }
      ]
    }
  },

  // foreign object
  foreign: {
    movie: {
      mainstream: [
        {
          title: "Blue is the Warmest Color",
          subtitle: "Adèle's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman."
          item_url: "https://www.hulu.com/watch/852603",
          image_url: "https://celluloidjunkie.files.wordpress.com/2013/10/blueisthewarmestcolor_banner.jpg?w=900&h=450"
        },
        {
          title: "The Skin I Live In",
          subtitle: "A brilliant plastic surgeon, haunted by past tragedies, creates a type of synthetic skin that withstands any kind of damage.",
          item_url: "https://www.hulu.com/watch/1049133",
          image_url: "http://topicstock.pantip.com/chalermthai/topicstock/2012/11/A12995175/A12995175-3.jpg"
        }
      ],
      indie: [
        {
          title: "'71",
          subtitle: "In 1971, a young and disorientated British soldier is accidentally abandoned by his unit following a riot on the deadly streets of Belfast.",
          item_url: "https://www.hulu.com/watch/909375",
          image_url: "http://www.finalreel.co.uk/wp-content/uploads/2014/08/71-UK-Quad-Poster-slice.jpg"
        },
        {
          title: "Akira",
          subtitle: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath.",
          item_url: "https://www.hulu.com/watch/603799",
          image_url: "https://static1.squarespace.com/static/5411df7ee4b01dce1367679d/t/55edac15e4b00f678f3f3073/1441639450043/"
        }
      ]
    },
    tv: {
      mainstream: [
        {
          title: "Misfits",
          subtitle: "A group of young offenders doing community service get struck by lightning during a storm, and begin to develop superpowers.",
          item_url: "https://www.hulu.com/misfits",
          image_url: "https://ib1.hulu.com/show_key_art/6909?size=1600x600&region=US"
        },
        {
          title: "Coffee Prince",
          subtitle: "A bachelor pretends to be gay in an effort to keep his family from pushing him to get married.",
          item_url: "https://www.hulu.com/coffee-prince",
          image_url: "https://ib3.hulu.com/show_key_art/4269?size=1600x600&region=US"
        }
      ],
      indie: [
        {
          title: "Samurai Champloo",
          subtitle: "Samurai Champloo follows two swordsmen and a brave girl in a quest across Japan to find the sunflower samurai.",
          item_url: "https://www.hulu.com/samurai-champloo",
          image_url: "https://ib1.hulu.com/show_key_art/3902?size=1600x600&region=US"
        },
        {
          title: "Grand Hotel",
          subtitle: "Julio, a young man, arrives at the Grand Hotel, an idyllic place in the middle of the countryside, to investigate the disappearance of his sister.",
          item_url: "https://www.hulu.com/grand-hotel",
          image_url: "https://ib3.hulu.com/show_key_art/15994?size=1600x600&region=US"
        }
      ]
    }
  }
}




// Grab a single entry from the drama object
var suggestionArray = library[genre][media][preference][cheese];

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
