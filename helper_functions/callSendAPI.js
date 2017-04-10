// Grab Page Access Token from Heroku app dashboard
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN || "EAAasPUiqryMBAMAEL1tHCU3jmxDvITv0pXGIe1yDW9nq4IxTMnqH0nP2uw2ICQQDHOZC6Ot8iDsW1yVtZAIIGNChdaKPo55v7As12Xj44dYYpbc2L0ZBMrv2KVRgdHIbVbH3RJzL2dvKkrnT6NKoOMZB1pAJcjIZAbQ0eJYT0tQZDZD";

var request = require('request');


/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
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
