# Node Messenger Botsociety example
An example of a Facebook Messenger chatbot built with the [Messenger bot](https://github.com/remixz/messenger-bot) NPM package by [Remixz](https://github.com/remixz) and the [Botsociety NPM client](https://github.com/botsociety/node-client)

## Try it
You can use this chatbot example [on Facebook here](https://www.messenger.com/t/botsocietyexample)
You can check out the [Botsociety design here](https://app.botsociety.io/s/5a782f3b2e3d9e001c6e00f9?p=21cfd3eb75f46425e73a4c11ebe6dbd2ecf5be15)

## How to customize this example
If you want to run this example locally:
* Clone this repository locally or copy/paste app.js
* Setup `PAGE_TOKEN`, `VERIFY_TOKEN`, `APP_SECRET` by creating a new application at [developers.facebook](https://developers.facebook.com)
* Setup `BOTSOCIETY_USERID`, `BOTSOCIETY_APIKEY` by [signing up into Botsociety](https://app.botsociety.io/signup) and navigating [to the API section](https://app.botsociety.io/#/account/api)
* Inside Botsociety, create a new Facebook Messenger mockup and add up to 5 messages
* Navigate into the build mode and replace the `CONVERSATION ID` in app.js with the conversation id shown in this page
* Now you need to set up your webhook so that Facebook can communicate with your local code. If you don't have it, download [ngrok](https://ngrok.com/) and then launch `./ngrok http 3000` to start it
* Run `node app.js`
* Copy/paste the ngrok address and set up the webhook in the Facebook developer panel