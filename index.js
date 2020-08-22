const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token:'xoxb-572692838501-1301831320711-SGehY2mLV3kOaWhkBNK9kEeF',
    name: 'PartyParrot'
});

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':cat:'
    };

    bot.postMessageToChannel(
        'general', 
        'Code Monkey',
        params
    );
});
// This does not work for now.
