var callSendAPI = require('./callSendAPI');

// Quick Emotion Options
function sendWelcomePrompt(recipientId) {
// get user's first name from the User Profile API and include it in Greeting

var firstName = function(recipientId) {
  request({
    url: "https://graph.facebook.com/v2.6/" + senderId,
    qs: {
      access_token: process.env.PAGE_ACCESS_TOKEN,
      fields: "first_name"
  },
    method: "GET"
}, function(error, response, body) {
  var greeting = "";
  if (error) {
    console.log("Error getting user's name: " +  error);
  } else {
    var bodyObj = JSON.parse(body);
    name = bodyObj.first_name;
  }
  return name;
});
}


  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Hey there, ${firstName}. You look bored. Wanna watch something?`,
      metadata: "DEVELOPER_DEFINED_METADATA",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Sure",
          "payload":"PAYLOAD_SURE"
        },
        {
          "content_type":"text",
          "title":"Maybe later.",
          "payload":"PAYLOAD_KILL"
        }
      ]
    }
  };
  callSendAPI(messageData);
}



module.exports = sendWelcomePrompt;
