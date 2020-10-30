# SlackBot
A custom SlackBot that could tell random memes.
The random meme_api is from: https://github.com/R3l3ntl3ss/Meme_Api

# How to run the SlackBot
Note: New Slack App does NOT support rtm api anymore, so in order to execute this script you need create a Classic App which will have a Legacy Bot Token.

1. Go to Slack App page and create a Classic App.
2. Copy the Legacy Bot Token and paste it under /src/constant.js (export const SLACK_OAUTH_TOKEN = your token).
3. Go to Visual Studio Code or any terminal that could run JS, install all "dependencies" that indicate under package.json (Method to install: npm i @slack/rtm-api).
4. Type: npm start. You will see the bot online.

# Tutorial
The bot has very few functions :/
1. "Parrot": It will say hey to you.
2. "Command List": Give you a command list.
3. "I want to rest": It will call you Code Monkey :/
4. "meme": Random post a meme from reddit. Note: sometimes the image fail to show up cuz Slack has a limitation on image size.
