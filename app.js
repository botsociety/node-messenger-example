'use strict';
require('dotenv').config();
const http = require('http');
const Bot = require('messenger-bot');
const Botsociety = require('botsociety');

//Let's set up the Messenger bot
//Remember to put your own tokens here!
let bot = new Bot({
  token: process.env.FB_TOKEN,
  verify: process.env.FB_VERIFY,
  app_secret: process.env.FB_APP_SECRET
})

//Let's set up Botsociety. You can grab this keys by signing in and then going to https://app.botsociety.io/#/account/api
let botsociety = new Botsociety({
  userId: process.env.BOTSOCIETY_USER_ID,
  apiKey: process.env.BOTSOCIETY_API_KEY
});

bot.on('error', (err) => {
  console.log(err.message)
});
var questions = [3, 5, 7];
var users = {};

bot.on('message', (payload, reply) => {

  var messageId;
  if (users[payload.sender.id]) { //we already know this user
    messageId = questions[Math.floor(Math.random()*questions.length)];
    //grab a random questions after we have greeted the user
  } else { //we have never seen this user! Let's greet him
    messageId = 1;
    users[payload.sender.id] = "greeted";
  }

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err;

    botsociety.getMessageByConversation(process.env.BOTSOCIETY_CONVERSATION_ID, messageId)
    .then(function(response) {
      var text = response.text_with_variables.replace("${name}", profile.first_name).replace("${phrase}",  payload.message.text);
      reply({text}, (err) => {
        console.log(`Said to ${profile.first_name} ${profile.last_name}: ${text} in response to ${payload.message.text}`);
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')
