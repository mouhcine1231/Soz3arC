//Code to raise the level of robot accounts | كود ل رفع لفل حسابات بروبوت
const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1029022367437037590',
    randomLetters: false, 
    time: 10000, 
    type: 'eng' 
});
client.login();
//https://ra3dstudio.com CopyRight Codes
