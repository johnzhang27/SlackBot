import { RTMClient } from '@slack/rtm-api'
import { SLACK_OAUTH_TOKEN, BOT_TEST_CHANNEL, ES_CHANNEL } from './constants';
import { WebClient } from '@slack/web-api';

const axios = require('axios');
const rtm = new RTMClient(SLACK_OAUTH_TOKEN);
const web = new WebClient(SLACK_OAUTH_TOKEN);

rtm.start()
    .catch(console.error);
rtm.on('ready', async () =>{
    console.log('bot started')
    sendMessage(BOT_TEST_CHANNEL, 'Bot is online')
});

rtm.on('slack_event', async (eventType, event) => {
    console.log(eventType)
    console.log(event)
    if(event && event.type === 'message'){
        if(event.text === 'Parrot'){
            hello(event.channel, event.user)
        }
        if(event.text === 'Command List'){
            list(event.channel)
        }
        if(event.text === 'I want to rest'){
            rest(event.channel, event.user)
        }
        if(event.text === 'meme'){
            getMeme(event.channel)
        }
    }
})
// Add more function to the bot in the future.
function hello(channelId,userId){
    sendMessage(channelId, `Hello! <@${userId}>`)
}
function list(channelId){
    sendMessage(channelId, '1. Parrot\n2. Command List\n3. I want to rest\n4. meme')
}
function rest(channelId,userId){
    sendMessage(channelId, `Go to work! <@${userId}> you CODE MONKEY!`)
}
function getMeme(channelId){
    axios.get('https://meme-api.herokuapp.com/gimme')
    .then(res => {
        const meme_url = res.data.url;
        const meme = [{"title":"meme","image_url":meme_url}]
        sendPicture(channelId,meme)
    })
}
async function sendMessage(channel, message){
    await web.chat.postMessage({
        channel: channel,
        text: message,
    });
}
async function sendPicture(channel, picture){
    await web.chat.postMessage({
        channel: channel,
        attachments: picture,
    });
}
