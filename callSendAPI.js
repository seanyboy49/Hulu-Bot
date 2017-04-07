// Grab Page Access Token from Heroku app dashboard
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

var request = require('request');


/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */

function callSendAPI(messageData) {
  console.log("IN CALLSENDAPI !!!");
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    console.log("IN CALLSENDAPI CALLBACK!!!");
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;
      console.log("IN IF BLOCK!!!")
      if (messageId) {
        console.log("Successfully sent message with id %s to recipient %s",
          messageId, recipientId);
      } else {
      console.log("Successfully called Send API for recipient %s",
        recipientId);
      }
    } else {
      // console.log("IN ELSE BLOCK!!! ")
      // console.log("RESPONSE IS ", response);
      console.error(response.error);
    }
  });
}

module.exports = callSendAPI;
